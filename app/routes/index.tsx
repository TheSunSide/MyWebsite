
import type { LinksFunction } from "@remix-run/node";
import { techComponent } from "../components/tech.component";
import { TECHNOLOGIES_KNOWN } from "../components/tech-desc";


export const links: LinksFunction = () => {
  return [
    //{ rel: "preload", href: heroImageUrl },
    ...TECHNOLOGIES_KNOWN.map(({ src }) => ({
      rel: "preload",
      href: src,
    })),
  ];
};

export default function Index() {
  return (
    <main className="min-h-screen">
      {/* Hero section */}
      {/*<section className="grid grid-cols-[1fr] grid-rows-[70vh] sm:m-4 sm:grid-rows-[500px] md:m-8">*/}
      <section>
        <div className="z-20 col-start-1 col-end-2 row-start-1 row-end-2 mt-8 justify-self-center md:mt-24">
          <h1 className="text-center text-5xl font-extrabold uppercase tracking-tight text-purple-500 text-purple-700 drop-shadow-md">
            Sunnee Chevalier's Website
          </h1>
          <p className="mx-auto mt-6 max-w-xs text-center text-xl text-white sm:max-w-2xl">
            This is a minimal Remix stack to serve as a starting point for demos
            and debugging.
          </p>
          <p className="mx-auto mt-16 text-center ">
            <h2 className="mx-auto mt-8 text-center text-xl sm:text-2xl">
              My tech stack
            </h2>
            <ul className="mx-auto mt-4 flex flex-row flex-wrap items-center justify-center gap-4 sm:flex-row w-2/4">
              {TECHNOLOGIES_KNOWN.map((tech) => (
                techComponent(tech)
              ))}
            </ul>
          </p>
        </div>
      </section>
    </main>
  );
}
