export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  liveUrl: string;
};

export type BuildingKind = "tower" | "mall" | "lab" | "signal" | "studio" | "automation" | "hq";

export type Building = {
  id: string;
  name: string;
  category: string;
  style: string;
  description: string;
  services: string[];
  tools: string[];
  projectIds: string[];
  accent: string;
  glow: string;
  position: { desktop: string; mobileOrder: number };
  kind: BuildingKind;
};

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};
