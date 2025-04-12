
import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import { Award, CheckCircle, Target, Users, Book } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <CheckCircle size={48} className="text-psktmt-500" />,
      title: 'Quality',
      description: 'We maintain the highest standards in our materials and processes, ensuring every product exceeds industry benchmarks.'
    },
    {
      icon: <Users size={48} className="text-psktmt-500" />,
      title: 'Customer Focus',
      description: 'We prioritize understanding and meeting our customers' needs with responsive service and tailored solutions.'
    },
    {
      icon: <Award size={48} className="text-psktmt-500" />,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices at every level of our operation.'
    },
    {
      icon: <Book size={48} className="text-psktmt-500" />,
      title: 'Innovation',
      description: 'We continuously seek advancements in steel manufacturing to deliver products that meet evolving industry needs.'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80" 
            alt="Steel construction" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              About <span className="text-gradient-primary">PSKTMT</span>
            </h1>
            <p className="text-xl text-neutral-200 animate-slide-in">
              Building India's future with steel that lasts generations
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section>
        <div className="container-custom">
          <SectionHeader 
            title="Our Story" 
            subtitle="From humble beginnings to becoming a leading steel manufacturer in India"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4">A PSK Group Venture</h3>
              <p className="text-neutral-700 mb-4">
                PSKTMT was established as a strategic venture of the PSK Group, leveraging over 50 years of excellence and expertise in multiple industries. Founded with a vision to deliver premium quality TMT bars for India's growing infrastructure needs, PSKTMT combines the group's legacy with cutting-edge steel manufacturing technology.
              </p>
              <p className="text-neutral-700 mb-4">
                Our state-of-the-art manufacturing facility is equipped with the latest technology to produce TMT bars that meet international standards. We focus on innovation, quality control, and sustainable production practices to deliver steel products that builders and engineers can rely on for generations.
              </p>
              <p className="text-neutral-700">
                Today, PSKTMT stands as a testament to the PSK Group's commitment to quality and customer satisfaction, providing the backbone for India's infrastructure development through superior steel solutions.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80" 
                alt="Modern steel factory" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values Section */}
      <section className="bg-neutral-100">
        <div className="container-custom">
          <SectionHeader 
            title="Vision and Values" 
            subtitle="Guiding principles that drive everything we do at PSKTMT"
          />
          
          <div className="mb-16 bg-white p-8 rounded-lg shadow-card text-center">
            <Target size={64} className="text-psktmt-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              "To be India's most trusted steel brand, known for quality, innovation, and customer satisfaction, while contributing to the nation's infrastructure development."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-card text-center">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section>
        <div className="container-custom">
          <SectionHeader 
            title="Our Legacy" 
            subtitle="Building on the strong foundation of PSK Group's success"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80" 
                alt="Steel structure" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">PSK Group's Diversified Expertise</h3>
              <p className="text-neutral-700 mb-4">
                As part of the PSK Group, PSKTMT benefits from decades of experience across multiple industries. The group's diversified portfolio spans real estate, hospitality, education, and now steel manufacturing, with a consistent focus on quality and innovation.
              </p>
              <p className="text-neutral-700 mb-4">
                This rich legacy provides PSKTMT with unique insights into the needs of various construction sectors, allowing us to develop steel products that meet the specific requirements of different projects, from residential buildings to major infrastructure developments.
              </p>
              <p className="text-neutral-700">
                Our commitment to continuing the PSK Group's tradition of excellence drives us to constantly improve our products and services, maintaining the trust that customers have placed in the PSK name for over five decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Placeholder) */}
      <section className="bg-neutral-100">
        <div className="container-custom">
          <SectionHeader 
            title="Leadership Team" 
            subtitle="Meet the experts behind PSKTMT's success"
          />
          
          <div className="text-center py-12">
            <p className="text-xl text-neutral-700">
              Our leadership team profiles will be coming soon.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
