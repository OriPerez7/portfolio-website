import React from "react";
import { SectionLayout } from "../shared/Layout";
import { FaLink } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="flex flex-col md:items-center gap-7">
      <div className="flex flex-col md:items-center gap-2">
        <h3 className="uppercase">Send me an Email</h3>
        <p className="text-lg">mindvistainfo@gmail.com</p>
      </div>
      <h3 className="text-[25px]">OR</h3>
      <div className="flex flex-col md:items-center gap-2">
        <h3 className="uppercase">Message me on LinkedIn</h3>
        <p className="text-lg">
          <a
            href="https://www.linkedin.com/in/orian-perez/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary flex gap-1 items-center"
          >
            Visit my Profile
            <FaLink size={18} className="text-secondary" />
          </a>
        </p>
      </div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <section id="contact">
      <SectionLayout title="Contact Me" subtitle="" children={<Contact />} />
    </section>
  );
};

export default ContactSection;
