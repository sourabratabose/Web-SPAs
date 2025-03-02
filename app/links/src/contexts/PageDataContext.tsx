import { Context, createContext, ReactNode } from "react";
import type PageContextData from "../types/PageContextData";
// import unifiedAxiosInstance from "../functions/AxiosInstance";

const defaultValue = {
  intro: {
    avatar: "",
    heading: "It's me Sourabrata Bose",
    body: {
      shortIntro:
        "Hi there, I am Sourabrata Bose. A passionate web designer and fullstack web developer using <Em>Javascript/Typescript</Em> and <Em>Solidity</Em>.",
      collapsibleIntro:
        "I primarily code and develop projects in Javascript and/or Typescript as needed. <br />I use Solidity and Hardhat suit to develop smart contracts on the Ethereum blockchain but also learning Rust and Anchor to develop solana smart contracts.<br />For frontend of my projects I use React for both web and desktop application development. For mobile I use React Native with Expo and EAS.<br />For backend I primarily use BunJS for a newer alternative toNodeJS, Drizzle ORM with PostgreSQL or SQLite for RDBMS andMongoose with MongoDB for NoSQL database.",
    },
    status: "I am Engineering my limits.",
  },
  linkSections: [
    {
      sectionHeading: "socials",
      links: [
        {
          icon: "",
          text: "Facebook",
          url: "",
        },
        {
          icon: "",
          text: "Reddit",
          url: "",
        },
        {
          icon: "",
          text: "Instagram",
          url: "",
        },
        {
          icon: "",
          text: "Twitter / X",
          url: "",
        },
      ],
    },
    {
      sectionHeading: "work",
      links: [
        {
          icon: "",
          text: "Naukri",
          url: "",
        },
        {
          icon: "",
          text: "LinkedIn",
          url: "",
        },
        {
          icon: "",
          text: "Freelancer",
          url: "",
        },
        {
          icon: "",
          text: "Unstop",
          url: "",
        },
      ],
    },
    {
      sectionHeading: "others",
      links: [
        {
          icon: "",
          text: "Discord",
          url: "",
        },
        {
          icon: "",
          text: "Messenger",
          url: "",
        },
        {
          icon: "",
          text: "Whatsapp",
          url: "",
        },
        {
          icon: "",
          text: "GMail",
          url: "",
        },
      ],
    },
  ],
};

export const PageData: Context<PageContextData> = createContext<PageContextData>(defaultValue);

export default function PageDataContext({ children }: { children: ReactNode }) {
  // const data: Promise<PageContextData> = (async (): Promise<PageContextData> => {
  //   const networkData = await unifiedAxiosInstance.get("/links/pageData");
  //   if (networkData.status < 300) return JSON.parse(networkData.data);
  //   else return defaultValue;
  // })();
  return <PageData.Provider value={defaultValue}>{children}</PageData.Provider>;
}
