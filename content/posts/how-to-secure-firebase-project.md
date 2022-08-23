---
title: How to Secure Your Firebase Project
date: "2021-05-13"
cover: https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&q=80
legacyID: "2021-05-13-how-to-secure-firebase-project"
thumbnail: "🔒"
published: true
tags:
  - security
  - firebase
---

> disclaimer: This is not by any means to be the best practice guide of using firebase in every project. Every project has its own needs and specifications. This guide may not be suitable with your needs.

Do you develop apps using Firebase? If so, we should know that our firebase configs will be exposed to the client (especially for web clients). Then what's the deal? Many possibilities can be happened and prevented. So many articles already covers on how to secure our firebase project by using security rules, authentication check, etc. I usually define my security rules using a package named [`@jahed/firebase-rules`](https://www.npmjs.com/package/@jahed/firebase-rules). But how about preventing someone from making their own client and use our exposed firebase configs to do some shady stuffs towards our realtime database?

## Apply Restrictions to the API Key

Every firebase project is a GCP (Google Cloud Platform) project, so we can go to Google Cloud console to configure further our firebase project. We can restrict the API key even though it is exposed. Just follow these steps:

1. Go to [https://console.cloud.google.com/apis](https://console.cloud.google.com/apis),
   ![Credentials Tab](https://sznm.dev/images/2021-05-13-how-to-secure-firebase-project/GCP-01.png)
2. Select the desired firebase project,
3. Go to `Credentials` menu,
4. Look for `API Keys` section, select the API key which has `...(auto created by Firebase)`,
   ![API Key Restrictions Tab](https://sznm.dev/images/2021-05-13-how-to-secure-firebase-project/GCP-02.png)
5. You will be directed to a page called `Restrict and rename API key`, go to `Application restrictions` section, select `HTTP referrers (web sites)`, add your production web client domain in `Website restrictions` section. Don't add `localhost` if you intend to use the firebase project for production.
6. Hit the `save` button to apply changes.

Voila! Your API key already restricted!

## Use Different Firebase Project for Local Development

Now that we already apply restrictions to our API key, how about our local development (`localhost`)? Well, we can just create a new firebase project which will be used for our local development.

### Special Case: Develop Hybrid Mobile App Using Ionic

When developing hybrid app using ionic, chances are we gonna use the same firebase configs for Web and Android / iOS build (firebase web configs). Even though we made several firebase web configs, the API key will remain the same. If we apply restrictions to the API key to be only accessible for certain domain, then the API key won't be usable for the mobile build. Fortunately, there is a workaround for this. We can just create a new API key which don't have any domain restrictions just for our mobile build (the API key can't be easily accessed by the user anyway for Android / iOS build). So, we can use the same firebase configs for our web and mobile builds, but having different API key. Just go to https://console.cloud.google.com/apis/credentials (make sure you already select the corresponding project first), then just create a new API key which will be used for your mobile apps.

### References

- Defining Firebase security rules
  - [https://www.npmjs.com/package/@jahed/firebase-rules](https://www.npmjs.com/package/@jahed/firebase-rules)
- Restrict API key
  - [https://medium.com/@devesu/how-to-secure-your-firebase-project-even-when-your-api-key-is-publicly-available-a462a2a58843](https://medium.com/@devesu/how-to-secure-your-firebase-project-even-when-your-api-key-is-publicly-available-a462a2a58843)
