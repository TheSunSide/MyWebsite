import type { LinksFunction } from "@remix-run/cloudflare";
import remixLogoUrl from "../assets/remix-logo.svg";
import tailwindLogoUrl from "../assets/tailwind.svg";
import typescriptURL from "../assets/typescript.svg";
import cloudflareLogoUrl from "../assets/cloudflare.svg";
import type { LibrariesUsed } from "~/types/libraries";
import { Routes } from "~/constants/routes";
import githubSVG from "~/assets/github.svg";
import { Theme, useTheme } from "~/utils/theme-provider";
import { Language, useLang } from "~/utils/lang-provider";
import { Link } from "@remix-run/react";
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
  const [theme] = useTheme()
  const [lang] = useLang();
  return (
    <div className="h-full p-4 md:p-8 overflow-y-auto">
      <h1 className="font-bold z-10 mx-auto pt-8 text-center text-xl sm:text-2xl dark:text-white">
        {lang===Language.EN?"This website is built and served using these technologies":"Ce site web est construit et servi en utilisant ces technologies"} 
      </h1>
      <ul className="mx-auto mt-4 flex flex-col flex-wrap items-center justify-center gap-8 sm:flex-row">
        {LIBRARIES.map(({ src, alt, href }) => (
          <li key={href} className="">
            <Link
              to={Routes.specificTech(alt)}
              className="flex h-16 w-auto grayscale transition hover:grayscale-0 focus:grayscale-0"
            >
              <div className="px-2 py-2 dark:bg-gray-50 rounded-lg mx-auto">
                <img src={src} alt="" className="h-full w-full" />
              </div>
              {/* <p>{alt}</p> */}
            </Link>
          </li>
        ))}
      </ul>
      <h1 className="font-bold z-10 mx-auto pt-8 text-center text-xl sm:text-2xl mt-4 dark:text-white">
        {lang===Language.EN?"Available on a public Github Repo":"Disponible sur un repo Github public"} 
      </h1>
      
      <Link to="https://github.com/TheSunSide/MyWebsite" className="mx-auto flex h-16 w-32 mt-2">
        {/* <img src={githubSVG} alt="gitIcon" className="h-full w-full fill-current" /> */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full fill:fill-dark dark:fill-white" width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </Link>
      <Link to="https://github.com/TheSunSide/MyWebsite" className="mx-auto pt-8 text-center dark:text-white">
        <p>https://github.com/TheSunSide/MyWebsite</p>
      </Link>
      
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