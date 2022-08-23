---
title: May 2020 Quarantine Self Challenge
date: "2020-05-02"
cover: https://images.unsplash.com/photo-1497074367201-25b8d28279e2?auto=format&q=80
legacyID: "2020-05-02-self-challenge"
thumbnail: "🏆"
published: true
tags:
  - Gatsby
  - Vercel
  - Evergreen
  - TailwindCSS
---

Recently I challenged myself to make a web app as soon as possible in two days. Managed to make two. One is a simple Food Recipe App and the other is COVID-19 Data App.
Turned out it was so fun.

## 1. Le Cook

Fun food recipe catalog app powered by [RecipePuppy](https://recipepuppy.com) API....

[https://le-cook.now.sh/](https://le-cook.now.sh/)

![Le Cook (1)](https://sznm.dev/images/2020-05-02-self-challenge/le-cook_1.jpg)
![Le Cook (2)](https://sznm.dev/images/2020-05-02-self-challenge/le-cook_2.jpg)
![Le Cook (3)](https://sznm.dev/images/2020-05-02-self-challenge/le-cook_3.jpg)

## 2. COVID-19 Data

presenting COVID-19 statistics powered by [@mathdroid](https://github.com/mathdroid/covid-19-api/)'s covid-19-api.
I made a vanilla JS version of this app several days ago and I decided to re-develop it using Gatsby (React).

[https://covid19data.now.sh/](https://covid19data.now.sh/)

![COVID-19 Data App (1)](https://sznm.dev/images/2020-05-02-self-challenge/covid19data_1.jpg)
![COVID-19 Data App (2)](https://sznm.dev/images/2020-05-02-self-challenge/covid19data_2.jpg)
![COVID-19 Data App (3)](https://sznm.dev/images/2020-05-02-self-challenge/covid19data_3.jpg)

Both [Le Cook](https://le-cook.now.sh/) and [COVID-19 Data](https://covid19data.now.sh/) app were developed using Segment's Evergreen UI. Just discovered this React UI Framework and turns out it's so convenient to implement it on these projects.

When developing COVID-19 Data app, I realized Evergreen UI have no opinionated way to construct responsive layouts. So, I decided to combine it with TailwindCSS which I already tried to use at this personal site. It worked.

![Evergreen UI (1)](https://sznm.dev/images/2020-05-02-self-challenge/evergreen-ui_1.jpg)
![Evergreen UI (2)](https://sznm.dev/images/2020-05-02-self-challenge/evergreen-ui_2.jpg)
![Evergreen UI (3)](https://sznm.dev/images/2020-05-02-self-challenge/evergreen-ui_3.jpg)
![Evergreen UI (4)](https://sznm.dev/images/2020-05-02-self-challenge/evergreen-ui_4.jpg)

I decided to deploy it using [Vercel](https://vercel.com) and I'm so shocked by how fast it is compared to [Netlify](https://netlify.com). I'm considering to migrate to Vercel from Netlify for my previous projects, including this site.

I posted my recent projects [here](https://sznm.dev/projects).
You can access the project and the project's GitHub repository link from this [page](https://sznm.dev/projects).
