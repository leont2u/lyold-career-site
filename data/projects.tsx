import { Project } from "@/types/project.types";

export const categories = [
  "All",
  "Commercials",
  "Documentary",
  "Music Video",
  "Events",
  "Corporate",
  "Fashion",
  "Interviews",
  "Aerial",
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Chibuku Behind The Scenes",
    slug: "chibuku-behind-the-scenes",
    category: "Commercials",
    client: "Chibuku Campaign",
    year: "2025",
    role: "Cinematography",
    location: "Harare, Zimbabwe",
    image: "/projects/chibuku-project.jpeg",
    description:
      "Behind-the-scenes visual coverage capturing production atmosphere, camera movement, and on-set energy.",
  },
  {
    id: 2,
    title: "Music Video Production Scenes",
    slug: "music-video-production-scenes",
    category: "Corporate",
    client: "Urban Visuals",
    year: "2024",
    role: "Cinematographer",
    location: "Harare, Zimbabwe",
    image: "/projects/music-production-project.JPG",
    description:
      "A sleek branded visual piece focused on movement, architecture, and modern city storytelling.",
  },
  {
    id: 3,
    title: "SGC Documentary ",
    slug: "sgc-documentary",
    category: "Documentary",
    client: "Loyola Production",
    year: "2025",
    role: "Cinematographer / 1st AC",
    location: "Harare, Zimbabwe",
    image: "/projects/sgc-documentary-project.JPG",
    description:
      "A documentary-driven visual narrative centered on authentic environments and human presence.",
  },
];
