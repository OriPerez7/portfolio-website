import { FrontendTag, BackendTag, FullStackTag } from './Tag';
import { TAGS } from '../../constants';

import logo from '../../../assets/logo.png';

export const projects = [
    {
      title: 'Binary Beans',
      description:
        'Coffee Shop for developers. Website created with React, Tailwind and Framer Motion.',
      image: logo,
      tagIcon: FrontendTag,
      tag: TAGS.frontend,
      previewLink: 'https://binary-beans.vercel.app',
    },
    {
      title: 'Angular Project',
      description:
        'Excepteur sint occaecat cupidatat non proident occaecat cupidatat occaecat cupidatat.',
      image: logo,
      tagIcon: FrontendTag,
      tag: TAGS.frontend,
      previewLink: 'https://josephinegyamera.tech',
    },
    {
      title: 'Portfolio Website',
      description:
        'Excepteur sint occaecat cupidatat non proident occaecat cupidatat occaecat cupidatat.',
      image: logo,
      tagIcon: FrontendTag,
      tag: TAGS.frontend,
      previewLink: 'https://josephinegyamera.tech',
    }
  ];