
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import SectionTitle from '@/components/SectionTitle';
import FAQItem from '@/components/FAQItem';
import { faqs } from '@/data/faqs';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FAQs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-steelworks-blue">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551150441-3f3828204ef0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about our products, services, and processes."
            light={true}
            align="center"
          />
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <FAQItem question={faq.question} answer={faq.answer} />
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-steelworks-lightgray border-steelworks-silver/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-steelworks-blue mb-4">Still Have Questions?</h3>
                    <p className="text-steelworks-gray mb-6">
                      If you couldn't find the answer to your question, please don't hesitate to reach out to our team directly.
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-steelworks-blue/10 flex items-center justify-center text-steelworks-blue shrink-0">
                          <Phone size={18} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-steelworks-blue">Call Us</h4>
                          <p className="text-steelworks-gray">(123) 456-7890</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-steelworks-blue/10 flex items-center justify-center text-steelworks-blue shrink-0">
                          <Mail size={18} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-steelworks-blue">Email Us</h4>
                          <p className="text-steelworks-gray">support@steelworks.com</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-steelworks-blue hover:bg-steelworks-blue/90">
                      Contact Us
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
