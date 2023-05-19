import { techComponent } from "../components/tech.component";
import { TECHNOLOGIES_KNOWN } from "../components/tech-desc";
import type { LinksFunction } from "@remix-run/node";
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
  <ul className="mx-auto pt-4 grid grid-cols-3 auto-rows-fr gap-4 sm:flex-row w-3/4">
    {TECHNOLOGIES_KNOWN.map((tech) => (
      techComponent(tech)
    ))}
  </ul>);
}
export default function Index() {
  return (
    <div className="h-full dark:border-gray-300 dark:bg-gray-300">
      <h2 className="pt-8 mx-auto text-center text-xl sm:text-2xl">
      My tech stack
      </h2>
      {TechList()}
    </div>
    )
}