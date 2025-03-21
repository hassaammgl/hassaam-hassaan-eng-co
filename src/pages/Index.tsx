import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import {
  ArrowRight,
  Wand2,
  Wrench,
  Hammer,
  Truck,
  Users,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center" id="home">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')`,
            backgroundAttachment: 'fixed' 
          }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-steelworks-black/80 to-steelworks-black/60 z-10"></div>
        
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-5"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-welding-a-metal-sheet-10392-large.mp4" type="video/mp4" />
        </video>
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-3xl"
          >
            <motion.span
              className="inline-block font-display text-white/80 text-lg mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Premium Steel & Iron Works
            </motion.span>
            <motion.h1
              className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              Crafting Excellence in Metal
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white/90 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              From custom gates to architectural masterpieces, we bring your vision to life with precision and artistry.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-steelworks-yellow text-steelworks-black hover:bg-steelworks-yellow/90">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Request Quote
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="animate-float">
            <ArrowRight className="h-8 w-8 text-white transform rotate-90" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-steelworks-lightgray" id="about">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="About SteelWorks" 
            subtitle="With over 20 years of expertise in metal fabrication, we deliver exceptional quality and craftsmanship for both residential and commercial projects."
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-steelworks-orange/20 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-steelworks-blue/20 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Steel Workshop" 
                className="w-full h-[400px] object-cover rounded-lg shadow-lg relative z-10"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-display font-bold text-steelworks-blue mb-6">Our Commitment to Excellence</h3>
              <p className="text-steelworks-gray mb-4">
                At SteelWorks, we believe that metal isn't just a material—it's a medium for artistic expression and functional design. Our team of skilled artisans and engineers transform raw steel and iron into bespoke creations that stand the test of time.
              </p>
              <p className="text-steelworks-gray mb-6">
                Whether you're looking for ornate decorative pieces or structural components, our attention to detail and commitment to quality ensures that every project exceeds expectations.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-steelworks-yellow/20 flex items-center justify-center text-steelworks-orange shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-steelworks-blue mb-1">Quality Guaranteed</h4>
                    <p className="text-sm text-steelworks-gray">Premium materials and finishes</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-steelworks-yellow/20 flex items-center justify-center text-steelworks-orange shrink-0">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-steelworks-blue mb-1">Expert Team</h4>
                    <p className="text-sm text-steelworks-gray">Certified professionals</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-steelworks-yellow/20 flex items-center justify-center text-steelworks-orange shrink-0">
                    <Truck size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-steelworks-blue mb-1">Timely Delivery</h4>
                    <p className="text-sm text-steelworks-gray">On-schedule project completion</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-steelworks-yellow/20 flex items-center justify-center text-steelworks-orange shrink-0">
                    <Wand2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-steelworks-blue mb-1">Custom Designs</h4>
                    <p className="text-sm text-steelworks-gray">Tailored to your vision</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" id="services">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Services" 
            subtitle="We offer a comprehensive range of metalworking services to meet your residential and commercial needs."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              title="Custom Fabrication" 
              description="Bespoke metal structures and components designed and built to your exact specifications." 
              icon={Wand2} 
              price="$500" 
              delay={1}
            />
            
            <ServiceCard 
              title="Welding Services" 
              description="Professional welding for repairs, modifications, or new constructions using MIG, TIG, and stick welding techniques." 
              icon={Wrench} 
              price="$250" 
              delay={2}
            />
            
            <ServiceCard 
              title="Metal Finishing" 
              description="Surface treatment and finishing options including powder coating, galvanizing, polishing, and custom paint finishes." 
              icon={Hammer} 
              price="$350" 
              delay={3}
            />
            
            <ServiceCard 
              title="Installation" 
              description="Professional installation services ensuring your metal products are securely and correctly fitted." 
              icon={Truck} 
              price="$200" 
              delay={4}
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button className="bg-steelworks-blue hover:bg-steelworks-blue/90">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-steelworks-blue text-white relative overflow-hidden" id="why-us">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578598336003-63a1e356c668?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1536&q=80')] bg-cover bg-center opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle 
            title="Why Choose SteelWorks" 
            subtitle="Our dedication to quality and customer satisfaction sets us apart from the competition."
            light={true}
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-steelworks-yellow/80 flex items-center justify-center mb-6">
                <ShieldCheck size={30} className="text-steelworks-blue" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4">Premium Quality</h3>
              <p className="text-white/80">
                We use only the highest quality materials and employ rigorous quality control processes to ensure durability and longevity in all our products.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-steelworks-yellow/80 flex items-center justify-center mb-6">
                <Users size={30} className="text-steelworks-blue" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4">Expert Craftsmen</h3>
              <p className="text-white/80">
                Our team consists of certified professionals with decades of combined experience in metalworking, ensuring precision and expertise in every project.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-steelworks-yellow/80 flex items-center justify-center mb-6">
                <Clock size={30} className="text-steelworks-blue" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4">Timely Delivery</h3>
              <p className="text-white/80">
                We respect your timelines and deliver projects on schedule without compromising on quality, keeping you informed throughout the process.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-steelworks-lightgray" id="testimonials">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="What Our Clients Say" 
            subtitle="Don't just take our word for it. Hear from customers who have experienced our craftsmanship firsthand."
          />
          
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <TestimonialCard 
                  content="SteelWorks transformed our entryway with a custom wrought iron gate that exceeded our expectations. Their attention to detail and craftsmanship is unmatched."
                  author="Michael Thompson"
                  position="Homeowner"
                  rating={5}
                  imageUrl="https://randomuser.me/api/portraits/men/32.jpg"
                  delay={1}
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <TestimonialCard 
                  content="We hired SteelWorks for our commercial railing project, and they delivered on time and within budget. The quality of work is outstanding."
                  author="Sarah Johnson"
                  position="Interior Designer"
                  rating={5}
                  imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
                  delay={2}
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <TestimonialCard 
                  content="The custom metal art piece they created for our office lobby is a showstopper. Everyone who visits comments on its beauty and craftsmanship."
                  author="David Martinez"
                  position="Business Owner"
                  rating={4}
                  imageUrl="https://randomuser.me/api/portraits/men/22.jpg"
                  delay={3}
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <TestimonialCard 
                  content="Professional, punctual, and their work quality is exceptional. I couldn't be happier with my new steel staircase."
                  author="Emily Wilson"
                  position="Architect"
                  rating={5}
                  imageUrl="https://randomuser.me/api/portraits/women/28.jpg"
                  delay={4}
                />
              </CarouselItem>
            </CarouselContent>
            <div className="hidden md:flex">
              <CarouselPrevious className="relative top-0 left-0 -translate-y-0 translate-x-0 h-10 w-10 bg-steelworks-blue text-white hover:bg-steelworks-yellow hover:text-black" />
              <CarouselNext className="relative top-0 right-0 -translate-y-0 translate-x-0 h-10 w-10 bg-steelworks-blue text-white hover:bg-steelworks-yellow hover:text-black" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Get In Touch" 
            subtitle="Have questions or ready to start your project? Reach out to us for a free consultation and quote."
          />
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-display font-bold text-steelworks-blue mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-steelworks-yellow/20 flex items-center justify-center text-steelworks-orange shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-steelworks-blue">Phone</h4>
                    <p className="text-steelworks-gray">(123) 456-7890</p>
                    <p className="text-steelworks-gray">Mon-Fri: 8am-6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-steelworks-yellow/20 flex items-center justify-center text-steelworks-orange shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-steelworks-blue">Email</h4>
                    <p className="text-steelworks-gray">info@steelworks.com</p>
                    <p className="text-steelworks-gray">sales@steelworks.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-steelworks-yellow/20 flex items-center justify-center text-steelworks-orange shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-steelworks-blue">Location</h4>
                    <p className="text-steelworks-gray">123 Metal Lane</p>
                    <p className="text-steelworks-gray">Steel City, SC 12345</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-display font-bold text-steelworks-blue mb-4">Our Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-steelworks-gray">Monday - Friday</span>
                    <span className="font-medium text-steelworks-blue">8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-steelworks-gray">Saturday</span>
                    <span className="font-medium text-steelworks-blue">9:00 AM - 3:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-steelworks-gray">Sunday</span>
                    <span className="font-medium text-steelworks-blue">Closed</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="border-steelworks-silver/20 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-display font-bold text-steelworks-blue mb-6">Send Us a Message</h3>
                  
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-steelworks-gray mb-1">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full p-3 border border-steelworks-silver/30 rounded-md focus:ring-2 focus:ring-steelworks-blue/30 focus:outline-none transition-all" 
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-steelworks-gray mb-1">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full p-3 border border-steelworks-silver/30 rounded-md focus:ring-2 focus:ring-steelworks-blue/30 focus:outline-none transition-all" 
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-steelworks-gray mb-1">Phone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full p-3 border border-steelworks-silver/30 rounded-md focus:ring-2 focus:ring-steelworks-blue/30 focus:outline-none transition-all" 
                        placeholder="Your Phone Number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-steelworks-gray mb-1">Service Interested In</label>
                      <select 
                        id="service" 
                        className="w-full p-3 border border-steelworks-silver/30 rounded-md focus:ring-2 focus:ring-steelworks-blue/30 focus:outline-none transition-all"
                      >
                        <option value="">Select a Service</option>
                        <option value="fabrication">Custom Fabrication</option>
                        <option value="welding">Welding Services</option>
                        <option value="finishing">Metal Finishing</option>
                        <option value="installation">Installation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-steelworks-gray mb-1">Message</label>
                      <textarea 
                        id="message" 
                        rows={4}
                        className="w-full p-3 border border-steelworks-silver/30 rounded-md focus:ring-2 focus:ring-steelworks-blue/30 focus:outline-none transition-all" 
                        placeholder="Tell us about your project"
                      ></textarea>
                    </div>
                    
                    <Button className="w-full bg-steelworks-blue hover:bg-steelworks-blue/90">
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-steelworks-black text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-display font-bold mb-4">SteelWorks</h3>
              <p className="text-white/70 mb-4">
                Crafting premium steel and iron works with precision and artistry since 2003.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-steelworks-yellow hover:text-steelworks-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-steelworks-yellow hover:text-steelworks-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-steelworks-yellow hover:text-steelworks-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-steelworks-yellow transition-colors">Custom Gates</a></li>
                <li><a href="#" className="text-white/70 hover:text-steelworks-yellow transition-colors">Railings</a></li>
                <li><a href="#" className="text-white/70 hover:text-steelworks-yellow transition-colors">Fences</a></li>
                <li><a href="#" className="text-white/70 hover:text-steelworks-yellow transition-colors">Furniture</a></li>
                <li><a href="#" className="text-white/70 hover:text-steelworks-yellow transition-colors">Architectural Elements</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-steelworks-yellow transition-colors">Custom Fabrication</a></li>
                <li><a href="#" className="text-white/70 hover:text-steelworks-yellow transition-colors">Welding</a></li>
                <li><a href="#" className="text-white/70 hover:text-steelworks-yellow transition-colors">Metal Finishing</a></li>
                <li><a href="#" className="text-white/70 hover:text-steelworks-yellow transition-colors">Installation</a></li>
                <li><a href="#" className="text-white/70 hover:text-steelworks-yellow transition-colors">Repairs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-steelworks-yellow transition-colors">About Us</a></li>
                <li><a href="#" className="text-white/70 hover:text-steelworks-yellow transition-colors">Gallery</a></li>
                <li><a href="#" className="text-white/70 hover:text-steelworks-yellow transition-colors">Testimonials</a></li>
                <li><a href="#" className="text-white/70 hover:text-steelworks-yellow transition-colors">FAQ</a></li>
                <li><a href="#" className="text-white/70 hover:text-steelworks-yellow transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/50 text-sm">© 2023 SteelWorks. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-white/50 text-sm hover:text-white">Privacy Policy</a>
                <a href="#" className="text-white/50 text-sm hover:text-white">Terms of Service</a>
                <a href="#" className="text-white/50 text-sm hover:text-white">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
