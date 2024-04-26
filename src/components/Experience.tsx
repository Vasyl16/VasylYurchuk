import React from 'react';
import { motion } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
  // @ts-ignore
} from 'react-vertical-timeline-component';

import { textVariant } from '../utils/motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { experiences } from '../constants/constants';
import 'react-vertical-timeline-component/style.min.css';

type ExperienceCardProps = {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company_name,
  icon,
  iconBg,
  date,
  points,
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: ' #1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex w-full h-full justify-center items-center">
          <img
            src={icon}
            alt={company_name}
            className="w-[60%] h-[60%] object-contain  "
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{title}</h3>
        <p
          className="text-secondary font-semibold text-[16px] "
          style={{ margin: 0 }}
        >
          {company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2 ">
        {points.map((point, index) => {
          return (
            <li
              key={`experients-point-${index} `}
              className="text-white text-[14px] tracking-wider pl-1"
            >
              {point}
            </li>
          );
        })}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Studying Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col ">
        <VerticalTimeline>
          {experiences.map((experience, index) => {
            return <ExperienceCard key={index} {...experience} />;
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'experience');
