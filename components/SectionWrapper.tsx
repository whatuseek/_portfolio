import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  children,
  className = '',
  delay = 0,
}) => {
  return (
    <section
      id={id}
      className={`
        w-full
        px-4 sm:px-6 lg:px-8
        py-10 md:py-16
        ${className}
      `}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{
          duration: 0.35,
          delay,
          ease: 'easeOut',
        }}
        className="max-w-6xl mx-auto w-full"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
