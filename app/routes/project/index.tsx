import type { ProjectDesc} from "~/components/projects-desc";
import { projectsDesc } from "~/components/projects-desc";
import { Routes } from "~/constants/routes";
import { ProjectCard } from "~/components/project-card";
export default function Projects() {
  //const nav = useNavigate();
  console.log("Projects default Rendered");
  return (
      <div className="h-full dark:border-gray-300 dark:bg-gray-300">
        <h1 className="font-bold z-10 mx-auto pt-8 text-center text-xl sm:text-2xl">
        Projects
        </h1>

        <section className="mx-auto pt-8 text-center overflow-auto max-h-fit grid grid-cols-2 gap-y-2 sm:flex-row w-2/4">
          {projectsDesc.map( (item:ProjectDesc)=>{
            const projectLink = Routes.project + item.link;
            //return ProjectCard(item, projectLink);
            return <ProjectCard item={item} projectLink={projectLink} key={item.name} />
          })}
        </section> 
      </div>
    )
}