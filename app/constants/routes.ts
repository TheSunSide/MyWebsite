export const Routes = {
  project: "/project",
  specificProject: (project: string) => `/project${project}`,
  about: "/about",
  techStack: "/tech",
  specificTech: (tech: string) => `/tech/${tech}`,
} as const;
