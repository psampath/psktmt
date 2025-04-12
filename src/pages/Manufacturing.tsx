
import { CheckCircle, FileCheck, Factory, Truck, Flask, ShieldCheck, BarChart4 } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Manufacturing = () => {
  const manufacturingSteps = [
    {
      number: '01',
      title: 'Raw Material Selection',
      description: 'We carefully select high-quality iron ore, coal, and other raw materials that meet our strict specifications for chemical composition.',
      icon: <FileCheck size={48} className="text-psktmt-500" />
    },
    {
      number: '02',
      title: 'Billet Casting',
      description: 'Molten steel is cast into billets of specific dimensions, ensuring proper chemical composition and structural integrity.',
      icon: <Factory size={48} className="text-psktmt-500" />
    },
    {
      number: '03',
      title: 'Reheating',
      description: 'The billets are reheated in energy-efficient furnaces to achieve the optimal temperature for hot rolling.',
      icon: <Flask size={48} className="text-psktmt-500" />
    },
    {
      number: '04',
      title: 'Hot Rolling',
      description: 'The heated billets are passed through a series of rolling mills to achieve the desired shape and diameter of the TMT bars.',
      icon: <BarChart4 size={48} className="text-psktmt-500" />
    },
    {
      number: '05',
      title: 'Quenching & Self-Tempering',
      description: 'The hot-rolled bars are rapidly cooled with water, creating a hardened outer layer while maintaining a softer core, resulting in the unique TMT structure.',
      icon: <ShieldCheck size={48} className="text-psktmt-500" />
    },
    {
      number: '06',
      title: 'Quality Testing',
      description: 'Each batch undergoes rigorous testing for tensile strength, bendability, elongation, and chemical composition to ensure compliance with standards.',
      icon: <CheckCircle size={48} className="text-psktmt-500" />
    },
    {
      number: '07',
      title: 'Packaging & Dispatch',
      description: 'The approved TMT bars are bundled, labeled, and prepared for efficient transportation to distributors and construction sites.',
      icon: <Truck size={48} className="text-psktmt-500" />
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&q=80" 
            alt="Steel manufacturing" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Our Manufacturing <span className="text-gradient-primary">Process</span>
            </h1>
            <p className="text-xl text-neutral-200 animate-slide-in">
              State-of-the-art technology and rigorous quality control to produce the finest TMT bars
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Process Section */}
      <section>
        <div className="container-custom">
          <SectionHeader 
            title="From Raw Materials to Premium TMT Bars" 
            subtitle="Our comprehensive seven-step manufacturing process ensures the highest quality steel products"
          />
          
          <div className="space-y-16">
            {manufacturingSteps.map((step, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-5 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`lg:col-span-2 flex flex-col items-center ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}>
                  <div className="relative">
                    <div className="bg-psktmt-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                      {step.number}
                    </div>
                    <div className="absolute top-0 left-0 w-16 h-16 rounded-full animate-ping bg-psktmt-500 opacity-20"></div>
                  </div>
                  <div className="text-center lg:text-left">
                    {step.icon}
                    <h3 className="text-2xl font-bold mt-4 mb-2">{step.title}</h3>
                    <p className="text-neutral-600">{step.description}</p>
                  </div>
                </div>
                <div className={`lg:col-span-3 h-64 md:h-80 rounded-lg overflow-hidden shadow-lg ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}>
                  <img
                    src={`https://images.unsplash.com/photo-148${index + 6}718448742-163732cd1544?auto=format&fit=crop&q=80`}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="bg-neutral-100">
        <div className="container-custom">
          <SectionHeader 
            title="Quality Assurance" 
            subtitle="Our rigorous testing and quality control measures ensure every batch of TMT bars meets the highest standards"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Testing Methodology</h3>
              <p className="text-neutral-700 mb-6">
                At PSKTMT, we employ a comprehensive battery of tests to ensure our products meet and exceed national and international standards. Every batch undergoes thorough quality checks before it leaves our factory.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-card">
                  <h4 className="font-bold text-lg mb-2">Physical Testing</h4>
                  <p className="text-neutral-600">
                    We conduct tensile strength tests, bend tests, and rebend tests to ensure our TMT bars can withstand the physical stresses of construction applications.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-card">
                  <h4 className="font-bold text-lg mb-2">Chemical Analysis</h4>
                  <p className="text-neutral-600">
                    Our state-of-the-art laboratory performs detailed chemical analysis to verify the precise composition of carbon, manganese, phosphorus, sulfur, and other elements.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-card">
                  <h4 className="font-bold text-lg mb-2">Microstructure Examination</h4>
                  <p className="text-neutral-600">
                    We analyze the microstructure of our TMT bars to ensure proper formation of the hardened outer layer and ductile core structure.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-card">
              <h3 className="text-2xl font-bold mb-6">Certifications & Standards</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Bureau of Indian Standards (BIS)</AccordionTrigger>
                  <AccordionContent>
                    All our TMT bars comply with IS:1786 standards, ensuring they meet the requirements for yield strength, ultimate tensile strength, and elongation as specified by the Bureau of Indian Standards.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>ISO 9001:2015</AccordionTrigger>
                  <AccordionContent>
                    Our manufacturing facility is ISO 9001:2015 certified, demonstrating our commitment to maintaining consistent quality management systems across all operations.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>ISO 14001:2015</AccordionTrigger>
                  <AccordionContent>
                    We are committed to environmental management and sustainability as evidenced by our ISO 14001:2015 certification, which ensures we minimize our environmental footprint.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>OHSAS 18001</AccordionTrigger>
                  <AccordionContent>
                    Our facility adheres to international occupational health and safety management standards, ensuring a safe working environment for all employees.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section>
        <div className="container-custom">
          <SectionHeader 
            title="Sustainable Manufacturing" 
            subtitle="Our commitment to eco-friendly practices and reducing our environmental footprint"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80" 
                  alt="Sustainable steel production" 
                  className="rounded-lg shadow-lg mb-8"
                />
                <h3 className="text-2xl font-bold mb-4">Going Green in Steel Production</h3>
                <p className="text-neutral-700">
                  At PSKTMT, we believe that sustainable steel production is not just good for the environment but also makes good business sense. Our eco-friendly initiatives have reduced our carbon footprint while maintaining the highest quality standards.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-card border border-neutral-200">
                  <h4 className="text-xl font-bold mb-4">Energy-Efficient Furnaces</h4>
                  <p className="text-neutral-700 mb-4">
                    Our manufacturing facility utilizes energy-efficient furnaces that reduce power consumption by up to 30% compared to conventional furnaces. These advanced systems optimize heating cycles and minimize heat loss.
                  </p>
                  <p className="text-neutral-700">
                    We've also implemented heat recovery systems that capture and reuse waste heat from the production process, further enhancing our energy efficiency.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-card border border-neutral-200">
                  <h4 className="text-xl font-bold mb-4">Water Conservation</h4>
                  <p className="text-neutral-700 mb-4">
                    Our closed-loop water system recycles over 95% of the water used in the quenching process, significantly reducing our freshwater consumption and minimizing wastewater discharge.
                  </p>
                  <p className="text-neutral-700">
                    Advanced water treatment facilities ensure that any water released back into the environment meets or exceeds regulatory standards.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-card border border-neutral-200">
                  <h4 className="text-xl font-bold mb-4">Scrap Recycling</h4>
                  <p className="text-neutral-700 mb-4">
                    We incorporate recycled steel scrap into our production process, reducing the need for virgin raw materials and cutting down on mining-related environmental impacts.
                  </p>
                  <p className="text-neutral-700">
                    Our efficient scrap management system ensures that virtually all steel waste is recovered and reused in the manufacturing process.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-card border border-neutral-200">
                  <h4 className="text-xl font-bold mb-4">Emission Control</h4>
                  <p className="text-neutral-700 mb-4">
                    We've invested in state-of-the-art pollution control equipment, including electrostatic precipitators and bag filters, to minimize airborne emissions from our facility.
                  </p>
                  <p className="text-neutral-700">
                    Regular monitoring ensures that our air quality parameters consistently remain well below the permissible limits set by environmental regulations.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-card border border-neutral-200">
                  <h4 className="text-xl font-bold mb-4">Waste Reduction</h4>
                  <p className="text-neutral-700 mb-4">
                    Our lean manufacturing principles minimize waste generation at every stage of production. We've implemented advanced process control systems that optimize material usage and reduce byproducts.
                  </p>
                  <p className="text-neutral-700">
                    Non-recyclable waste is handled through environmentally responsible disposal methods in strict compliance with regulatory guidelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Gallery Section */}
      <section className="bg-neutral-900 text-white">
        <div className="container-custom">
          <SectionHeader 
            title="Our Manufacturing Facility" 
            subtitle="A glimpse inside our state-of-the-art production plant"
            className="text-white"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 h-80">
              <img 
                src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&q=80" 
                alt="Manufacturing facility" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="h-80">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80" 
                alt="Manufacturing facility" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="h-80">
              <img 
                src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&q=80" 
                alt="Manufacturing facility" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="md:col-span-2 h-80">
              <img 
                src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80" 
                alt="Manufacturing facility" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Manufacturing;
