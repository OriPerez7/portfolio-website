import { ReactTag, NextJSTag, TailwindTag } from './Tag';
import { TAGS } from '../../constants';

import logo from '../../../assets/logo.png';

export const projects = [
    {
      title: 'Binary Beans',
      description:
        'Coffee Shop for developers. Created with React, Tailwind and Framer Motion.',
      image: logo,
      tagIcon: ReactTag,
      otherTag: TailwindTag,
      tag: TAGS.frontend,
      previewLink: 'https://binary-beans.vercel.app',
    },
    {
      title: 'Nature Quest',
      description:
        'Camping App landing page. Created with Next.js (TypeScript) and Tailwind.',
      image: logo,
      tagIcon: NextJSTag,
      otherTag: TailwindTag,
      tag: TAGS.frontend,
      previewLink: 'https://nature-quest-app.vercel.app/',
    },
    {
      title: 'Portfolio Website',
      description:
        'Excepteur sint occaecat cupidatat non proident occaecat cupidatat occaecat cupidatat.',
      image: logo,
      tagIcon: ReactTag,
      tag: TAGS.frontend,
      previewLink: 'https://josephinegyamera.tech',
    }
  ];