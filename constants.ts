import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Nebula Dashboard",
    category: "UI/UX Design",
    image: "https://picsum.photos/seed/nebula/800/600",
    description: "A futuristic analytics dashboard for space exploration data visualization.",
    tags: ["React", "D3.js", "Tailwind"]
  },
  {
    id: 2,
    title: "Zenith E-Commerce",
    category: "Web Development",
    image: "https://picsum.photos/seed/zenith/800/600",
    description: "Minimalist e-commerce platform focusing on sustainable fashion brands.",
    tags: ["Next.js", "Stripe", "Framer Motion"]
  },
  {
    id: 3,
    title: "Apex Fitness",
    category: "Mobile App",
    image: "https://picsum.photos/seed/apex/800/600",
    description: "AI-driven workout planner that adapts to your daily energy levels.",
    tags: ["React Native", "TensorFlow", "UI Design"]
  },
  {
    id: 4,
    title: "Echo Social",
    category: "Brand Identity",
    image: "https://picsum.photos/seed/echo/800/600",
    description: "Rebranding campaign for a decentralized social media protocol.",
    tags: ["Branding", "Illustration", "Motion"]
  }
];

export const SKILLS: Skill[] = [
  { name: "UI Design", level: 95, category: "Design" },
  { name: "UX Research", level: 85, category: "Design" },
  { name: "React / TS", level: 90, category: "Development" },
  { name: "Node.js", level: 75, category: "Development" },
  { name: "Motion", level: 80, category: "Design" },
  { name: "3D Spline", level: 70, category: "Tools" },
];

export const NAV_LINKS = [
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];
