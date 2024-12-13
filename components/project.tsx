"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

const Project = ({
  title,
  description,
  tags,
  imageUrl,
  webUrl,
  buttonText
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      className="group mb-3 sm:mb-8 last:mb-0"
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <section className="bg-gray-100 max-w-[42rem] rounded-lg border border-black/5 overflow-hidden pb-6 sm:pb-0 sm:pr-8 relative sm:h-[28rem] sm:group-even:pl-8 hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20">
        <div className="flex flex-col pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.8] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          className="absolute hidden sm:block top-12 -right-40 w-[28.25rem] rounded-lg shadow-2xl 
        group-even:-right-[initial] group-even:-left-40 transition group-hover:scale-[1.04]
        group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-2
        group-even:group-hover:translate-x-3 group-even:group-hover:-translate-y-3 group-even:group-hover:rotate-2"
          src={imageUrl}
          alt="Project I worked on"
          quality={75}
          placeholder="blur"
        />
        {webUrl.length > 0 && (
          <button>
            <a
              href={webUrl}
              className="absolute bottom-6 group-odd:right-6 group-even:left-6 px-4 py-2 opacity-60 bg-black text-gray-100 rounded-full outline-none focus:scale-110 hover:scale-110 transition"
            >
              {buttonText}
            </a>
          </button>
        )}
      </section>
    </motion.div>
  );
};

export default Project;
