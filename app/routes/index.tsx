import type { LinksFunction } from "@remix-run/cloudflare";
import imageSunnee from "~/assets/sunnee.jpg"

export const links: LinksFunction = () => {
  return [
    { rel: "preload", href: imageSunnee },

  ];
};

export default function Index() {
  return (
      <div className="h-full dark:border-gray-300 dark:bg-gray-300">
          <h1 className="pt-8 text-center text-5xl font-extrabold uppercase tracking-tight text-purple-500 text-purple-700 drop-shadow-md">
            Sunnee Chevalier's Website
          </h1>
          <section className="mt-4 flex flex-col justify-center items-center">
            <img src={imageSunnee} alt="My face" className="w-64 h-auto"></img>
            <ul className="mt-4 mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400 px-2 py-2 items-center bg-white border border-gray-200 rounded-lg">
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>
                  4th year Student at Polytechnique Montreal, in Software Engineering
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>
                  Teaching Assistant for the course INF1900 - Introduction to embedded systems
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>
                  Vice president of the treasury for the student committee of Software Engineering at PolyMtl
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>
                  Vice president of logistics for the CSGames 2024 for Polytechnique Montreal's team(s)
                </span>
              </li>
            </ul>
          </section>
      </div>
  );
}