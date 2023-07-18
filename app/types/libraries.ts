import React from "react";

export type LibrariesUsed = {
  alt: string;
  href: string;
  svg: () => React.JSX.Element;
};
export type TechnologiesUsed = LibrariesUsed & {
  knownLevel: number;
  keyPoints: string[];
};
