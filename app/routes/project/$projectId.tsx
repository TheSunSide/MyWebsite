import { useLoaderData, useNavigate } from "@remix-run/react";
import SideNavPage from "~/components/side-nav"
import type { ProjectDesc} from "~/components/projects-desc";
import { projectsDesc } from "~/components/projects-desc";
import { useParams } from "@remix-run/react";
import type { LoaderArgs} from "@remix-run/server-runtime";
import { Routes } from "~/constants/routes";

export async function loader({ params }: LoaderArgs): Promise<ProjectDesc | undefined> {
  const projectId = params.projectId;
  if(!projectId) {
    return;
  }
  const projectDesc = projectsDesc.find( (item:ProjectDesc)=>item.link.includes(projectId));
  return projectDesc;
}

export default function ProjectPage() {
  const nav = useNavigate();
  const params = useParams();
  const projectDesc = useLoaderData();
  console.log("ProjectPage Rendered");
  if(!projectDesc) {
    nav(Routes.project);
    return null;
  }
  return (
    <section className="dark:border-gray-300 dark:bg-gray-300">
      <h2 className="mx-auto mt-8 text-center text-xl sm:text-2xl">
      {projectDesc.name}
      </h2>
      <section className="mx-auto mt-8 text-center ">
        
      </section> 
    </section>
    
  );
}