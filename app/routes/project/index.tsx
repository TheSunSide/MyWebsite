import { useNavigate } from "@remix-run/react";
import SideNavPage from "../../components/side-nav"
import { ProjectDesc, projectsDesc } from "~/components/projects-desc";
import { Routes } from "~/constants/routes";
export default function Projects() {
  //const nav = useNavigate();
  return (
      <div className="max-h-full">
        <h1 className="font-bold z-10 mx-auto pt-8 text-center text-xl sm:text-2xl">
        Projects
        </h1>

        <section className="mx-auto pt-8 text-center overflow-auto max-h-fit">
          {projectsDesc.map( (item:ProjectDesc)=>{
            const projectLink = Routes.project + item.link;
            return (
              <div key={item.name} className="mx-auto mt-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href={projectLink}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name} : {item.year}</h5>
                </a>
                {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
                <a href={projectLink} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
              </div>);
          })}
        </section> 

      </div>
    )
  
}