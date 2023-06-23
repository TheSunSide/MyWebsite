export const Routes = {
  project: "/project",
  about: "/about",
  techStack: "/tech",
  specificTech: (tech: string) => `/tech/${tech}`,
} as const;
