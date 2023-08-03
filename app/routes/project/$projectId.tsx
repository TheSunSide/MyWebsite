import { useLoaderData, useNavigate } from "@remix-run/react";
import SideNavPage from "~/components/side-nav"
import type { ProjectDesc} from "~/data/projects-desc";
import { projectsDesc } from "~/data/projects-desc";
import { useParams } from "@remix-run/react";
import type { LoaderArgs} from "@remix-run/server-runtime";
import { Routes } from "~/constants/routes";
import { TECHNOLOGIES_KNOWN } from "~/data/tech-desc";
import { Language, useLang } from "~/utils/lang-provider";
import { Carousel, CarouselProps, FlowbiteCarouselScrollContainer } from "flowbite-react";

export async function loader({ params }: LoaderArgs): Promise<ProjectDesc | undefined> {
  const projectId = params.projectId;
  if(!projectId) {
    return;
  }
  const projectDesc = projectsDesc.find( (item:ProjectDesc)=>item.link.includes(projectId));

  if(!projectsDesc) {
    throw new Response('Not found', {"status" : 404 })
  }

  return projectDesc;
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

function getCarrousel(lang:Language, scrollContainerTheme: FlowbiteCarouselScrollContainer,images:string[]) {
  // const control= {
  //   base: 'inline-flex h-8 w-8 items-center justify-center rounded-full bg-red/30 group-hover:bg-red/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-red dark:bg-red-800/30 dark:group-hover:bg-red-800/60 dark:group-focus:ring-red-800/70 sm:h-10 sm:w-10',
  //   icon: 'h-5 w-5 text-red dark:text-red-800 sm:h-6 sm:w-6',
  // };
  return (
    <>
     <section className="flex flex-col mx-auto mt-8 text-center h-fit items-center w-full">
        <h3 className="dark:text-white">{lang === Language.EN?"Image Gallery":"Gallerie d'image"}</h3>
        <div className="h-56 lg:h-72 xl:h-90 w-1/2 no-scrollbar">
          <Carousel className="no-scrollbar" theme={{scrollContainer:scrollContainerTheme/*, control*/}}>
            {images.map((image) => (<img
              alt="..."
              src={image}
              className="h-full object-contain"
            />))}
          </Carousel>
        </div>
      </section>
    </>
  )
}

export default function ProjectPage() {
  const nav = useNavigate();
  const params = useParams();
  const projectDesc = useLoaderData<ProjectDesc | undefined>();
  const [lang] = useLang();
  console.log("ProjectPage Rendered");
  if(!projectDesc) {
    console.log("ProjectPage Rendered - no projectDesc");
    nav(Routes.project,{});
    return null;
  }
  const keyPoints = lang === Language.EN?projectDesc.keyPoints:projectDesc.FRkeyPoints;
  const scrollContainerTheme: FlowbiteCarouselScrollContainer= {base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg no-scrollbar',snap: 'snap-x',};

  const carousel = projectDesc.images ? getCarrousel(lang===Language.EN?Language.EN:Language.FR, scrollContainerTheme,projectDesc.images):undefined;

  return (
    <div className="h-full">
      <a href={Routes.project}>
        <button type="button"  className="ml-1 mt-1 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
          {getArrowSVG()}
          {lang === Language.EN?"See projects":"Voir les projets"}
        </button>
      </a>
      <h1 className="font-bold z-10 mx-auto pt-8 text-center text-xl sm:text-2xl dark:text-white">
      {lang === Language.EN?projectDesc.name:projectDesc.FRname} - {projectDesc.year}
      </h1>
      <section className="flex justify-center flex-col mx-auto mt-8 text-center">
        <ul className="mx-auto mb-8 space-y-4 text-gray-500 dark:text-gray-400">
          { keyPoints.map((keyPoint, index) => 
            {
              return (
                <li className="flex items-center space-x-3" key={projectDesc.name+index}>
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  <span>{keyPoint}</span>
                </li>)
            })}
        </ul>
        <h3 className="dark:text-white">{lang === Language.EN?"Using these technologies":"Utilise ces technologies"}</h3>
        <ul className="mx-auto mt-4 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
          {
            projectDesc.technologies.filter((tech)=>TECHNOLOGIES_KNOWN.find( (item)=>item.alt === tech)).map((tech) => {
            const techKnown = TECHNOLOGIES_KNOWN.find( (item)=>item.alt === tech);
            return (
            <li key={techKnown!.href} className="">
              <a
                href={Routes.specificTech(techKnown!.alt)}
                className="flex h-16 w-32  grayscale transition hover:grayscale-0 focus:grayscale-0"
              >
                <div className="px-2 py-2 dark:bg-gray-50 rounded-lg mx-auto">
                  <img src={techKnown!.src} alt="" className="h-full w-full" />
                </div>
              </a>
            </li>)
          })}
        </ul>
      </section>
      {carousel}
    </div>);
}