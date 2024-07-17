import React from "react";
import { FaReact } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import prj0 from "@/public/prj0.jpg";
import prj1 from "@/public/prj1.jpg";
import prj2 from "@/public/prj2.jpg";
import prj3 from "@/public/prj3.jpg";

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
      "[In Progress] An AI-powered web application that helps users track job applications and tailor their resumes, cover letters,... using AI.",
    tags: [
      "React",
      "Next.js",
      "Vercel AI SDK",
      "PostgreSQL",
      "Tailwind",
      "Framer Motion",
      "Tanstack Table",
      "Stripe API",
      "Clerk",
    ],
    imageUrl: prj0,
    webUrl: "https://itscareercraft.vercel.app/",
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
    imageUrl: prj1,
    webUrl: "https://andrewnguyen.vercel.app/",
  },
  {
    title: "Focusmate",
    description:
      "A Pomodoro timer enhances focus for work or study, offering customizable timers, background images, and the ability to mix background music.",
    tags: ["React (TypeScript)", "Next.js", "Shadcn/UI", "Tailwind", "React Context API"],
    imageUrl: prj3,
    webUrl: "https://focusmate.vercel.app/",
  },
  {
    title: "MrXpress Mobile Repair",
    description:
      "A digital platform for mobile repair services, operating as a two-sided marketplace, efficiently linking individuals with damaged phones to a network of professionally certified technicians for prompt service.",
    tags: ["React", "Laravel", "Bootstrap", "MySQL", "Stripe API", "AWS"],
    imageUrl: prj2,
    webUrl: "",
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
    title: "Junior Full-Stack Developer",
    location: "SolarQuotes",
    description:
      "I'm now a full-stack developer working remotely at SolarQuotes. I'm responsible for developing new features and maintaining the company's website, which helps users find the best solar solutions for their homes.",
    icon: React.createElement(FaSuitcase),
    date: "Jul 2024 - present",
  },
  {
    title: "Junior Full-Stack Developer (Contract)",
    location: "Western Sydney University",
    description:
      "I'm working as a main developer for the AI Journal Bot, which helps students track their progress and journal in an WSU's subject.",
    icon: React.createElement(FaSuitcase),
    date: "Jul 2024 - present",
  },
  {
    title: "Graduate",
    location: "Western Sydney University",
    description:
      "I finished my Bachelor of Information and Communication Technology (ICT) after 2.5 years of study. I am also an inaugural member of The Creator's Club.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2024",
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
