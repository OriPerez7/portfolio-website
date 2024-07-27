import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const SocialMediaLinks = () => {
  return (
    <div className="flex gap-5">
      <a
        href="https://github.com/OriPerez7"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-secondary"
      >
        <FaGithub size={30} />
      </a>

      <a
        href="https://www.linkedin.com/in/orian-perez/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-secondary"
      >
        <FaLinkedin size={30} />
      </a>

      <a
        href="https://www.instagram.com/orianvista?igsh=MTduY3MwY2J2amU5MA%3D%3D&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-secondary"
      >
        <FaInstagram size={30} />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
