"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />{" "}
            {/* {...project}: pass each property of the project object as a separate prop to the Project component */}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};


export default Projects;
