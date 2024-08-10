import React from "react";
import SocialMediaLinks from "../shared/SocialMediaLinks";
import heroImage from "../../assets/heroImage.svg";
import { useTypingEffect } from "../../hooks/useTypingEffect";

const Hero = () => {
  const texts = ["Orian Perez", "a Developer", "an Artist", "a Cat Lover"];
  const currentLetter = useTypingEffect(texts);
  return (
    <>
      <div className="flex justify-between items-center gap-10 md:gap-40 flex-wrap md:flex-nowrap mt-14 md:mt-40">
        {/* Content */}
        <div className="flex flex-col gap-6 min-w-3/5">
          <h2>Hi! I'm</h2>
          <h1 className="text-primary block text-4xl sm:text-6xl md:text-5xl lg:text-8xl">{currentLetter}</h1>
          <p className="text-lg">
            I'm a self-taught frontend developer with an eye for the small
            details that make a big difference. I love crafting responsive
            projects from figma designs and turn them into clear, efficient
            websites.
          </p>

          <div className="flex items-center gap-10">
            <button
              className="btn-secondary"
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              See my projects
            </button>
            <button
              className="btn-primary"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Let's chat
            </button>
          </div>

          <div className="flex gap-4 items-center">
            <p className="text-white uppercase">Connect with me</p>
            <div className="h-[0.5px] w-20 bg-white"></div>
            <SocialMediaLinks />
          </div>
        </div>

        {/* Image */}
        <img
          src={heroImage}
          alt="Hero image"
          className="w-full md:w-2/5 md:rounded-full rounded-md"
        />
      </div>
    </>
  );
};

export default Hero;
