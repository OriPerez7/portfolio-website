import React, { useState } from "react";
import { SectionLayout } from "../../shared/Layout";
import ProjectItem from "./ProjectItem";
import { projects } from "./projectsList";
import { TAGS } from "../../constants";
import FilterTags from "./FilterTags";

const Projects = () => {
  const [activeTag, setActiveTag] = useState(TAGS.all);

  const handleOnTagClick = (tag) => {
    setActiveTag(tag);
  };

  const filteredProjects =
    activeTag === TAGS.all
      ? projects
      : projects.filter((project) => project.tag === activeTag);

  return (
    <>
      {/*<div className="mb-10">
        <FilterTags activeTag={activeTag} onTagClick={handleOnTagClick} />
      </div>*/}
      <div className="w-full">
        <div className="grid grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectItem
              title={project.title}
              description={project.description}
              tag={project.tagIcon}
              previewLink={project.previewLink}
              sourceCodeLink={project.sourceCodeLink}
              image={project.image}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const ProjectsSection = () => {
  return (
    <SectionLayout title="My Projects" subtitle=" " children={<Projects />} />
  );
};

export default ProjectsSection;
