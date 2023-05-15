export type LibrariesUsed = { src: string; alt: string; href: string };
export type TechnologiesUsed = LibrariesUsed & {
  knownLevel: number;
  keypoints: string[];
};
