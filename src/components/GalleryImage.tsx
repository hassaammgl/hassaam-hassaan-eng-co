
import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface GalleryImageProps {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
}

const GalleryImage = ({ title, imageUrl, category }: GalleryImageProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
        onClick={() => setIsExpanded(true)}
      >
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          <span className="text-white/80 text-sm">{category}</span>
        </div>
      </motion.div>

      {isExpanded && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setIsExpanded(false)}>
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
              }}
            >
              <X size={24} />
            </button>
            <img 
              src={imageUrl}
              alt={title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="bg-white p-4 rounded-b-lg">
              <h3 className="text-xl font-semibold text-steelworks-blue">{title}</h3>
              <p className="text-steelworks-gray">{category}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryImage;
