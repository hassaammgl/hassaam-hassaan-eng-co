
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  className?: string;
  light?: boolean;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  className = '', 
  light = false,
  align = 'center' 
}: SectionTitleProps) => {
  return (
    <div className={`${align === 'center' ? 'text-center' : align === 'left' ? 'text-left' : 'text-right'} mb-16 ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={`text-3xl md:text-4xl font-display font-bold mb-4 ${
          light ? 'text-white' : 'text-steelworks-blue'
        }`}
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className={`text-lg max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${
          light ? 'text-white/80' : 'text-steelworks-gray'
        }`}
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default SectionTitle;
