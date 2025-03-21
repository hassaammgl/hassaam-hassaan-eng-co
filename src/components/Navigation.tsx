
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/#about' },
    { name: 'Services', link: '/#services' },
    { name: 'Products', link: '/products' },
    { name: 'Gallery', link: '/gallery' },
    { name: 'FAQs', link: '/faqs' },
    { name: 'Contact', link: '/#contact' }
  ];

  const isActive = (path: string) => {
    if (path.startsWith('/#')) return false;
    return location.pathname === path;
  };

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
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link 
              to="/"
              className={`text-2xl font-display font-bold ${
                isScrolled ? 'text-steelworks-blue' : 'text-white'
              }`}
            >
              STEELWORKS
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ y: -2 }}>
                <Link
                  to={item.link}
                  className={`${
                    isActive(item.link) 
                      ? 'text-steelworks-yellow' 
                      : isScrolled 
                        ? 'text-steelworks-gray' 
                        : 'text-white'
                  } hover:text-steelworks-yellow transition-colors`}
                >
                  {item.name}
                </Link>
              </motion.div>
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
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ x: 10 }}
                >
                  <Link
                    to={item.link}
                    className={`block py-3 ${isActive(item.link) ? 'text-steelworks-yellow' : 'text-steelworks-gray'} hover:text-steelworks-blue transition-colors`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
