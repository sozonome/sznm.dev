import Layout from "../components/layout";
import ProjectCard from "../components/ProjectCard";

import { links } from "../data/links";

export default function Home() {
  const projects = [
    {
      title: "Personal Site",
      img: "/avataaars.svg",
      link: "https://agustinusnathaniel.com",
    },
    {
      title: "KapturaLumina",
      img: "/app_icons/icon_kapturalumina.png",
      link: "/kapturalumina",
    },
    {
      title: "COVID-19 Data",
      img: "/app_icons/icon-covid-19-data.png",
      link: "https://covid19.sznm.dev",
    },
    {
      title: "Le Cook",
      img: "/app_icons/icon_lecook.png",
      link: "https://le-cook.sznm.dev",
    },
    {
      title: "RagamBudaya",
      img: "/app_icons/ragambudaya-logo.png",
      link:
        "https://play.google.com/store/apps/details?id=app.hatchoko.ragambudaya",
    },
    {
      title: "Advice Generator",
      img: "/app_icons/icon_advicegen.png",
      link: "https://advicegen.sznm.dev",
    },
    {
      title: "Design Bookmarks",
      img: "/app_icons/desbook-pwa.png",
      link: "https://desbook-pwa.sznm.dev",
    },
    {
      title: "Insta Profile",
      img: "/app_icons/icon_instaprofile.png",
      link: "https://instaprofile.sznm.dev",
    },
    {
      title: "Other Projects",
      link: "https://agustinusnathaniel.com/projects",
    },
    {
      title: "bookmarks",
      link: "https://sozonome.github.io/bookmarks",
    },
  ];
  return <Layout></Layout>;
}
