import React from "react";
import { FaCode, FaCodepen } from "react-icons/fa6";

const Tag = ({ icon, label, bgColor, color }) => {
  return (
    <div>
      <div
        className={`text-sm inline-flex items-center gap-2 ${bgColor} ${color} p-1.5 rounded-md`}
      >
        {icon}
        <span>{label}</span>
      </div>
    </div>
  );
};

export const FrontendTag = (
  <Tag icon={<FaCode />} bgColor="bg-gray" label="Frontend" />
);

export const BackendTag = (
  <Tag icon={<FaCodepen />} bgColor="bg-gray" label="Backend" />
);

export const FullStackTag = (
  <Tag icon={<FaCode />} bgColor="bg-gray" label="Fullstack" />
);

export default Tag;
