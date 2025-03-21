
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="/"
            className={`text-2xl font-display font-bold ${
              isScrolled ? 'text-steelworks-blue' : 'text-white'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            STEELWORKS
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Home', link: '#home' },
              { name: 'About', link: '#about' },
              { name: 'Services', link: '#services' },
              { name: 'Products', link: '#products' },
              { name: 'Testimonials', link: '#testimonials' },
              { name: 'Contact', link: '#contact' }
            ].map((item) => (
              <motion.a
                key={item.name}
                href={item.link}
                className={`${
                  isScrolled ? 'text-steelworks-gray' : 'text-white'
                } hover:text-steelworks-yellow transition-colors`}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon"
                className={isScrolled ? 'text-steelworks-gray' : 'text-white hover:bg-white/10'}
              >
                <Search className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className={isScrolled ? 'text-steelworks-gray' : 'text-white hover:bg-white/10'}
              >
                <ShoppingCart className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${isScrolled ? 'text-steelworks-gray' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4">
              {[
                { name: 'Home', link: '#home' },
                { name: 'About', link: '#about' },
                { name: 'Services', link: '#services' },
                { name: 'Products', link: '#products' },
                { name: 'Testimonials', link: '#testimonials' },
                { name: 'Contact', link: '#contact' }
              ].map((item) => (
                <motion.a
                  key={item.name}
                  href={item.link}
                  className="block py-3 text-steelworks-gray hover:text-steelworks-blue transition-colors"
                  whileHover={{ x: 10 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
