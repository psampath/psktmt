
import { useState } from 'react';
import { MapPin, Mail, PhoneCall, ChevronDown, Search } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import ContactForm from '@/components/ui/ContactForm';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const Contact = () => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const handleDealerSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Searching for dealers in ${city}, ${state}...`);
  };

  // Mock cities and states for the dealer locator
  const states = ['Maharashtra', 'Gujarat', 'Karnataka', 'Tamil Nadu', 'Delhi'];
  const cities = {
    'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik'],
    'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar'],
    'Karnataka': ['Bengaluru', 'Mysuru', 'Hubli', 'Mangalore', 'Belgaum'],
    'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem'],
    'Delhi': ['New Delhi', 'South Delhi', 'North Delhi', 'East Delhi', 'West Delhi']
  };

  const faqs = [
    {
      question: "What is TMT steel?",
      answer: "TMT (Thermo-Mechanically Treated) steel is a high-strength reinforcement bar manufactured through a specialized heat treatment process. The bars are rapidly quenched (cooled) after hot rolling, creating a hard outer layer and a soft, ductile inner core. This unique structure gives TMT bars their superior strength, ductility, and bendability characteristics."
    },
    {
      question: "How do I choose the right TMT grade for my construction?",
      answer: "The choice of TMT grade depends on various factors including the type of construction, structural requirements, seismic conditions, and environmental exposure. Fe 500 is typically suitable for general construction, while Fe 500D is recommended for earthquake-prone areas due to its higher ductility. For high-rise buildings or heavy infrastructure, Fe 550 or Fe 600 may be more appropriate. For coastal areas, corrosion-resistant TMT bars are recommended. Our technical team can provide personalized recommendations based on your specific project requirements."
    },
    {
      question: "What is the difference between Fe 500 and Fe 500D TMT bars?",
      answer: "Both Fe 500 and Fe 500D have the same minimum yield strength of 500 MPa. However, Fe 500D has higher ductility properties, with greater elongation capability and better performance during bending and rebending tests. The 'D' designation indicates that these bars are particularly suitable for structures in seismic zones due to their ability to withstand earthquake forces better than standard Fe 500 bars."
    },
    {
      question: "How can I verify the authenticity of PSKTMT bars?",
      answer: "All genuine PSKTMT bars carry distinctive roll marks that include the PSKTMT logo, grade designation (e.g., Fe 500D), and production batch number. You can also verify authenticity through our dealer network or by contacting our customer support team with the batch number details. We recommend purchasing only from authorized dealers to ensure you receive genuine products."
    },
    {
      question: "What are the standard lengths and diameters available?",
      answer: "PSKTMT bars are typically available in standard 12-meter lengths. We offer various diameters including 8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm, and 36mm. Custom lengths may be available for large projects upon special request and subject to minimum order quantities."
    },
    {
      question: "Do you provide technical support for large construction projects?",
      answer: "Yes, PSKTMT offers comprehensive technical support for large construction projects. Our team of experts can assist with product selection, quantity estimation, and technical specifications. For major infrastructure or high-rise projects, we can arrange site visits and provide specialized consultation services. Please contact our technical support team for more information."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-neutral-900 text-white">
        <div className="container-custom py-20 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Get in <span className="text-gradient-primary">Touch</span>
            </h1>
            <p className="text-xl text-neutral-200 animate-slide-in">
              We're here to answer your questions and help you find the right steel solutions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="bg-white p-6 rounded-lg shadow-card mb-6">
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="text-psktmt-500 shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Our Office</h3>
                      <p className="text-neutral-600">
                        123 Steel Complex, Industrial Area,<br />
                        Mumbai, Maharashtra, India - 400001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mb-6">
                    <PhoneCall className="text-psktmt-500 shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p className="text-neutral-600">
                        +91 9876543210<br />
                        +91 022-12345678
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-psktmt-500 shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-neutral-600">
                        info@psktmt.com<br />
                        sales@psktmt.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-card">
                  <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
                  <div className="space-y-2 text-neutral-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <div className="bg-white p-8 rounded-lg shadow-card">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-neutral-100">
        <div className="container-custom">
          <SectionHeader 
            title="Find Us" 
            subtitle="Visit our office or manufacturing facility"
          />
          
          <div className="h-[400px] rounded-lg overflow-hidden shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.03900799053!2d72.88118615!3d19.082250949999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PSKTMT Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Dealer Locator Section */}
      <section>
        <div className="container-custom">
          <SectionHeader 
            title="Find a Dealer Near You" 
            subtitle="Locate authorized PSKTMT dealers in your city"
          />
          
          <div className="bg-white p-8 rounded-lg shadow-card">
            <form onSubmit={handleDealerSearch} className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-neutral-700 mb-1">
                    State
                  </label>
                  <Select onValueChange={setState} value={state}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-neutral-700 mb-1">
                    City
                  </label>
                  <Select 
                    onValueChange={setCity} 
                    value={city} 
                    disabled={!state}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={state ? "Select City" : "Select State First"} />
                    </SelectTrigger>
                    <SelectContent>
                      {state && cities[state as keyof typeof cities].map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button 
                type="submit"
                className="bg-psktmt-500 hover:bg-psktmt-600 w-full md:w-auto"
                disabled={!city || !state}
              >
                <Search size={18} className="mr-2" />
                Find Dealers
              </Button>
            </form>

            {/* This would show search results */}
            <div className="mt-10 text-center text-neutral-600">
              <p>Select a state and city to find authorized PSKTMT dealers in your area.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-neutral-100">
        <div className="container-custom">
          <SectionHeader 
            title="Frequently Asked Questions" 
            subtitle="Find answers to commonly asked questions about our products"
          />
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="bg-white mt-8 p-6 rounded-lg shadow-card text-center">
              <h3 className="text-xl font-bold mb-3">Still have questions?</h3>
              <p className="text-neutral-600 mb-6">
                Our customer support team is ready to help you with any additional questions you might have.
              </p>
              <Button className="bg-psktmt-500 hover:bg-psktmt-600">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
