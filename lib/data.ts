import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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
  "Laravel",
  "MongoDB",
  "MySQL",
  "Python",
  "Stripe.js",
  "Git",
] as const;

export const experiencesData = [
  {
    title: "Web Developer",
    location: "Sydney, NSW",
    description:
      "I am working as a web developer for the new WPMIS 2.0 (Work Placement Management Information System 2.0) web application at WSU, aimed at revolutionizing student job placement management.",
    icon: React.createElement(FaReact),
    date: "Jan 2024 - Present",
  },
  {
    title: "Graduate",
    location: "Western Sydney University",
    description:
      "I will finish my Bachelor of Information and Communication Technology (ICT) after 2.5 years of study. I am also an inaugural member of The Creator's Club",
    icon: React.createElement(LuGraduationCap),
    date: "Jul 2024",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;
