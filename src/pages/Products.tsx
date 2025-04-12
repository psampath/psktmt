import { useState, useRef } from 'react';
import { Search } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import ProductCard from '@/components/ui/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Parallax } from 'react-scroll-parallax';

// Mock product data
const productData = [
  {
    id: 'fe-500',
    name: 'PSKTMT Fe 500',
    description: 'High-quality TMT bars with superior tensile strength for general construction purposes.',
    image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&q=80',
    price: '₹58,000 per ton',
    category: 'general'
  },
  {
    id: 'fe-500d',
    name: 'PSKTMT Fe 500D',
    description: 'Ductile TMT bars designed for earthquake-resistant structures with enhanced elongation properties.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80',
    price: '₹60,500 per ton',
    category: 'earthquake'
  },
  {
    id: 'fe-550',
    name: 'PSKTMT Fe 550',
    description: 'Premium TMT bars offering higher yield strength for heavy-duty construction projects.',
    image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&q=80',
    price: '₹62,000 per ton',
    category: 'premium'
  },
  {
    id: 'fe-550d',
    name: 'PSKTMT Fe 550D',
    description: 'Super ductile high-strength TMT bars for critical infrastructure and high-rise buildings.',
    image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80',
    price: '₹64,500 per ton',
    category: 'premium'
  },
  {
    id: 'fe-600',
    name: 'PSKTMT Fe 600',
    description: 'Ultra-high-strength TMT bars for specialized construction requiring maximum tensile strength.',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80',
    price: '₹69,000 per ton',
    category: 'specialized'
  },
  {
    id: 'crs-fe-500',
    name: 'PSKTMT CRS Fe 500',
    description: 'Corrosion-resistant TMT bars specifically designed for coastal and high-humidity environments.',
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80',
    price: '₹63,000 per ton',
    category: 'corrosion'
  }
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const heroRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const filteredProducts = productData.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = activeFilter === 'all' || product.category === activeFilter;
    
    return matchesSearch && matchesFilter;
  });

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
        <div className="container-custom py-20 md:py-24 relative z-10">
          <Parallax translateY={[0, -15]} opacity={[1, 0.8]}>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-gradient-primary">Products</span>
              </h1>
              <p className="text-xl text-neutral-200">
                Discover our range of high-quality TMT bars designed for various construction needs.
                <span className="block mt-3 text-sm font-semibold">Prices updated daily</span>
              </p>
            </div>
          </Parallax>
        </div>
      </section>

      {/* Products Listing Section */}
      <section>
        <div className="container-custom">
          <SectionHeader 
            title="TMT Bar Categories" 
            subtitle="Browse our comprehensive range of TMT bars engineered for strength, durability and reliability"
          />

          {/* Search and Filter */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={() => handleFilterChange('all')}
                  variant={activeFilter === 'all' ? 'default' : 'outline'}
                  className={activeFilter === 'all' ? 'bg-psktmt-500 hover:bg-psktmt-600' : ''}
                >
                  All
                </Button>
                <Button
                  onClick={() => handleFilterChange('general')}
                  variant={activeFilter === 'general' ? 'default' : 'outline'}
                  className={activeFilter === 'general' ? 'bg-psktmt-500 hover:bg-psktmt-600' : ''}
                >
                  General
                </Button>
                <Button
                  onClick={() => handleFilterChange('earthquake')}
                  variant={activeFilter === 'earthquake' ? 'default' : 'outline'}
                  className={activeFilter === 'earthquake' ? 'bg-psktmt-500 hover:bg-psktmt-600' : ''}
                >
                  Earthquake Resistant
                </Button>
                <Button
                  onClick={() => handleFilterChange('premium')}
                  variant={activeFilter === 'premium' ? 'default' : 'outline'}
                  className={activeFilter === 'premium' ? 'bg-psktmt-500 hover:bg-psktmt-600' : ''}
                >
                  Premium
                </Button>
                <Button
                  onClick={() => handleFilterChange('specialized')}
                  variant={activeFilter === 'specialized' ? 'default' : 'outline'}
                  className={activeFilter === 'specialized' ? 'bg-psktmt-500 hover:bg-psktmt-600' : ''}
                >
                  Specialized
                </Button>
                <Button
                  onClick={() => handleFilterChange('corrosion')}
                  variant={activeFilter === 'corrosion' ? 'default' : 'outline'}
                  className={activeFilter === 'corrosion' ? 'bg-psktmt-500 hover:bg-psktmt-600' : ''}
                >
                  Corrosion Resistant
                </Button>
              </div>
            </div>
          </div>

          {/* Product Grid with Parallax */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <Parallax 
                  key={product.id}
                  translateY={[20, -20]} 
                  startScroll={200 + (index * 50)}
                  className="parallax-item"
                >
                  <ProductCard {...product} />
                </Parallax>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-neutral-600">No products found matching your criteria.</p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setActiveFilter('all');
                }}
                className="mt-4 bg-psktmt-500 hover:bg-psktmt-600"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Product Information Section */}
      <section className="bg-pskaccent">
        <div className="container-custom">
          <SectionHeader 
            title="Understanding TMT Bars" 
            subtitle="Learn about the technology and benefits of Thermo-Mechanically Treated steel reinforcement bars"
          />
          
          <div className="bg-white p-8 rounded-lg shadow-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Parallax translateY={[10, -10]} startScroll={400}>
                <div>
                  <h3 className="text-2xl font-bold mb-4">What are TMT Bars?</h3>
                  <p className="text-neutral-700 mb-4">
                    Thermo-Mechanically Treated (TMT) bars are high-strength reinforcement bars with excellent weldability, ductility, and bend properties. They are manufactured through a special heat treatment process that creates a strong, tough outer layer while maintaining a softer, more ductile core.
                  </p>
                  <p className="text-neutral-700 mb-4">
                    This unique combination of properties makes TMT bars ideal for construction in seismic zones and structures requiring high tensile strength. PSKTMT bars are manufactured using the latest technology to ensure consistent quality and performance.
                  </p>
                  <h3 className="text-2xl font-bold mb-4">How to Choose the Right TMT Bar</h3>
                  <p className="text-neutral-700">
                    Selecting the appropriate TMT bar depends on your specific construction requirements. Consider factors such as the type of structure, load-bearing needs, environmental conditions, and budget constraints. Our team can help you determine the most suitable TMT grade for your project.
                  </p>
                </div>
              </Parallax>
              
              <Parallax translateY={[20, -15]} startScroll={450}>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Benefits of PSKTMT Bars</h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li className="flex items-start gap-2">
                      <span className="text-psktmt-500 font-bold">•</span>
                      <span>Superior tensile strength for enhanced load-bearing capacity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-psktmt-500 font-bold">•</span>
                      <span>Excellent ductility for better performance during earthquakes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-psktmt-500 font-bold">•</span>
                      <span>High bendability without cracking or breaking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-psktmt-500 font-bold">•</span>
                      <span>Better weldability for efficient construction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-psktmt-500 font-bold">•</span>
                      <span>Uniform properties throughout the cross-section</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-psktmt-500 font-bold">•</span>
                      <span>Corrosion resistance for longer structural life</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-psktmt-500 font-bold">•</span>
                      <span>Cost-effective due to optimized material usage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-psktmt-500 font-bold">•</span>
                      <span>Compliance with BIS and international standards</span>
                    </li>
                  </ul>
                </div>
              </Parallax>
            </div>
          </div>
        </div>
      </section>

      {/* Compare Products Modal (placeholder - would be implemented with state) */}
      <div className="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-4xl">
          <h3 className="text-2xl font-bold mb-4">Compare Products</h3>
          <div className="grid grid-cols-3 gap-4">
            {/* Product comparison would go here */}
          </div>
          <div className="flex justify-end mt-6">
            <Button>Close</Button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-primary text-white">
        <div className="container-custom py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help Selecting the Right Product?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our technical team is available to guide you through our product range and help you find the perfect TMT bars for your specific construction needs.
          </p>
          <Button variant="secondary" className="px-8 py-6 text-lg bg-white text-psktmt-500 hover:bg-neutral-100">
            Request Expert Advice
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Products;
