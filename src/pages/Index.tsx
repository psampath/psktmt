
import { Award, Clipboard, Star, Truck, Building2, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/layout/PageLayout';
import StatCard from '@/components/ui/StatCard';
import FeatureCard from '@/components/ui/FeatureCard';
import SectionHeader from '@/components/ui/SectionHeader';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80"
            alt="Steel construction" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              <span className="text-gradient-primary">PSKTMT:</span> Premium TMT Bars for a Stronger Future
            </h1>
            <p className="text-xl text-neutral-200 mb-8 animate-slide-in">
              Building Tomorrow's Foundations with Quality Steel Solutions for All Your Construction Needs
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button className="bg-psktmt-500 hover:bg-psktmt-600 px-8 py-6 text-lg">
                  Explore Products
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-neutral-900 px-8 py-6 text-lg">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-neutral-100 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              value="50+" 
              label="Years of Group Legacy" 
              icon={<Award size={40} />} 
            />
            <StatCard 
              value="100%" 
              label="Quality Assurance" 
              icon={<ShieldCheck size={40} />} 
            />
            <StatCard 
              value="5000+" 
              label="Projects Completed" 
              icon={<Building2 size={40} />} 
            />
            <StatCard 
              value="24/7" 
              label="Customer Support" 
              icon={<Truck size={40} />} 
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div className="container-custom">
          <SectionHeader 
            title="Why Choose PSKTMT Steel?" 
            subtitle="Our steel products stand out with superior quality, durability, and innovation."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Superior Tensile Strength" 
              description="Our TMT bars offer exceptional tensile strength, ensuring stability in all construction conditions."
              icon={<Star size={36} />}
            />
            <FeatureCard 
              title="Corrosion Resistant" 
              description="Advanced manufacturing ensures high corrosion resistance for longer-lasting structures."
              icon={<ShieldCheck size={36} />}
            />
            <FeatureCard 
              title="Earthquake Resistance" 
              description="Engineered for high ductility, our steel provides excellent earthquake resistance."
              icon={<Building2 size={36} />}
            />
            <FeatureCard 
              title="Uniform Properties" 
              description="Consistent quality across all our products ensures reliable performance every time."
              icon={<Clipboard size={36} />}
            />
            <FeatureCard 
              title="Eco-Friendly Production" 
              description="Sustainable manufacturing processes to minimize environmental impact."
              icon={<Truck size={36} />}
            />
            <FeatureCard 
              title="BIS Certified" 
              description="All our products meet Bureau of Indian Standards specifications for quality assurance."
              icon={<Award size={36} />}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Stronger?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Partner with PSKTMT for premium TMT bars that ensure the strength and durability of your construction projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/products">
              <Button variant="secondary" className="px-8 py-6 text-lg bg-white text-psktmt-500 hover:bg-neutral-100">
                View Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-psktmt-500">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <div className="container-custom">
          <SectionHeader 
            title="What Our Clients Say" 
            subtitle="Trust the experience of builders and contractors who rely on PSKTMT steel for their projects."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="PSKTMT steel bars have consistently outperformed competitors in our high-rise projects. The quality is unmatched and their delivery is always on time."
              author="Rajesh Sharma"
              role="Chief Engineer, Horizon Builders"
            />
            <TestimonialCard 
              quote="As a contractor handling government infrastructure projects, I need reliable steel. PSKTMT has been my go-to supplier for their excellent quality control and technical support."
              author="Priya Patel"
              role="Director, Infratech Solutions"
            />
            <TestimonialCard 
              quote="The earthquake resistance of PSKTMT bars gives me peace of mind when building in seismic zones. Their technical team is also incredibly helpful with specifications."
              author="Vikram Singh"
              role="Owner, VS Constructions"
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
