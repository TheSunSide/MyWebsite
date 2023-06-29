import type { LinksFunction } from "@remix-run/cloudflare";
import remixLogoUrl from "../assets/remix-logo.svg";
import tailwindLogoUrl from "../assets/tailwind.svg";
import typescriptURL from "../assets/typescript.svg";
import cloudflareLogoUrl from "../assets/cloudflare.svg";
import type { LibrariesUsed } from "~/types/libraries";
import { Routes } from "~/constants/routes";
import githubSVG from "~/assets/github.svg";
const LIBRARIES: LibrariesUsed[] = [
  {
    src: tailwindLogoUrl,
    alt: "Tailwind",
    href: "https://tailwindcss.com",
  },
  {
    src: typescriptURL,
    alt: "TypeScript",
    href: "https://www.typescriptlang.org/",
  },
  {
    src: remixLogoUrl,
    alt: "Remix",
    href: "https://remix.run/",
  },
  {
    src: cloudflareLogoUrl,
    alt: "Cloudflare",
    href: "https://www.cloudflare.com/",
  },
];

export default function About() {
  return (
    <div className="h-full p-4 md:p-8 dark:border-gray-300 dark:bg-gray-300">
      <h1 className="font-bold z-10 mx-auto pt-8 text-center text-xl sm:text-2xl">
        This website is built and served using these
      </h1>
      <ul className="mx-auto mt-4 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
        {LIBRARIES.map(({ src, alt, href }) => (
          <li key={href} className="">
            <a
              href={Routes.specificTech(alt)}
              className="flex h-16 w-32 grayscale transition hover:grayscale-0 focus:grayscale-0"
            >
              <img src={src} alt="" className="h-full w-full" />
              {/* <p>{alt}</p> */}
            </a>
          </li>
        ))}
      </ul>
      <h1 className="font-bold z-10 mx-auto pt-8 text-center text-xl sm:text-2xl mt-4">Available on a public Github Repo</h1>
      <a href="https://github.com/TheSunSide/MyWebsite" className="mx-auto flex h-16 w-32 mt-2">
        <img src={githubSVG} alt="gitIcon" className="h-full w-full" />
      </a>
      <a href="https://github.com/TheSunSide/MyWebsite" className="mx-auto pt-8 text-center">
        <p>Repo link: https://github.com/TheSunSide/MyWebsite</p>
      </a>
      
    </div>
    );
}

export const links: LinksFunction = () => {
  return [
    //{ rel: "preload", href: heroImageUrl },
    ...LIBRARIES.map(({ src }) => ({
      rel: "preload",
      href: src,
      as: "image",
    })),
  ];
};