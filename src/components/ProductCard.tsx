
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose
} from '@/components/ui/dialog';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  description: string;
}

const ProductCard = ({ id, name, price, imageUrl, category, description }: ProductCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-md overflow-hidden border border-steelworks-silver/20 h-full flex flex-col cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative h-64 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
          <div className="absolute top-2 right-2 bg-steelworks-yellow text-steelworks-black text-xs font-semibold px-2 py-1 rounded-full">
            {category}
          </div>
        </div>
        <div className="p-4 flex-grow">
          <h3 className="text-xl font-display font-bold text-steelworks-blue mb-2">{name}</h3>
          <p className="text-steelworks-gray text-sm mb-3 line-clamp-2">{description}</p>
          <div className="flex justify-between items-center mt-auto">
            <span className="text-lg font-bold text-steelworks-orange">
              ${price.toFixed(2)}
            </span>
            <Button 
              size="sm" 
              className="bg-steelworks-blue hover:bg-steelworks-blue/90"
              onClick={(e) => {
                e.stopPropagation();
                // Add to cart functionality would go here
                console.log(`Added ${id} to cart`);
              }}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
          <DialogClose className="absolute right-4 top-4 z-10 bg-steelworks-black/40 text-white rounded-full p-1 hover:bg-steelworks-black/70 transition-colors">
            <X className="h-5 w-5" />
          </DialogClose>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="h-[300px] md:h-auto">
              <img 
                src={imageUrl} 
                alt={name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <DialogHeader>
                <div className="flex justify-between items-start mb-2">
                  <DialogTitle className="text-2xl font-display font-bold text-steelworks-blue">{name}</DialogTitle>
                  <span className="bg-steelworks-yellow text-steelworks-black text-xs font-semibold px-2 py-1 rounded-full">
                    {category}
                  </span>
                </div>
                <DialogDescription className="text-lg font-bold text-steelworks-orange">
                  ${price.toFixed(2)}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-steelworks-gray mb-2">Product Description</h4>
                <p className="text-steelworks-gray">{description}</p>
              </div>
              
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-steelworks-gray mb-2">Features</h4>
                <ul className="list-disc pl-5 text-steelworks-gray space-y-1">
                  <li>Custom crafted from high-quality materials</li>
                  <li>Durable construction for long-lasting use</li>
                  <li>Precision engineering for superior performance</li>
                  <li>Handcrafted with attention to detail</li>
                </ul>
              </div>
              
              <div className="mt-8">
                <Button 
                  className="w-full bg-steelworks-blue hover:bg-steelworks-blue/90"
                  onClick={() => {
                    console.log(`Added ${id} to cart from dialog`);
                    setIsOpen(false);
                  }}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;
