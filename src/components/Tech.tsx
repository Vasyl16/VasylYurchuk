import React from 'react';

import { BallCanvas } from '.';

import { SectionWrapper } from '../hoc';
import { technologies } from '../constants/constants';

const Tech: React.FC = () => {
  return (
    <div className="flex flex-wrap flex-row justify-center gap-20">
      {technologies.map((technology) => {
        return (
          <div className="w-28 , h-28 " key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        );
      })}
    </div>
  );
};

export default SectionWrapper(Tech, 'tech');
