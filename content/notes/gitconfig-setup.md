---
title: Gitconfig Setup
description: How to Setup Git for Multiple Account in Local Machine
published: true
date: 2023-10-28
tags:
  - git
---

It's common to have different / multiple Git accounts (personal Github account and work git account). Sometimes it could be a problem if committing changes to work repo using personal git account. It would be a hassle to keep switching git account each time we wanna commit. There's a more convenient way to automatically commit with the right git account according to the folder / repo being worked on. Enter `gitconfig` ✨.

Follow these steps to setup multiple gitconfig in local machine:

## Generate SSH Keys for Each Git Account

SSH keys are used for authentication, and different keys are required for different accounts. You can generate SSH keys using the command `ssh-keygen` in the terminal. Make sure you generate different SSH keys for each Git account.

## Add SSH Keys to Git Accounts

Once you have generated SSH keys, you need to add them to your Git accounts. You can add SSH keys by going to the settings of your Git account and adding the public key.

## Configure GitConfig or SSH Config

There are two ways to achieve resolving correct SSH key for each git account. The first one is folder base (with GitConfig) and the other one is host match (using SSH Config). Use whichever suits to your need.

### Option 1: GitConfig Setup

```file
// .gitconfig

[user]
	email = your_email@email.com
	name = your_name
	username = your_username

[includeif "gitdir:example/work/folder/"]
	path = ~/.gitconfig_work
[credential]
	helper = manager
```

```file
// .gitconfig_work

[user]
  name = your_name
  email = your_work_mail@email.com
  username = your_work_username
[core]
  sshCommand = "ssh -i ~/.ssh/your_work_git_ssh_key_file"
```

This configuration will match the current working repository folder location.

### Option 2: SSH Config Setup

You need to configure the SSH config file to use the correct SSH key for each Git account. You can edit the SSH config file by running the command `nano ~/.ssh/config` in the terminal. Add the following lines to the config file:

```file
# First account
Host github.com-first
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa_first

# Second account
Host github.com-second
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa_second
```

You can also use folder matching for the configuration file. For example, if you have multiple Git accounts for work, you can use the following configuration:

```file
# Work account
Host work.github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa_work

```

This configuration will match any host that starts with `work.github.com`, allowing you to use the same SSH key for all of your Git accounts for work.

## Clone Git Repositories

You can now clone Git repositories using the SSH URLs for each account. For example, if you want to clone a repository from the first account, you can use the SSH URL `git@github.com-first:username/repo.git`.

References:

- https://git-scm.com/docs/git-config#EXAMPLES
- https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-config
