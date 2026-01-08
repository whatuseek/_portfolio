import React from "react";
import { Project, SkillCategory, ExperienceItem, ContactLink } from "./types";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import CodeIcon from "@mui/icons-material/Code";
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import BrushIcon from "@mui/icons-material/Brush";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DevicesIcon from "@mui/icons-material/Devices";
import StorageIcon from "@mui/icons-material/Storage";
import ApiIcon from "@mui/icons-material/Api";
import SendIcon from "@mui/icons-material/Send";

// =============================================================================
// ✏️ 1. HERO SECTION & GENERAL INFO
// =============================================================================
export const PERSONAL_INFO = {
  name: "Thaika Soofi",
  role: "Aspiring Frontend Developer (React)",

  heroOverline: "ASPIRING FRONTEND ENGINEER",
  heroTitleLine1: "Building",
  heroTitleHighlight: "Solutions",
  heroTitleLine2: "from Support",
  heroTitleLine3: "Experience.",
  tagline:
    "Building practical, user-centric web interfaces using React, inspired by real-world experience in Internet & Cable TV customer operations.",

  // To use a local resume, save your PDF as 'resume.pdf' in the root or assets folder
  resumeLink: "/thaika soofi ch_.pdf",

  /**
   * 🖼️ PROFILE IMAGE CONFIGURATION
   * NOTE: When using the Google AI Studio builder, local paths like "./assets/images/profile.jpg"
   * often won't display. For the best result in the builder, use a Web URL.
   *
   * HOW TO USE YOUR OWN PHOTO IN THE BUILDER:
   * 1. Upload your photo to a site like LinkedIn or Google Drive (public link).
   * 2. Copy the "Direct Image Link".
   * 3. Paste it below.
   */
  // profileImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
  // profileImage: "https://i.postimg.cc/xyz/profile.png",
  profileImage: "https://i.postimg.cc/cHwrHrKy/profile.png",

  // For later use in VS Code:
  // profileImage: "/profile.jpg",
};

// My Story

export const MY_STORY = [
  {
    phase: "Phase 1",
    title: "Support Background",
    description:
      "Started my career in application support, understanding real user issues and system behavior.",
  },
  {
    phase: "Phase 2",
    title: "Testing Mindset",
    description:
      "Developed strong attention to detail through manual testing and bug analysis.",
  },
  {
    phase: "Phase 3",
    title: "Frontend Curiosity",
    description:
      "Moved into frontend development, learning how UI decisions affect user experience.",
  },
  {
    phase: "Phase 4",
    title: "React Projects",
    description:
      "Built real-world React applications focusing on usability and clean UX.",
  },
  {
    phase: "Phase 5",
    title: "Product Thinking",
    description:
      "Now building interfaces with a product mindset, not just writing code.",
  },
];

// =============================================================================
// ✏️ 2. ABOUT ME SECTION
// =============================================================================
// export const ABOUT_ME_SECTIONS = [
//   {
//     icon: "history",
//     title: "Real-World Foundation",
//     text: "My interest in technology grew from real-world experience, not just theory. While working in Customer Support for Internet and Cable TV services, I interacted with customers daily and handled a wide range of service-related issues. This experience helped me understand how operational challenges directly affect both teams and end users, and why clear systems and tools matter in day-to-day work."
//   },
//   {
//     icon: "search",
//     title: "Bridging the Gaps",
//     text: "As part of my work, I noticed that many internal processes relied on manual tracking, informal updates, and scattered information. These gaps often caused delays, missed follow-ups, and confusion within teams. Instead of simply accepting these limitations, I became curious about how simple software tools could improve everyday workflows and communication."
//   },
//   {
//     icon: "code",
//     title: "The Shift to Frontend",
//     text: "That curiosity encouraged me to start learning frontend development. I began building interfaces using React and modern CSS, focusing on clarity, usability, and real-world use cases. By working on a learning-based internal project, I saw how thoughtful UI design can improve visibility, reduce errors, and support team efficiency."
//   },
//   {
//     icon: "growth",
//     title: "Future Growth",
//     text: "I am a committed learner who enjoys building, experimenting, and improving step by step. I am currently seeking an opportunity in a growth-oriented environment where I can learn from experienced developers, strengthen my frontend skills, and contribute by building practical, user-focused web applications."
//   }
// ];
export const ABOUT_ME_SECTIONS = [
  {
    icon: "history",
    title: "Real-World Foundation",
    text: "My interest in technology grew from real-world, user-facing experience rather than theory alone. Working closely with customers and live services exposed me to everyday operational challenges and their impact on end users, shaping my understanding of why clear systems, tools, and interfaces matter in practical software development.",
  },

  {
    icon: "search",
    title: "Bridging the Gaps",
    text: "I observed that many internal workflows relied on manual tracking and scattered information, often leading to delays and missed follow-ups. Rather than accepting these limitations, I became curious about how simple software tools could streamline everyday workflows and improve team communication.",
  },
  {
    icon: "code",
    title: "The Shift to Frontend",
    text: "I observed that many internal workflows relied on manual tracking and scattered information, often creating lag, delays, and missed follow-ups. Rather than accepting these limitations, I became curious about how simple software tools could streamline everyday workflows and improve team communication.",
  },

  {
    icon: "growth",
    title: "Future Growth",
    text: "I am a committed learner who enjoys building, experimenting, and improving step by step. I am seeking an opportunity in a growth-oriented environment where I can learn from experienced developers, strengthen my frontend skills, and contribute by building practical, user-focused web applications.",
  },
];

export const ABOUT_ME = ABOUT_ME_SECTIONS.map((s) => s.text).join("\n\n");

// =============================================================================
// ✏️ 3. TOOLS & SKILLS
// =============================================================================
export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React (Vite)", level: 75, icon: <CodeIcon fontSize="small" /> },
      {
        name: "JavaScript (ES6+)",
        level: 75,
        icon: <JavascriptIcon fontSize="small" />,
      },
      { name: "HTML5 & CSS3", level: 80, icon: <HtmlIcon fontSize="small" /> },
    ],
  },
  {
    title: "UI Frameworks",
    skills: [
      { name: "Tailwind CSS", level: 80, icon: <BrushIcon fontSize="small" /> },
      {
        name: "Material UI (MUI)",
        level: 70,
        icon: <DashboardIcon fontSize="small" />,
      },
      {
        name: "Responsive Design",
        level: 75,
        icon: <DevicesIcon fontSize="small" />,
      },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      {
        name: "Supabase (DB & Auth)",
        level: 65,
        icon: <StorageIcon fontSize="small" />,
      },
      { name: "REST APIs", level: 70, icon: <ApiIcon fontSize="small" /> },
      {
        name: "Git & GitHub",
        level: 75,
        icon: <GitHubIcon fontSize="small" />,
      },
      { name: "Postman", level: 60, icon: <SendIcon fontSize="small" /> },
    ],
  },
];

const PROJECT_ONE_LOCAL_IMAGES = [
  "https://i.postimg.cc/yxJyRYJr/02.png",
  "https://i.postimg.cc/gjfqHF8c/06.png",
  "https://i.postimg.cc/BbdcB9HJ/08.png",
  "https://i.postimg.cc/66S0XRSS/10.png",
  "https://i.postimg.cc/Jh13qQDB/12.png",
  "https://i.postimg.cc/FKDynJ3j/14.png",
  "https://i.postimg.cc/KYJPsgtb/16.png",
  "https://i.postimg.cc/fLyc4Tv4/18.png",
  "https://i.postimg.cc/76h3vYNJ/20.png",
  "https://i.postimg.cc/qqC2RbSM/22.png",
  "https://i.postimg.cc/jC0PJ6Yq/24.png",
  "https://i.postimg.cc/3W5mDjQ4/26.png",
  "https://i.postimg.cc/c1KzwsGP/28.png",
  "https://i.postimg.cc/0yvXTDK6/30.png",
  "https://i.postimg.cc/8zbXNcLc/32.png",
];

export const PROJECTS: Project[] = [
  {
    title: "Internal Ticket Management System",
    description:
      "This project was inspired by my experience working as a Customer Support Associate in Internet and Cable TV services, where issue tracking was mostly manual and fragmented. To address this, I built a learning-based internal ticket management system that allows support teams to log issues, track ticket status, and maintain visibility across ongoing tasks, helping reduce confusion and manual follow-ups.",
    features: [
      "Ticket creation with mandatory customer details",
      "Status tracking (Open, In Progress, Resolved)",
      "Filterable ticket list for quick access",
      "Report export for internal review",
    ],
    techStack: [
      "React (Vite)",
      "JavaScript",
      "Tailwind CSS",
      "Material UI",
      "Supabase",
      "REST APIs",
      "Axios",
    ],
    images: PROJECT_ONE_LOCAL_IMAGES,
    demoLink: "https://vimeo.com/1096132768?fl=ip&fe=ec",
    githubLink: "https://github.com/whatuseek/smn-tkt",
    isFeatured: true,
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Frontend Development",
    company: "SMART Media Networks",
    period: "2024 - 2025",
    description:
      "Developed a learning-based internal ticketing tool using React and Tailwind CSS as part of a self-paced technical development path. Utilized AI tools as a supportive learning companion to navigate complex logic, while focusing on building a clean, responsive, and user-centric interface for the support team.",
  },
  {
    role: "Customer Support Associate – Internet & Cable TV Services",
    company: "SMART Media Networks",
    period: "2023 - 2025",
    description:
      "Providing technical support for fiber internet and cable TV services. Handled troubleshooting for connectivity issues and managed customer service requests. This frontline experience directly informed my understanding of the operational gaps that I later addressed through learning-based software projects.",
  },
];

// =============================================================================
// ✏️ 4. CONTACT SECTION
// =============================================================================
export const CONTACT_INFO = {
  title: "Get In Touch",
  subtitle:
    "I’d love to connect and share my background, projects, and learning journey.",
};

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: "Email",
    href: "mailto:soofigsoofi@gmail.com",
    icon: <EmailIcon />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thaika-soofi/",
    icon: <LinkedInIcon />,
  },
  {
    label: "GitHub",
    href: "https://github.com/whatuseek",
    icon: <GitHubIcon />,
  },
  {
    label: "Phone",
    href: "tel:+918220016819",
    icon: <PhoneIcon />,
  },
];

// =============================================================================
// ✏️ 5. FOOTER SECTION
// =============================================================================
export const FOOTER_INFO = {
  year: "2026",
  notice: "Built with modern UI tools.",
  caption: "Learning Foundation • Focused UX",
};
