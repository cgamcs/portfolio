export type Project = {
  title: string;
  description: string;
  demo?: string;
  code?: string;
};

export const projects: Project[] = [
  {
    title: "ProfeScore",
    description: "Built a platform for students to rate and review professors.",
    demo: "https://profescore-web.vercel.app/",
    code: "https://github.com/cgamcs/profescore",
  },
  {
    title: "UpTask",
    description:
      "Built a task manager with roles, team projects, and status tracking.",
    demo: "https://uptask-three.vercel.app/",
    code: "https://github.com/cgamcs/uptask",
  },
  {
    title: "Meeti",
    description: "Built a platform to create clubs and manage events with AI.",
    code: "https://github.com/cgamcs/meeti-next",
  },
];
