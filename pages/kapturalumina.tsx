import React from "react";
import Layout from "../components/layout";

export default function kapturaluminaprivacyterms() {
  return (
    <Layout>
      <article>
        <img className="w-1/4" src="/app_icons/icon_kapturalumina.png" alt="" />
        <h1 className="text-3xl font-bold">KapturaLumina</h1>
        <h2 className="text-1xl font-bold">Basic Photography Learning App</h2>
        <p className="my-4">
          This is the app I build as part of my bachelor thesis project with
          gamification implementation. The App currently only available in
          Indonesian language.
        </p>
        <div className="buttons">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://kapturalumina.sznm.dev"
            className="bg-orange-800 text-orange-100 p-2 rounded-large font-bold hover:bg-orange-400"
          >
            Web App
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://play.google.com/store/apps/details?id=dev.sznm.kapturalumina"
            className="ml-4 border border-white bg-black text-orange-100 p-2 rounded-large font-bold hover:bg-orange-400"
          >
            Google Play <span className="font-normal text-xs">(Android)</span>
          </a>
        </div>
      </article>
    </Layout>
  );
}
