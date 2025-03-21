
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  description: string;
}

const ProductCard = ({ id, name, price, imageUrl, category, description }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden border border-steelworks-silver/20 h-full flex flex-col"
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
          <Button size="sm" className="bg-steelworks-blue hover:bg-steelworks-blue/90">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
