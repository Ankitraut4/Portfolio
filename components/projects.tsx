"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28 sm:mb-40 w-full max-w-7xl mx-auto"
    >
      <SectionHeading>My Projects</SectionHeading>

      <div
        className="
          grid grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          gap-6 
          px-4 sm:px-6 lg:px-8
          place-items-stretch
        "
      >
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
