import type { ProjectDesc} from "~/data/projects-desc";
import { projectsDesc } from "~/data/projects-desc";
import { Routes } from "~/constants/routes";
import { ProjectCard } from "~/components/project-card";
import { useLang } from "~/utils/lang-provider";
export default function Projects() {
  //const nav = useNavigate();
  console.log("Projects default Rendered");
  const [lang] = useLang();
  return (
      <div className="h-full max-h-full flex flex-col no-scrollbar">
        <h1 className="font-bold z-10 mx-auto pt-8 text-center text-xl sm:text-2xl dark:text-white">
          {lang==="en"?"Projects":"Projets"}
        </h1>
        <section className="mx-auto pt-8 text-center mb-2 gap-y-4 overflow-y-auto max-h-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-2 sm:flex-row w-fit">
          {projectsDesc.map( (item:ProjectDesc)=>{
            const projectLink = Routes.project + item.link;
            return <ProjectCard item={item} projectLink={projectLink} key={item.name} />
          })}
        </section> 
      </div>
    )
}