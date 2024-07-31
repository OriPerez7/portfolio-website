import React from "react";
import { SectionLayout } from "../shared/Layout";
import coffee from "../../assets/about-image.svg";
import { FaLink } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-10 md:gap-30 flex-wrap md:flex-nowrap">
        {/* Left */}
        <img
          src={coffee}
          alt="About Image"
          className="w-full md:w-2/5 md:rounded-full rounded-md sm:hidden md:block"
        />
        {/* Right */}
        <div className="flex flex-col gap-6 min-w-3/5">
          <div>
            <h4>Current Location</h4>
            <p>Madrid, Spain</p>
          </div>
          <div>
            <h4>Skills</h4>
            <p>
              React, Tailwind, JavaScript, TypeScript, Sass, Git, Wordpress,
              SEO.
            </p>
          </div>
          <div>
            <h4>Soft Skills</h4>
            <p>
              Attention to Detail, Time Management, Creativity, Problem Solving,
              <br /> Communication, Open-mindedness.
            </p>
          </div>
          <div>
            <h4>Resume</h4>
            <p>
              <a
                href="#"
                target="_blank"
                className="hover:text-secondary flex gap-1 items-center"
              >
                orianperez.pdf
                <FaLink />
              </a>
            </p>
          </div>
          <div>
            <h4>Education</h4>
            <p>Graphic Design - Aula Creactiva, Madrid</p>
            <p>Frontend Engineer - Codecademy</p>
          </div>
          <div>
            <h4>Interests</h4>
            <p>Travel, cooking, k-pop, manga, Marvel, PlayStation. </p>
          </div>
        </div>
      </div>
    </>
  );
};

const AboutMeSection = () => {
  return <SectionLayout title="About Me" subtitle=" " children={<About />} />;
};

export default AboutMeSection;
