import { Icons } from "@/components/icons";
import { BookOpen, BookOpenText, HomeIcon, Library, LibraryBig, NotebookIcon } from "lucide-react";
import {volunteering} from "./resume/volunteering";
import { IoBookmarks } from "react-icons/io5";

export const DATA = {
  name: "David Bérubé",
  initials: "DB",
  url: "https://dberube.dev",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/montreal",
  description: "Full-Stack Developer with a passion for crafting intuitive web experiences. Always learning, always building. Community-driven and growth-focused.",
  // summary: "Early in my career, I built a [Discord community for IT students](https://discord.com) that grew to over 400 members, fostering collaboration and events. During my [internship at a marketing agency](/#experience), I honed my skills in [user experience and UI development](/#skills), shaping my focus on intuitive web design. Now at [AutoCanada Finance](/#work), I create [websites for marketing](/#projects), using React, Next.js, and TypeScript to deliver impactful solutions. I also grew the [Speedrun.com Cars community](/#volunteering) through tournaments and long-term strategies, leaving behind a thriving ecosystem.",
  summary: "In 2016, I built a Discord community for IT students, growing it to 400+ members and fostering collaboration across my college. During my marketing agency internship, I developed a passion for user-focused design and impactful solutions. At [AutoQuebecFinance.ca](https://autoquebecfinance.ca), I design scalable marketing websites, and as part of the [*Speedrun.com Cars* community](/#volunteering), I organized tournaments and helped create a thriving ecosystem. Inspired by [*How to Win Friends and Influence People* by Dale Carnegie](/books/how-to-win-friends-and-influence-people), I thrive on blending creativity with problem-solving to deliver seamless digital experiences.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/books", icon: LibraryBig, label: "Books" },
  ],
  contact: {
    email: "davidberube2003@outlook.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dreamy32-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dberube-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      DailyDev: {
        name: "daily.dev",
        url: "https://dub.sh/dailydev-dberube",
        icon: Icons.dailydev,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Auto-Canada Finance",
      href: "https://autocanadafinance.ca",
      badges: [],
      location: "On-Site",
      title: "Full-Stack Web Developer & IT Specialist",
      logoUrl: "/autocanadafinance.svg",
      start: "August 2024",
      end: undefined,
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Auto-Québec Finance",
      badges: [],
      href: "https://autoquebecfinance.ca",
      location: "On-Site",
      title: "Full-Stack Web Developer",
      logoUrl: "/autoquebecfinance.svg",
      start: "October 2024",
      end: undefined,
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Cameleon Agence Web",
      badges: [],
      href: "https://autoquebecfinance.ca",
      location: "Remote",
      title: "Lead, Full-Stack Web Developer",
      logoUrl: "/cameleon.png",
      start: "Jan 2022",
      end: "April 2023",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
  ],
  education: [
    {
      school: "Collège Lionel-Groulx",
      href: "https://clg.qc.ca/",
      degree: "Dîplome d'Études Collégiales en Techniques l'Informatique (DEC)",
      logoUrl: "/clg.svg",
      start: "2020",
      end: "2024",
    },
  ],
  certificates: [
    {
      title: "React: Using Typescript",
      issuer: "LinkedIn",
      href: "https://www.linkedin.com/learning/certificates/d0868578fad0a42113c89ba48e66beb7d243b5b5687e47d9852715fab254165b",
      logoUrl: "/linkedin.jpg",
      issued: "February 2024",
      credentialId: "d0868578fad0a42113c89ba48e66beb7d243b5b5687e47d9852715fab254165b"
    },
    {
      title: "Typescript 4 Essential Training",
      issuer: "LinkedIn",
      href: "https://www.linkedin.com/learning/certificates/cec1aaea2f38b2453979b4a7118a4b30762c51302afaaa997ca8c41bde43b7dc",
      logoUrl: "blank",
      issued: "February 2024",
      credentialId: "cec1aaea2f38b2453979b4a7118a4b30762c51302afaaa997ca8c41bde43b7dc"
    },
    {
      title: "Angular Essential Training",
      issuer: "LinkedIn",
      href: "https://www.linkedin.com/learning/certificates/52b64bbfe0bc757a30763c9d595d8f46ecc864dada455d1969d2708ec8805e63",
      logoUrl: "blank",
      issued: "August 2024",
      credentialId: "52b64bbfe0bc757a30763c9d595d8f46ecc864dada455d1969d2708ec8805e63"
    },
  ],
  projects: [
    {
      "title": "autoquébecfinance.ca",
      "href": "https://autoquebecfinance.ca",
      "dates": "Jun 2024 - Present",
      "active": true,
      "description":
        "A dynamic marketing website built to enhance user engagement and streamline automotive financing services. The platform showcases a responsive design, user-friendly navigation, and features tailored to attract potential clients.",
      "technologies": [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "SCSS"
      ],
      "links": [
        {
          "type": "Website",
          "href": "https://autoquebecfinance.ca",
          "icon": <Icons.globe className="size-3" />
        }
      ],
      "image": "/thumbnails/autoquebecfinance-website.png",
      "video": ""
    },    
    {
      title: "Multi-Step Form Application",
      href: "https://autocanadafinance.ca/demande-simple",
      dates: "September 2024 - Present",
      active: true,
      description: 
        `
        A reusable multi-step form designed for modularity, easy scaling, and seamless
        user experiences. Deployed across multiple platforms to streamline customer
        data collection.
        `.replace(/\s+/g, " ").trim()
      ,
      technologies: [
        "React",
        "TypeScript",
        "SCSS",
        "Express"
      ],
      links: [
        {
          type: "AutoCanadaFinance - Simple",
          href: "https://autocanadafinance.ca/demande-simple",
          icon: <Icons.globe className="size-3" />
        },
        {
          type: "Complete",
          href: "https://autocanadafinance.ca/demande-complete",
          icon: <Icons.globe className="size-3" />
        },
        {
          type: "AutoQuebec Form",
          href: "https://autoquebecfinance.ca/demande-simple",
          icon: <Icons.globe className="size-3" />
        }
      ],
      image: "/thumbnails/autocanadafinance-simple-form.png",
      video: ""
    },    
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  volunteering: volunteering,
} as const;
