import { TechComponent } from "~/components/tech.component";
import { TECHNOLOGIES_KNOWN } from "~/data/tech-desc";
import type { LinksFunction } from "@remix-run/cloudflare"
import SideNavPage from "~/components/side-nav";
import { Language, useLang } from "~/utils/lang-provider";
export const links: LinksFunction = () => {
  return [
    //{ rel: "preload", href: heroImageUrl },
    ...TECHNOLOGIES_KNOWN.map(({ src }) => ({
      rel: "preload",
      href: src,
      as: "image"
    })),
  ];
};

export function TechList() {
  return (
  <ul className="mx-auto pt-4 grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-y-4 gap-x-8 w-3/4 overflow-y-auto no-scrollbar dark:text-white">
    {TECHNOLOGIES_KNOWN.map((tech) => (
      <TechComponent key={tech.alt} tech={tech}/>
      
    ))}
  </ul>);
}
export default function Index() {
  const [lang] = useLang();
  return (
    <div className="h-full max-h-full flex flex-col no-scrollbar">
      <h1 className="font-bold z-10 mx-auto pt-8 text-center text-xl sm:text-2xl dark:text-white">
       {lang===Language.EN?"Technological Stack":"Pile Technologique"}
      </h1>
      {TechList()}
    </div>
    )
}