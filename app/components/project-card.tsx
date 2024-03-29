import { Language, useLang } from "~/utils/lang-provider";
import type { ProjectDesc } from "../data/projects-desc";
import React from "react";
import { Link } from "@remix-run/react";

export function ProjectCard({item, projectLink}: {item: ProjectDesc, projectLink: string, width?:string}) {
  const [lang] = useLang();
  return (
    <div key={item.name} className={`grid grid-cols-1 content-between justify-items-center mx-auto w-4/5 h-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
      <Link to={projectLink}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{lang === Language.EN?item.name:item.FRname}</h5>
      </Link>
      <Link to={projectLink}>
          
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.year}</h5>
      </Link>
      {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
      <Link to={projectLink} className="w-fit inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {lang === Language.EN?"Read more":"Lire plus"}
          <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      </Link>
    </div>);
}