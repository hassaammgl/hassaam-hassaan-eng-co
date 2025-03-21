
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  price: string;
  delay: number;
}

const ServiceCard = ({ title, description, icon: Icon, price, delay }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className="h-full bg-white border-steelworks-silver/20 shadow-md hover:shadow-lg transition-shadow group">
        <CardHeader className="pb-2">
          <div className="w-12 h-12 rounded-md bg-steelworks-blue flex items-center justify-center mb-4 text-white transition-all duration-300 group-hover:bg-steelworks-yellow group-hover:text-steelworks-black">
            <Icon size={24} />
          </div>
          <CardTitle className="text-steelworks-blue text-xl font-display">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-steelworks-gray mb-4 text-sm">
            {description}
          </CardDescription>
          <div className="text-steelworks-orange font-semibold">
            Starting at {price}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
