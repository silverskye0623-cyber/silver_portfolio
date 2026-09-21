import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="w-full min-w-0 card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        className="bg-jetLight rounded-[20px] py-6 px-4 min-h-[200px] sm:min-h-[240px] lg:min-h-[280px] h-full flex gap-5 justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-dim text-base sm:text-lg max-w-3xl leading-relaxed sm:leading-[30px]">
        Hello, and welcome to my website! I am a passionate and experienced fullstack developer. With a deep commitment to the craft of coding and a drive to continuously improve my skills, I have dedicated my career to building high-quality, efficient, and user-friendly applications. Over the years, I have honed my expertise in creating powerful software solutions, and I’m excited to share my journey, skills, and the technologies I use to make every project a success.
      </motion.p>

      <div className="mt-8 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:mt-12 sm:gap-6 lg:gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
