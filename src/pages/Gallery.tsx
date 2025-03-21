
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import SectionTitle from '@/components/SectionTitle';
import GalleryImage from '@/components/GalleryImage';
import { galleryImages, galleryCategories } from '@/data/gallery';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-steelworks-blue">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616966220958-77274dae9fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle 
            title="Project Gallery" 
            subtitle="Explore our portfolio of completed projects showcasing our craftsmanship and attention to detail."
            light={true}
            align="center"
          />
        </div>
      </section>
      
      {/* Filters */}
      <section className="py-8 bg-steelworks-lightgray border-b border-steelworks-silver/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center flex-wrap gap-2">
            <Button
              variant={selectedCategory === 'All' ? 'default' : 'outline'}
              className={selectedCategory === 'All' ? 'bg-steelworks-blue text-white' : 'text-steelworks-gray'}
              onClick={() => setSelectedCategory('All')}
            >
              All Projects
            </Button>
            {galleryCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={selectedCategory === category ? 'bg-steelworks-blue text-white' : 'text-steelworks-gray'}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layout
                transition={{ duration: 0.5 }}
              >
                <GalleryImage 
                  id={image.id}
                  title={image.title}
                  imageUrl={image.imageUrl}
                  category={image.category}
                />
              </motion.div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-steelworks-blue mb-2">No projects found</h3>
              <p className="text-steelworks-gray">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
