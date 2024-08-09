import React from "react";
import { FaCode, FaCodepen, FaWind } from "react-icons/fa6";

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

export const ReactTag = (
  <Tag icon={<FaCode />} bgColor="bg-darkBlue" label="React" />
);

export const NextJSTag = (
  <Tag icon={<FaCodepen />} bgColor="bg-gray" label="Next.js" />
);

export const TailwindTag = (
  <Tag icon={<FaWind />} bgColor="bg-blue" label="Tailwind" />
);

export default Tag;
