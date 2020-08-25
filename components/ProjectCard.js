import React from "react";
import Link from "next/link";

export default function ProjectCard({ title, img, link }) {
  return (
    <div className="projectCard flex w-full sm:w-1/2 p-2 text-center sm:text-justify">
      <div className="sm:flex shadow-2xl w-full rounded-large p-4 border-2 border-teal-800">
        {img ? <img src={img} className="w-20 h-20" /> : null}
        <div className="sm:ml-4 self-center">
          <h2 className="text-2xl text-teal-200 font-semibold">{title}</h2>
          {link.substring(0, 8) === "https://" ? (
            <a
              className=""
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-teal-600 border-2 border-teal-800 hover:bg-teal-800 hover:text-teal-300 rounded-large py-2 px-16">
                Visit
              </button>
            </a>
          ) : (
            <Link className="" href={link}>
              <button className="text-teal-600 border-2 border-teal-800 hover:bg-teal-800 hover:text-teal-300 rounded-large py-2 px-16">
                Visit
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
