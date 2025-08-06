import React from "react";
import { FaReact } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import prj19 from "@/public/prj19.jpg";
import prj20 from "@/public/prj20.jpg";
import prj21 from "@/public/prj21.jpg";
import prj22 from "@/public/prj22.jpg";
import prj23 from "@/public/prj23.jpg";
import prj24 from "@/public/prj24.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "CareerCraft",
    description:
      "An AI-powered web application that helps users track job applications and tailor their resumes, cover letters,... using AI.",
    tags: [
      "React",
      "Next.js",
      "Vercel AI SDK",
      "PostgreSQL",
      "Tailwind",
      "Framer Motion",
      "Tanstack Table",
      "Clerk",
    ],
    imageUrl: prj21,
    webUrl: "https://itscareercraft.vercel.app/",
    buttonText: "Visit Website"
  },
  {
    title: "Focusmate",
    description:
      "A Pomodoro timer enhances focus for work or study, offering customizable timers, background images, and the ability to mix background music.",
    tags: [
      "React",
      "Next.js",
      "Shadcn/UI",
      "Tailwind",
      "React Context API",
    ],
    imageUrl: prj23,
    webUrl: "https://focusmate.vercel.app/",
    buttonText: "Visit Website"
  },
  {
    title: "Powerhouse Property Hunter",
    description:
      "A bespoke business website designed for a specialist buyers’ agent, showcasing premium property services across lifestyle, medical, and agricultural sectors, with a focus on strategic growth and high-conversion user experience.",
    tags: [
      "React",
      "Next.js",
      "Vercel AI SDK",
      "Tailwind",
      "Framer",
    ],
    imageUrl: prj19,
    webUrl: "https://www.powerhousepropertyhunter.com/",
    buttonText: "Visit Website"
  },
  {
    title: "AI Journal Mate",
    description:
      "A web application integrating AI to provide personalized, scalable feedback for student reflective diaries and team collaboration in capstone projects, supporting research on AI-driven education.",
    tags: [
      "React",
      "Next.js",
      "Vercel AI SDK",
      "PostgreSQL",
      "Tailwind",
      "ShadcnUI",
      "AuthJS",
    ],
    imageUrl: prj20,
    webUrl: "https://www.linkedin.com/posts/andrewnguyen-dev_aiineducation-webdevelopment-nextjs-activity-7266286474281533440-_Qe_?utm_source=share&utm_medium=member_desktop",
    buttonText: "See More"
  },
  {
    title: "Andrew Nguyen Photography Portfolio",
    description:
      "A full-stack web application showcasing photographic talents and offering freelance services (photoshoots and private tour guidance) while also marketing Lightroom Presets for sale.",
    tags: [
      "React",
      "Next.js",
      "MongoDB",
      "Tailwind",
      "Framer Motion",
      "Stripe API",
      "Cloudinary API",
      "Google OAuth",
    ],
    imageUrl: prj22,
    webUrl: "https://andrewnguyen.vercel.app/",
    buttonText: "Visit Website"
  },
  {
    title: "MrXpress Mobile Repair",
    description:
      "A digital platform for mobile repair services, operating as a two-sided marketplace, efficiently linking individuals with damaged phones to a network of professionally certified technicians for prompt service.",
    tags: ["React", "Laravel", "Bootstrap", "MySQL", "Stripe API", "AWS"],
    imageUrl: prj24,
    webUrl: "https://mrxpress-frontend.vercel.app/",
    buttonText: "Visit Website"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Framer Motion",
  "Tailwind",
  "Bootstrap",
  "Node.js",
  "PHP",
  "Laravel",
  "MongoDB",
  "MySQL",
  "Python",
  "Stripe.js",
  "Git",
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "SolarQuotes",
    description:
      "I'm now a full-stack developer working remotely at SolarQuotes. I'm responsible for developing new features and maintaining the company's website, which helps users find the best solar solutions for their homes.",
    icon: React.createElement(FaSuitcase),
    date: "May 2024 - present",
  },
  {
    title: "Graduated",
    location: "Western Sydney University",
    description:
    "I finished my Bachelor of Information and Communication Technology (ICT) after 2.5 years of study. I am also an inaugural member of The Creator's Club.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2024",
  },
{
    title: "Full-Stack Developer (Contract)",
    location: "Western Sydney University",
    description:
      "I worked as a main developer for the AI Journal Bot, which helps students track their progress and journal in an WSU's subject.",
    icon: React.createElement(FaSuitcase),
    date: "May 2024 - Dec 2024",
  },
  {
    title: "Web Developer (Internship)",
    location: "Western Sydney University",
    description:
      "I worked as a web developer intern for the new WPMIS 2.0 (Work Placement Management Information System 2.0) web application at WSU, aimed at revolutionizing student job placement management.",
    icon: React.createElement(FaReact),
    date: "Jan 2024 - Jul 2024",
  },
] as const;
