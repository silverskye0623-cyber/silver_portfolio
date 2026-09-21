import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) => {
  function HOC() {
    return (
      <motion.section
        id={idName}
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        className={`${styles.padding} w-full min-w-0 max-w-7xl mx-auto relative z-0 scroll-mt-24`}>
        <Component />
      </motion.section>
    );
  }

  return HOC;
};

export default SectionWrapper;
