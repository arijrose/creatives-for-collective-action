import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Creatives for Collective Action",
  EMAIL: "your-email@example.com",
  NUM_POSTS_ON_HOMEPAGE: 0,
  NUM_WORKS_ON_HOMEPAGE: 0,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "Creatives for Collective Action connects Boston-area artists, organizers, and communities through justice-centered public art.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Updates and writing from Creatives for Collective Action.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Past work and experience from Creatives for Collective Action.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects / Art Builds",
  DESCRIPTION:
    "Justice-centered creative projects, art builds, workshops, and public-facing art from Creatives for Collective Action.",
};

export const SOCIALS: Socials = [
  {
    NAME: "instagram",
    HREF: "https://www.instagram.com/yourhandle",
  },
];
