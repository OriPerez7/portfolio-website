import React from 'react';
import { RxOpenInNewWindow, RxLink2 } from 'react-icons/rx';

const ProjectItem = ({ image, title, tag, description, previewLink, sourceCodeLink }) => {
  const openNewPreviewLink = () => {
    window.open(previewLink, '_blank');
  };

  const openNewSourceCodeLink = () => {
    window.open(sourceCodeLink, '_blank');
  };

  return (
    <div>
      <div className="min-w-[300px] max-w-[400px] cursor-pointer shadow-md transition ease-in-out delay-100 hover:scale-110 duration-200 flex flex-col gap-3">
        <img src={image} alt={`${title} image`} />
        {tag}
        <h3 className='mb-3'>{title}</h3>
        <p className="text-md mb-4">{description}</p>
        <div className='flex gap-10'>
          <button className="btn-primary" onClick={openNewPreviewLink}>
            Live preview
            <RxOpenInNewWindow className="inline ml-1.5 text-lg text-white" />
          </button>
          <button className="btn-secondary" onClick={openNewSourceCodeLink}>
            Source code
            <RxLink2 className="inline ml-1.5 text-lg text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;