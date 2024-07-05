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
        I am a final year ICT student at Western Sydney University, with a strong passion
        for front-end development. Throughout my academic journey, I've excelled in my
        studies, reflected in my GPA of 6.214/7.0 and recognition on the 2022 & 2023
        Dean’s Merit List. My education has equipped me with a solid foundation in web
        system development, programming techniques, and database design, which I've
        applied in various projects.
      </p>
      <p>
        While front-end development is my area of strength and passion, I also possess a
        well-rounded understanding of back-end development and UI/UX principles. This
        allows me to create websites that are not only visually appealing and functional
        but also user-friendly and optimized for performance.
      </p>
    </motion.section>
  );
};

export default About;
