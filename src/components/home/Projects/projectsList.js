import { ReactTag, NextJSTag, TailwindTag } from './Tag';
import { TAGS } from '../../constants';

import logo from '../../../assets/logo.png';
import binaryBeans from '../../../assets/binary-beans-cover.png';
import natureQuest from '../../../assets/camping-app-cover.png';

export const projects = [
    {
      title: 'Binary Beans',
      description:
        'Coffee Shop for developers. Created with React, Tailwind and Framer Motion.',
      image: binaryBeans,
      tagIcon: ReactTag,
      otherTag: TailwindTag,
      tag: TAGS.frontend,
      previewLink: 'https://binary-beans.vercel.app',
    },
    {
      title: 'Nature Quest',
      description:
        'Camping App landing page. Created with Next.js (TypeScript) and Tailwind.',
      image: natureQuest,
      tagIcon: NextJSTag,
      otherTag: TailwindTag,
      tag: TAGS.frontend,
      previewLink: 'https://nature-quest-app.vercel.app/',
    },
  ];