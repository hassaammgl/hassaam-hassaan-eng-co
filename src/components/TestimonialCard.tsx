
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  content: string;
  author: string;
  position: string;
  rating: number;
  imageUrl: string;
  delay: number;
}

const TestimonialCard = ({ content, author, position, rating, imageUrl, delay }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="p-4"
    >
      <Card className="h-full overflow-hidden bg-white hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < rating ? 'fill-steelworks-yellow text-steelworks-yellow' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <p className="text-steelworks-gray mb-6 italic">"{content}"</p>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img src={imageUrl} alt={author} className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-semibold text-steelworks-blue">{author}</h4>
              <p className="text-sm text-steelworks-gray/80">{position}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
