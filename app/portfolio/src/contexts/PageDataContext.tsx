import {
  Context,
  createContext,
  ReactNode
} from "react";
import type PageData from "../types/PageDataContext";

const defaultValue: PageData = {
  hero: {
    job: "Fullstack Web 2 & 3 Developer",
    location: "Kolkata, WB, India",
    countrySymbol: "IN",
    description:
      "A passionate fullstack web developer building bleeding edge tech projects in Typescript and Rust for people.",
  },
  codingProfile: [
    {
      rank: "1432",
      platform: "Geeks for Geeks",
      url: "",
      peakRank: "1680",
      img: "",
      imgFallback: "GFG",
    },
  ],
  certification: [
    {
      img: "",
      imgFallback: "AWS",
      certifiedBy: "Amazon Web Services",
      url: "",
      subject: "AWS Cloud Practitioner",
      date: "March 28, 2025",
    },
  ],
  education: [
    {
      degree: "Bachelor of Computer Science",
      img: "",
      imgFallback: "IIITK",
      institute: "Indian Institute of Information Technology, Kalyani",
      timePeriod: "December 2021 - July 2025",
      lessons: [
        "Linear Algebra",
        "Differential Calculus",
        "Statistics and Probability",
        "Digital Logic",
        "Computer Organization and Architecture",
        "Microprocessor and Microcontroller",
        "Data Structures and Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Compiler Design",
        "Database System Management and Administration",
      ],
    },
    {
      degree: "Diploma in Science",
      img: "",
      imgFallback: "APJS",
      institute: "Apeejay School, Salt Lake",
      timePeriod: "March 2018 - June 2020",
      lessons: [
        "Physics",
        "Chemistry",
        "Biology",
        "Maths",
        "English",
        "Computer Education",
      ],
    },
  ],
  skills: [
    {
      category: "Languages",
      skills: [
        "Javascript",
        "Typescript",
        "C",
        "C++",
        "Rust",
        "Java",
        "Python",
      ],
      color: "blue",
    },
    {
      category: "Database and ORM",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "DrizzleORM",
        "Mongoose",
      ],
      color: "red",
    },
    {
      category: "Frameworks and Runtimes",
      skills: [
        "BunJS",
        "NextJS",
        "ReactJS",
        "ElysiaJS",
        "BetterAuthJS",
        "ReactNative",
        "Anchor",
      ],
      color: "amber",
    },
    {
      category: "DevOps and Tools",
      skills: [
        "Git",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "Forage",
        "Grafana + Loki",
      ],
      color: "lime",
    },
  ],
  about: [
    "I'm a 22-year-old experienced Full Stack Developer with a knack for building products that make a difference. My expertise spans both frontend and backend technologies, enabling me to craft comprehensive solutions from the ground up.",
    "Throughout my career, I've been deeply involved in the startup ecosystem. I've worked with various startups, embracing the fast-paced, innovative nature of these environments. This journey led me to found my own startup, where I gained firsthand experience in every aspect of product development and business operations.",
    "During my high school years, I excelled in software development, earning the prestigious title of DUX (top student) in this field. This early achievement laid the foundation for my passion and expertise in programming.",
  ],
  projects: [
    {
      img: "",
      imgFallback: "Socket and SSE based Customer Support Portal",
      title: "Customer Support Portal",
      description:
        "Unified portal for all customers to receive help, support, get their doubts cleared and provide the necessary feedback to the server.",
      timePeriod: "December 12, 2024 - January 20, 2025",
      technologies: [
        "BunJS",
        "ElysiaJS",
        "ReactJS",
        "BetterAuth",
        "Shadcn/UI",
        "uWebSockets",
        "SSE and RESTful API",
        "Mongoose",
        "MongoDB",
        "WebRTC",
      ],
      pointsToBeNoted: [
        "gvabntiuyabnugafv gnuyvnryyurg nsgfruygasnbatvbnisa naudcruitgauiobiartbgvi aunfiuntiunbiiag",
        "asgybgaibgygaybybfrra iarfbauiufaynofanygvb ainyofyaofipmriosynser inysaovyaoiigv gagbyagyuayeyb",
        "asufbvgausiuiaterybybavcyritbbtvacsoio iuasybivctysayatvbcyatryavusbtcrutasuebcte",
      ],
      urls: [
        { href: "", label: "Project Repo" },
        { href: "", label: "Live URL" },
      ],
    },
  ],
  contactEmail: "bose.sourabrata21century@gmail.com",
};

export const PageData: Context<PageData> = createContext<PageData>(defaultValue);

export default function PageDataContext({ children }: { children: ReactNode }) {  
  return <PageData.Provider value={defaultValue}>{children}</PageData.Provider>;
}
