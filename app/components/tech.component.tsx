import type { TechnologiesUsed } from "~/types/libraries";

export const techComponent = (tech: TechnologiesUsed) => (
  <li key={tech.href} className="">
  <a
    href={tech.href}
    className="flex h-16 w-32"
  >
    <img src={tech.src} alt="" className="h-full w-full" />
    {/* <p>{alt}</p> */}
  </a>
  </li>
);
