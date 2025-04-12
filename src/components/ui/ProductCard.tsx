
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: string;
}

const ProductCard = ({ id, name, description, image, price }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{name}</h3>
        <p className="text-neutral-600 mb-4 line-clamp-2">{description}</p>
        {price && (
          <p className="text-psktmt-500 font-semibold mb-4">Starting at {price}</p>
        )}
        <Link to={`/products/${id}`}>
          <Button className="w-full flex items-center justify-center gap-2 bg-psktmt-500 hover:bg-psktmt-600">
            View Details <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
