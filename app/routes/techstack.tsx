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
  <ul className="mx-auto mt-4 flex flex-row flex-wrap items-center justify-center gap-4 sm:flex-row w-2/4">
    {TECHNOLOGIES_KNOWN.map((tech) => (
      techComponent(tech)
    ))}
  </ul>);
}
export default function Index() {
  return (
    SideNavPage(
    <div>
      <h2 className="mx-auto mt-8 text-center text-xl sm:text-2xl">
      My tech stack
      </h2>
      {TechList()}
    </div>

    ));
}