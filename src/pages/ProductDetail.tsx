
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, FileText, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageLayout from '@/components/layout/PageLayout';
import { toast } from 'sonner';

// Mock product data
const productData = {
  'fe-500': {
    name: 'PSKTMT Fe 500',
    description: 'High-quality TMT bars with superior tensile strength for general construction purposes.',
    longDescription: 'PSKTMT Fe 500 TMT bars are manufactured using the latest quenching and self-tempering technology to ensure optimal strength and ductility. These bars are ideal for general construction purposes, offering excellent bendability and weldability. With a yield strength of 500 MPa, they provide reliable reinforcement for a wide range of structural applications.',
    image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&q=80',
    price: '₹58,000 per ton',
    applications: ['Residential Buildings', 'Commercial Structures', 'Foundations', 'Columns', 'Beams'],
    specifications: [
      { property: 'Yield Strength', value: '500 MPa minimum' },
      { property: 'Ultimate Tensile Strength', value: '545 MPa minimum' },
      { property: 'Elongation', value: '12% minimum' },
      { property: 'Carbon Content', value: '0.30% maximum' },
      { property: 'Available Diameters', value: '8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm' },
      { property: 'Standard Length', value: '12 meters' },
      { property: 'Bend Test', value: 'Passes 180° bend test' },
      { property: 'Certification', value: 'BIS, ISO 9001:2015' }
    ],
    features: [
      'High tensile strength for better load-bearing capacity',
      'Excellent ductility for better performance',
      'Superior bendability without cracking',
      'Uniform mechanical properties',
      'Strong grip with concrete for better bonding',
      'Cost-effective construction'
    ]
  },
  'fe-500d': {
    name: 'PSKTMT Fe 500D',
    description: 'Ductile TMT bars designed for earthquake-resistant structures with enhanced elongation properties.',
    longDescription: 'PSKTMT Fe 500D TMT bars are specially designed for seismic zones and areas prone to earthquakes. With enhanced elongation properties and superior ductility, these bars provide the necessary flexibility and strength to withstand seismic forces. The "D" designation indicates higher ductility compared to standard Fe 500 bars, making them ideal for critical infrastructure projects.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80',
    price: '₹60,500 per ton',
    applications: ['Seismic Zone Construction', 'Bridges', 'Flyovers', 'High-rise Buildings', 'Industrial Structures'],
    specifications: [
      { property: 'Yield Strength', value: '500 MPa minimum' },
      { property: 'Ultimate Tensile Strength', value: '565 MPa minimum' },
      { property: 'Elongation', value: '16% minimum' },
      { property: 'Carbon Content', value: '0.25% maximum' },
      { property: 'Available Diameters', value: '8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm' },
      { property: 'Standard Length', value: '12 meters' },
      { property: 'Bend Test', value: 'Passes 180° bend test' },
      { property: 'Certification', value: 'BIS, ISO 9001:2015' }
    ],
    features: [
      'Enhanced ductility for earthquake resistance',
      'Higher elongation for better performance during stress',
      'Excellent fatigue strength',
      'Superior weldability for easy fabrication',
      'Higher corrosion resistance',
      'Better fire resistance'
    ]
  },
  'fe-550': {
    name: 'PSKTMT Fe 550',
    description: 'Premium TMT bars offering higher yield strength for heavy-duty construction projects.',
    longDescription: 'PSKTMT Fe 550 TMT bars offer higher yield strength for demanding construction applications. These premium-grade bars are ideal for heavy-duty projects requiring superior strength and durability. With a minimum yield strength of 550 MPa, they allow for optimized designs with reduced steel consumption while maintaining structural integrity.',
    image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&q=80',
    price: '₹62,000 per ton',
    applications: ['Heavy Industrial Structures', 'Dams', 'Power Plants', 'Metro Projects', 'Heavy Traffic Bridges'],
    specifications: [
      { property: 'Yield Strength', value: '550 MPa minimum' },
      { property: 'Ultimate Tensile Strength', value: '600 MPa minimum' },
      { property: 'Elongation', value: '10% minimum' },
      { property: 'Carbon Content', value: '0.30% maximum' },
      { property: 'Available Diameters', value: '10mm, 12mm, 16mm, 20mm, 25mm, 32mm, 36mm' },
      { property: 'Standard Length', value: '12 meters' },
      { property: 'Bend Test', value: 'Passes 180° bend test' },
      { property: 'Certification', value: 'BIS, ISO 9001:2015' }
    ],
    features: [
      'Superior yield strength for demanding applications',
      'Reduced steel consumption with optimized designs',
      'High fatigue resistance',
      'Good weldability despite higher strength',
      'Excellent bend properties',
      'Cost-effective for large projects'
    ]
  },
  'fe-550d': {
    name: 'PSKTMT Fe 550D',
    description: 'Super ductile high-strength TMT bars for critical infrastructure and high-rise buildings.',
    longDescription: 'PSKTMT Fe 550D TMT bars combine high strength with superior ductility, making them ideal for critical infrastructure and high-rise buildings. The "D" designation indicates enhanced ductility, which provides better performance during seismic events. These bars offer the perfect balance of strength and flexibility for modern construction challenges.',
    image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80',
    price: '₹64,500 per ton',
    applications: ['Skyscrapers', 'Critical Infrastructure', 'Seismic Zone High-rises', 'Long-span Bridges', 'Nuclear Facilities'],
    specifications: [
      { property: 'Yield Strength', value: '550 MPa minimum' },
      { property: 'Ultimate Tensile Strength', value: '625 MPa minimum' },
      { property: 'Elongation', value: '14.5% minimum' },
      { property: 'Carbon Content', value: '0.25% maximum' },
      { property: 'Available Diameters', value: '10mm, 12mm, 16mm, 20mm, 25mm, 32mm, 36mm' },
      { property: 'Standard Length', value: '12 meters' },
      { property: 'Bend Test', value: 'Passes 180° bend test' },
      { property: 'Certification', value: 'BIS, ISO 9001:2015' }
    ],
    features: [
      'Combined high strength and ductility',
      'Superior performance during seismic events',
      'Excellent fatigue resistance',
      'Enhanced bendability for complex designs',
      'Optimized for high-rise construction',
      'Long-term durability and reliability'
    ]
  },
  'fe-600': {
    name: 'PSKTMT Fe 600',
    description: 'Ultra-high-strength TMT bars for specialized construction requiring maximum tensile strength.',
    longDescription: 'PSKTMT Fe 600 TMT bars represent our highest strength offering, designed for specialized construction projects with exceptional strength requirements. With a minimum yield strength of 600 MPa, these bars enable significant material optimization and are ideal for structures subjected to extreme loads or where space constraints require maximum strength with minimum steel volume.',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80',
    price: '₹69,000 per ton',
    applications: ['Ultra-high-rise Buildings', 'Heavy Load Structures', 'Special Industrial Projects', 'Defense Structures', 'Space-constrained Designs'],
    specifications: [
      { property: 'Yield Strength', value: '600 MPa minimum' },
      { property: 'Ultimate Tensile Strength', value: '660 MPa minimum' },
      { property: 'Elongation', value: '10% minimum' },
      { property: 'Carbon Content', value: '0.32% maximum' },
      { property: 'Available Diameters', value: '12mm, 16mm, 20mm, 25mm, 32mm, 36mm, 40mm' },
      { property: 'Standard Length', value: '12 meters' },
      { property: 'Bend Test', value: 'Passes 165° bend test' },
      { property: 'Certification', value: 'BIS, ISO 9001:2015' }
    ],
    features: [
      'Ultra-high strength for specialized applications',
      'Maximum material optimization',
      'Suitable for extreme load conditions',
      'Ideal for space-constrained designs',
      'Special manufacturing process for consistent properties',
      'Advanced thermal treatment for strength enhancement'
    ]
  },
  'crs-fe-500': {
    name: 'PSKTMT CRS Fe 500',
    description: 'Corrosion-resistant TMT bars specifically designed for coastal and high-humidity environments.',
    longDescription: 'PSKTMT CRS Fe 500 TMT bars are specifically designed for construction in coastal areas, marine environments, and regions with high humidity or pollution. These Corrosion-Resistant Steel bars contain a special chemical composition that forms a protective layer, significantly reducing corrosion rates and extending the life of structures in aggressive environments.',
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80',
    price: '₹63,000 per ton',
    applications: ['Coastal Construction', 'Marine Structures', 'Chemical Plants', 'Water Treatment Plants', 'Bridges in High-humidity Areas'],
    specifications: [
      { property: 'Yield Strength', value: '500 MPa minimum' },
      { property: 'Ultimate Tensile Strength', value: '545 MPa minimum' },
      { property: 'Elongation', value: '12% minimum' },
      { property: 'Carbon Content', value: '0.30% maximum' },
      { property: 'Chromium Content', value: '0.8% - 1.2%' },
      { property: 'Copper Content', value: '0.25% - 0.40%' },
      { property: 'Available Diameters', value: '8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm' },
      { property: 'Standard Length', value: '12 meters' },
      { property: 'Bend Test', value: 'Passes 180° bend test' },
      { property: 'Certification', value: 'BIS, ISO 9001:2015' }
    ],
    features: [
      'Superior resistance to corrosion in aggressive environments',
      'Extended life of structures in coastal regions',
      'Reduction in maintenance costs',
      'Maintains all strength properties of standard TMT bars',
      'Special chemical composition for durability',
      'Cost-effective long-term solution for marine environments'
    ]
  }
};

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [quantity, setQuantity] = useState(1);
  
  // This would normally fetch the product data based on the ID
  const product = productId && productData[productId as keyof typeof productData];

  if (!product) {
    return (
      <PageLayout>
        <div className="container-custom py-24 text-center">
          <h2 className="text-3xl font-bold mb-6">Product Not Found</h2>
          <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/products">
            <Button className="bg-psktmt-500 hover:bg-psktmt-600">
              Return to Products
            </Button>
          </Link>
        </div>
      </PageLayout>
    );
  }

  const handleQuoteRequest = () => {
    toast.success("Quote request submitted! Our team will contact you soon.");
  };

  const handleDownloadSpec = () => {
    toast.success("Technical specifications PDF downloaded!");
  };

  const handleShare = () => {
    toast.success("Product link copied to clipboard!");
  };

  return (
    <PageLayout>
      <div className="container-custom py-12">
        {/* Back to Products */}
        <Link to="/products" className="inline-flex items-center gap-2 text-psktmt-500 hover:text-psktmt-600 mb-8">
          <ArrowLeft size={18} />
          <span>Back to Products</span>
        </Link>

        {/* Product Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="rounded-lg overflow-hidden shadow-card">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover" 
            />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-neutral-600 mb-6 text-lg">{product.description}</p>
            <p className="text-2xl font-bold text-psktmt-500 mb-6">{product.price}</p>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="text-psktmt-500 shrink-0 mt-1" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col space-y-4">
              <Button 
                onClick={handleQuoteRequest}
                className="bg-psktmt-500 hover:bg-psktmt-600 py-6 text-lg"
              >
                Request a Quote
              </Button>
              
              <div className="flex gap-4">
                <Button 
                  onClick={handleDownloadSpec}
                  variant="outline" 
                  className="flex-1 flex items-center justify-center gap-2"
                >
                  <Download size={18} />
                  Specifications PDF
                </Button>
                
                <Button 
                  onClick={handleShare}
                  variant="outline" 
                  className="px-4"
                >
                  <Share2 size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="grid grid-cols-3 md:w-[600px]">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-8">
            <div className="bg-white p-8 rounded-lg border border-neutral-200">
              <h3 className="text-xl font-bold mb-4">Product Description</h3>
              <p className="text-neutral-700 mb-6">{product.longDescription}</p>
              <h3 className="text-xl font-bold mb-4">Features & Benefits</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-psktmt-500 shrink-0 mt-1" size={18} />
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="specifications" className="mt-8">
            <div className="bg-white p-8 rounded-lg border border-neutral-200">
              <h3 className="text-xl font-bold mb-6">Technical Specifications</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="text-left py-3 px-4 font-semibold text-neutral-800">Property</th>
                      <th className="text-left py-3 px-4 font-semibold text-neutral-800">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.specifications.map((spec, index) => (
                      <tr key={index} className="border-b border-neutral-200">
                        <td className="py-3 px-4 text-neutral-700 font-medium">{spec.property}</td>
                        <td className="py-3 px-4 text-neutral-700">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <FileText className="text-psktmt-500" size={24} />
                <p className="text-neutral-700">
                  Download our comprehensive technical specification sheet for more detailed information.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="applications" className="mt-8">
            <div className="bg-white p-8 rounded-lg border border-neutral-200">
              <h3 className="text-xl font-bold mb-6">Recommended Applications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.applications.map((application, index) => (
                  <div 
                    key={index} 
                    className="border border-neutral-200 rounded-lg p-5 bg-neutral-50 flex items-center gap-3"
                  >
                    <CheckCircle className="text-psktmt-500" size={20} />
                    <span className="font-medium">{application}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-neutral-700">
                Not sure if this product is right for your project? Our technical experts can help you determine the best TMT bars for your specific construction needs.
              </p>
              <Button className="mt-4 bg-psktmt-500 hover:bg-psktmt-600">
                Get Expert Advice
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(productData)
              .filter(([id]) => id !== productId)
              .slice(0, 4)
              .map(([id, product]) => (
                <Link key={id} to={`/products/${id}`} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300">
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-1 group-hover:text-psktmt-500 transition-colors">{product.name}</h3>
                      <p className="text-sm text-neutral-500 mb-2 line-clamp-2">{product.description}</p>
                      <p className="text-psktmt-500 font-semibold text-sm">{product.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProductDetail;
