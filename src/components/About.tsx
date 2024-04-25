import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { services } from '../constants/constants';
import { SectionWrapper } from '../hoc';

type ServiceCardPorps = {
  title: string;
  icon: string;
  index: number;
};

const ServiceCard: React.FC<ServiceCardPorps> = ({ title, icon, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
          flex justify-evenly items-center flex-col "
          // options={{ max: 45, scale: 1, speed: 450 }}
        >
          <img src={icon} alt={title} className="object-contain w-16 h-16 " />
          <h3 className="text-center text-white text-[20px] font-bold ">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About: React.FC = () => {
  return (
    <div className={`${styles.paddingX} max-w-7xl  mx-auto`}>
      <motion.div variants={textVariant(0.5)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn('', '', 0.1, 1)}
      >
        My overview My overview My overview My overview My overview My overview
        My overview My overview My overview My overview My overview My overview
        My overview My overview My overview My overview My overview My overview
        My overview My overview My overview My overview My overview My overview
        My overview
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
