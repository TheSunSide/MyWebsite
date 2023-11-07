export type LibrariesUsed = {
  src: string;
  alt: string;
  alt2?: string;
  href: string;
};
export type TechnologiesUsed = LibrariesUsed & {
  knownLevel: number;
  keyPoints: string[];
};
