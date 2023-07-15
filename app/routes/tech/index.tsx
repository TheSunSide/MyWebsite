import { techComponent } from "~/components/tech.component";
import { TECHNOLOGIES_KNOWN } from "~/components/tech-desc";
import type { LinksFunction } from "@remix-run/cloudflare"
import SideNavPage from "~/components/side-nav";
export const links: LinksFunction = () => {
  return [
    //{ rel: "preload", href: heroImageUrl },
    ...TECHNOLOGIES_KNOWN.map(({ src }) => ({
      rel: "preload",
      href: src,
    })),
  ];
};

export function TechList() {
  return (
  <ul className="mx-auto pt-4 grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 w-3/4 overflow-y-auto no-scrollbar">
    {TECHNOLOGIES_KNOWN.map((tech) => (
      techComponent(tech)
    ))}
  </ul>);
}
export default function Index() {
  return (
    <div className="h-full dark:border-gray-300 dark:bg-gray-300 max-h-full flex flex-col">
      <h1 className="font-bold z-10 mx-auto pt-8 text-center text-xl sm:text-2xl">
      My tech stack
      </h1>
      {TechList()}
    </div>
    )
}