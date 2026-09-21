import { motion } from 'framer-motion';
import { styles } from '../styles';
import { bwmap, worldmap } from '../assets';

const Hero = () => (
  <section className="hero-section relative isolate flex w-full overflow-hidden">
    <picture className="absolute inset-0 -z-20">
      <source media="(min-width: 640px)" srcSet={bwmap} />
      <img src={worldmap} alt="" className="h-full w-full object-cover" />
    </picture>
    <div className="absolute inset-0 -z-10 bg-hero-mobile sm:bg-hero" />
    <div className={`${styles.paddingX} mx-auto w-full max-w-7xl pb-40 pt-32 sm:pt-40 lg:pt-44`}>
      <div className="max-w-4xl">
        <h1 className="break-words font-mova text-[clamp(2.5rem,8vw,5.625rem)] font-extrabold uppercase leading-[1.05] text-eerieBlack sm:text-jetGray">
          Kyle Michael
        </h1>
        <p className="mt-5 text-base font-medium leading-relaxed text-eerieBlack sm:text-xl lg:text-[26px]">
          <span className="block">Senior Software Engineer</span>
          <span className="block">Full Stack Development</span>
        </p>
      </div>
    </div>
    <a
      href="#about"
      aria-label="Scroll to overview"
      className="absolute bottom-8 left-1/2 flex min-h-[72px] min-w-[44px] -translate-x-1/2 items-center justify-center sm:bottom-10">
      <div className="flex h-16 w-9 justify-center rounded-3xl border-4 border-dim p-2">
        <motion.div
          animate={{ y: [0, 24, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
          className="h-3 w-3 shrink-0 rounded-full bg-taupe"
        />
      </div>
    </a>
  </section>
);

export default Hero;
