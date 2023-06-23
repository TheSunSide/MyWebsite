import { useLoaderData, useNavigate } from "@remix-run/react";
import SideNavPage from "~/components/side-nav"
import { projectsDesc, type ProjectDesc} from "~/components/projects-desc";
import { useParams } from "@remix-run/react";
import type { LoaderArgs} from "@remix-run/server-runtime";
import { Routes } from "~/constants/routes";
import { TECHNOLOGIES_KNOWN } from "~/components/tech-desc";
import { TechnologiesUsed } from "~/types/libraries";

export async function loader({ params }: LoaderArgs): Promise<TechnologiesUsed | undefined> {
  const techId = params.techId;
  if(!techId) {
    return;
  }
  const techDesc = TECHNOLOGIES_KNOWN.find( (item:TechnologiesUsed)=>item.alt.includes(techId));
  return techDesc;
}
function getArrowSVG() {
  return (<svg fill="currentColor"  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
     viewBox="0 0 489.3 489.3" xmlSpace="preserve" className="w-5 h-5 -ml-1 mr-2">
  <g>
    <g>
      <path d="M476.9,232.45H147.2l55.9-55.9c4.8-4.8,4.8-12.5,0-17.3s-12.5-4.8-17.3,0l-76.8,76.8c-4.8,4.8-4.8,12.5,0,17.3l76.8,76.8
        c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-55.9-55.9H477c6.8,0,12.3-5.5,12.3-12.3
        C489.2,237.85,483.7,232.45,476.9,232.45z"/>
      <path d="M24.5,476.25V13.05c0-6.8-5.5-12.3-12.3-12.3S0,6.25,0,13.05v463.2c0,6.8,5.5,12.3,12.2,12.3S24.5,483.05,24.5,476.25z"/>
    </g>
  </g>
  </svg>);
}

export default function ProjectPage() {
  const nav = useNavigate();
  const params = useParams();
  const techDesc = useLoaderData<TechnologiesUsed | undefined>();
  console.log("TechPage Rendered");
  if(!techDesc) {
    console.log("TechPage Rendered - no techFound");
    nav(Routes.project,{});
    return null;
  }

  console.log(techDesc)
  return (
    <section className="dark:border-gray-300 dark:bg-gray-300">
      <a href={Routes.techStack}>
        <button type="button"  className="ml-1 mt-1 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
          {getArrowSVG()}
          See Technologies
        </button>
      </a>
      <h2 className="mx-auto mt-4 text-center text-2xl font-bold tracking-tight text-gray-900">
      {techDesc.alt}
      </h2>
      <section className="flex justify-center flex-col mx-auto mt-8 text-center">
        <ul className="mx-auto mb-8 space-y-4 text-gray-500 dark:text-gray-400">
          { techDesc.keyPoints.map((keyPoint, index) => 
            {
              return (
                <li className="flex items-center space-x-3" key={techDesc.alt+index}>
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  <span>{keyPoint}</span>
                </li>)
            })}
        </ul>
        <h3>Used on these projects (Incoming...)</h3>
        <ul className="mx-auto mt-4 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
          {/* ... */}
        </ul>
      </section> 
    </section>
    
  );
}