import React from "react";
import { SectionLayout } from "../shared/Layout";
import coffee from "../../assets/about-image.svg";

const About = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-10 md:gap-40 flex-wrap md:flex-nowrap">
        {/* Left */}
        <img
          src={coffee}
          alt="About Image"
          className="w-full md:w-2/5 md:rounded-full rounded-md"
        />
        {/* Right */}
        <div className="flex flex-col gap-6 min-w-3/5">
          <p></p>
          <div className="flex items-center gap-10">
            <button className="btn-secondary">Read more</button>
            <button className="btn-primary">Go to resume</button>
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
