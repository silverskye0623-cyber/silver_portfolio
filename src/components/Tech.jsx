import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="grid grid-cols-3 xs:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-6 mt-8 sm:mt-12">
        {technologies.map((technology) => (
          <div className="technology-icon w-full min-w-0 max-w-[112px] aspect-square mx-auto" key={technology.name} role="img" aria-label={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'tech');
