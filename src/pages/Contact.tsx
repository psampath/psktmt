
import PageLayout from '@/components/layout/PageLayout';
import { MapPin, Mail, PhoneCall } from 'lucide-react';

const Contact = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80" 
            alt="Steel rolling mill" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Get In <span className="text-gradient-primary">Touch</span>
            </h1>
            <p className="text-xl text-neutral-200 animate-slide-in">
              We're here to answer your questions and help you find the right steel solutions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-12">Contact Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-card flex flex-col items-center">
                <div className="bg-[#003366]/10 p-4 rounded-full mb-4">
                  <MapPin className="text-[#003366]" size={32} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Our Office</h3>
                <p className="text-neutral-600 text-center">
                  123 Steel Road<br />
                  Hyderabad, India
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-card flex flex-col items-center">
                <div className="bg-[#003366]/10 p-4 rounded-full mb-4">
                  <PhoneCall className="text-[#003366]" size={32} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Phone</h3>
                <p className="text-neutral-600 text-center">
                  +91 123-456-7890<br />
                  +91 022-12345678
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-card flex flex-col items-center">
                <div className="bg-[#003366]/10 p-4 rounded-full mb-4">
                  <Mail className="text-[#003366]" size={32} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-neutral-600 text-center">
                  info@psktmt.com<br />
                  sales@psktmt.com
                </p>
              </div>
            </div>
            
            <div className="mt-16 bg-white p-8 rounded-lg shadow-card">
              <h3 className="font-semibold text-xl mb-6 text-[#003366]">Business Hours</h3>
              <div className="max-w-md mx-auto space-y-2 text-neutral-600">
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
      </section>
    </PageLayout>
  );
};

export default Contact;
