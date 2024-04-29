import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import { my_github_link, projects } from '../constants/constants';
import { github } from '../assets';

type ProjectCardProps = {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link: string;
  index: number;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      className="cursor-pointer"
      onClick={() => {
        window.open(source_code_link, '_blank');
      }}
      variants={fadeIn('up', 'spring', index * 0.5 + 0.5, 0.7)}
    >
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 450,
          transition: true,
          transitionSpeed: 2000,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="w-full relative h-[230px] ">
          <img src={image} alt={name} className="h-full w-full rounded-2xl " />
          <div className="absolute flex justify-end inset-0 m-3 card-img_hover ">
            <div
              onClick={() => {
                window.open(my_github_link, '_blank');
              }}
              className="black-gradient h-10 w-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="hover:scale-150 object-contain w-1/2 h-1/2"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold  text-[24px] ">{name}</h3>
          <p className="mt-2 text-secondary text-[18px] ">{description} </p>
          <div className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`${tag.color} text-[14px] `}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <p className={styles.sectionSubText}>My projects</p>
        <h2 className={styles.sectionHeadText}>Studying Experience</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 0.1)}
          className="
        mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] "
        >
          My project My project My project My project My project My project My
          project My project My project My project My project My project My
          project My project My project My project My project My project My
          project My project My project My project My project
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => {
          return <ProjectCard index={index} key={project.name} {...project} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'work');
