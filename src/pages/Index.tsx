import { Award, Clipboard, Star, Truck, Building2, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/layout/PageLayout';
import StatCard from '@/components/ui/StatCard';
import FeatureCard from '@/components/ui/FeatureCard';
import SectionHeader from '@/components/ui/SectionHeader';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
import { useRef } from 'react';

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <PageLayout>
      {/* Hero Section with Parallax */}
      <section className="bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div ref={heroRef}>
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80"
              alt="Steel construction" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="container-custom py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <Parallax translateY={[0, -15]} opacity={[1, 0.8]}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gradient-primary">PSKTMT:</span> Premium TMT Bars for a Stronger Future
              </h1>
            </Parallax>
            <Parallax translateY={[0, -10]} opacity={[1, 0.8]} startScroll={100}>
              <p className="text-xl text-neutral-200 mb-8">
                Strength Built on Trust: Building Tomorrow's Foundations with Quality Steel Solutions
              </p>
            </Parallax>
            <Parallax translateY={[0, -5]} startScroll={200}>
              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button className="bg-psktmt-500 hover:bg-psktmt-600 px-8 py-6 text-lg">
                    Explore Products
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-white text-black hover:bg-white hover:text-[#003366] px-8 py-6 text-lg">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </Parallax>
          </div>
        </div>
      </section>

      {/* PSK Group Introduction */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">Backed by PSK Group</h2>
            <p className="text-lg text-neutral-700 mb-8">
              PSKTMT is a proud venture of PSK Group, a trusted name with over 50 years of excellence in delivering quality and innovation across multiple industries.
            </p>
            <Link to="/about" className="text-psktmt-500 hover:text-psktmt-600 font-semibold flex items-center justify-center">
              Learn More About Our Legacy
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section with Parallax */}
      <section className="bg-pskaccent py-16">
        <div className="container-custom">
          <Parallax translateY={[-10, 10]}>
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
          </Parallax>
        </div>
      </section>

      {/* Features Section with Parallax */}
      <section>
        <div className="container-custom">
          <SectionHeader 
            title="Why Choose PSKTMT Steel?" 
            subtitle="Our steel products stand out with superior quality, durability, and innovation."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Superior Tensile Strength",
                description: "Our TMT bars offer exceptional tensile strength, ensuring stability in all construction conditions.",
                icon: <Star size={36} />,
                delay: 0
              },
              {
                title: "Corrosion Resistant",
                description: "Advanced manufacturing ensures high corrosion resistance for longer-lasting structures.",
                icon: <ShieldCheck size={36} />,
                delay: 100
              },
              {
                title: "Earthquake Resistance",
                description: "Engineered for high ductility, our steel provides excellent earthquake resistance.",
                icon: <Building2 size={36} />,
                delay: 200
              },
              {
                title: "Uniform Properties",
                description: "Consistent quality across all our products ensures reliable performance every time.",
                icon: <Clipboard size={36} />,
                delay: 300
              },
              {
                title: "Eco-Friendly Production",
                description: "Sustainable manufacturing processes to minimize environmental impact.",
                icon: <Truck size={36} />,
                delay: 400
              },
              {
                title: "BIS Certified",
                description: "All our products meet Bureau of Indian Standards specifications for quality assurance.",
                icon: <Award size={36} />,
                delay: 500
              }
            ].map((feature, index) => (
              <Parallax key={index} translateY={[10, -10]} startScroll={300 + feature.delay} className="parallax-item">
                <FeatureCard 
                  title={feature.title} 
                  description={feature.description}
                  icon={feature.icon}
                />
              </Parallax>
            ))}
          </div>
        </div>
      </section>

      {/* Product Teaser */}
      <section className="bg-neutral-100">
        <div className="container-custom">
          <SectionHeader 
            title="Our Featured Products" 
            subtitle="Discover our premium range of TMT bars for various construction needs"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Parallax translateY={[10, -5]} startScroll={400} className="parallax-item">
              <div className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&q=80" 
                    alt="PSKTMT Fe 500" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">PSKTMT Fe 500</h3>
                  <p className="text-neutral-600 mb-4">High-quality TMT bars with superior tensile strength for general construction purposes.</p>
                  <Link to="/products/fe-500">
                    <Button className="w-full bg-psktmt-500 hover:bg-psktmt-600">View Details</Button>
                  </Link>
                </div>
              </div>
            </Parallax>
            
            <Parallax translateY={[15, -7]} startScroll={450} className="parallax-item">
              <div className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80" 
                    alt="PSKTMT Fe 550D" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">PSKTMT Fe 550D</h3>
                  <p className="text-neutral-600 mb-4">Super ductile high-strength TMT bars for critical infrastructure and high-rise buildings.</p>
                  <Link to="/products/fe-550d">
                    <Button className="w-full bg-psktmt-500 hover:bg-psktmt-600">View Details</Button>
                  </Link>
                </div>
              </div>
            </Parallax>
            
            <Parallax translateY={[20, -10]} startScroll={500} className="parallax-item">
              <div className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80" 
                    alt="PSKTMT CRS Fe 500" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">PSKTMT CRS Fe 500</h3>
                  <p className="text-neutral-600 mb-4">Corrosion-resistant TMT bars specifically designed for coastal and high-humidity environments.</p>
                  <Link to="/products/crs-fe-500">
                    <Button className="w-full bg-psktmt-500 hover:bg-psktmt-600">View Details</Button>
                  </Link>
                </div>
              </div>
            </Parallax>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products">
              <Button className="bg-psktmt-500 hover:bg-psktmt-600 px-8 py-6 text-lg">
                See All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section with Parallax Background */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <Parallax translateY={[-20, 20]} className="h-full">
            <div className="bg-gradient-primary w-full h-[120%]"></div>
          </Parallax>
        </div>
        <div className="container-custom text-center text-white relative z-10">
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
            <Parallax translateY={[15, -15]} startScroll={700} className="parallax-item">
              <TestimonialCard 
                quote="PSKTMT steel bars have consistently outperformed competitors in our high-rise projects. The quality is unmatched and their delivery is always on time."
                author="Rajesh Sharma"
                role="Chief Engineer, Horizon Builders"
              />
            </Parallax>
            <Parallax translateY={[25, -20]} startScroll={750} className="parallax-item">
              <TestimonialCard 
                quote="As a contractor handling government infrastructure projects, I need reliable steel. PSKTMT has been my go-to supplier for their excellent quality control and technical support."
                author="Priya Patel"
                role="Director, Infratech Solutions"
              />
            </Parallax>
            <Parallax translateY={[35, -25]} startScroll={800} className="parallax-item">
              <TestimonialCard 
                quote="The earthquake resistance of PSKTMT bars gives me peace of mind when building in seismic zones. Their technical team is also incredibly helpful with specifications."
                author="Vikram Singh"
                role="Owner, VS Constructions"
              />
            </Parallax>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
