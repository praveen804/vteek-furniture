import AboutContainer from '@/components/AboutComponents/AboutContainer';
import { AboutMeta } from '@/src/meta/AboutMeta';
import React from 'react';

export const metadata = AboutMeta;

const About = () => {
  return (
    <div>
      <AboutContainer />
    </div>
  );
};

export default About;
