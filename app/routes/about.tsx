import type { LinksFunction } from "@remix-run/node";
import remixLogoUrl from "../assets/remix-logo.svg";
import tailwindLogoUrl from "../assets/tailwind.svg";
import typescriptURL from "../assets/typescript.svg";
import cloudflareLogoUrl from "../assets/cloudflare.svg";
import type { LibrariesUsed } from "~/types/libraries";
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
  <main>
    <section className="m-4 md:m-8">
      <h2 className="mx-auto mt-8 text-center text-xl sm:text-2xl">
        This website is built using these
      </h2>
      <ul className="mx-auto mt-4 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
        {LIBRARIES.map(({ src, alt, href }) => (
          <li key={href} className="">
            <a
              href={href}
              className="flex h-16 w-32 grayscale transition hover:grayscale-0 focus:grayscale-0"
            >
              <img src={src} alt="" className="h-full w-full" />
              {/* <p>{alt}</p> */}
            </a>
          </li>
        ))}
      </ul>
    </section>
  </main>
  );
}

export const links: LinksFunction = () => {
  return [
    //{ rel: "preload", href: heroImageUrl },
    ...LIBRARIES.map(({ src }) => ({
      rel: "preload",
      href: src,
    })),
  ];
};