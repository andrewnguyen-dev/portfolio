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
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I'm a web developer with a passion for creating beautiful, responsive
        websites. I've been developing websites for over 10 years and have
        experience with a variety of technologies including HTML, CSS,
        JavaScript, and React.
      </p>
      <p>
        I have a strong background in design and am able to create websites that
        are both visually appealing and functional. I'm also experienced in SEO
        and can help you optimize your website to rank higher in search engine
        results.
      </p>
    </motion.section>
  );
};

export default About;
