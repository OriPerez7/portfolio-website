import React from "react";
import { RxOpenInNewWindow } from "react-icons/rx";

const ProjectItem = ({
  image,
  title,
  tag,
  otherTag,
  description,
  previewLink,
  sourceCodeLink,
}) => {
  const openNewPreviewLink = () => {
    window.open(previewLink, "_blank");
  };

  return (
    <div>
      <div className="min-w-[300px] max-w-[400px] cursor-pointer shadow-md transition ease-in-out delay-100 hover:scale-110 duration-200 flex flex-col gap-3">
        <img src={image} alt={`${title} image`} />
        <div className="flex gap-4">
          {tag} {otherTag}
        </div>
        <h3 className="mb-3">{title}</h3>
        <p className="text-md mb-4">{description}</p>
        <div className="flex gap-10 justify-end">
          <button className="btn-primary" onClick={openNewPreviewLink}>
            Live preview
            <RxOpenInNewWindow className="inline ml-1.5 text-lg text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
