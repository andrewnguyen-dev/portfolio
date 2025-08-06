"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I’m a web developer with over one year of professional experience, building real-world solutions since graduating from Western Sydney University. With a GPA of 6.3/7.0 and Dean’s Merit List recognition in 2022 & 2023, I’ve built on my academic foundation in web systems, programming, and database design through hands-on work and impactful projects.
      </p>
      <p>
        My passion lies in front-end development, where I bring designs to life with clean, responsive, and performant code. At the same time, my solid understanding of back-end development and UI/UX principles enables me to deliver websites that are not only visually engaging but also intuitive and robust across the stack.
      </p>
    </motion.section>
  );
};

export default About;
