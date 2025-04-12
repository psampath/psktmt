
import { QuoteIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  className?: string;
}

const TestimonialCard = ({ quote, author, role, className }: TestimonialCardProps) => {
  return (
    <div className={cn(
      "bg-white p-8 rounded-lg shadow-card border border-neutral-200",
      className
    )}>
      <QuoteIcon className="text-psktmt-500 mb-4" size={32} />
      <p className="text-neutral-700 italic mb-6">{quote}</p>
      <div>
        <h4 className="font-semibold text-lg">{author}</h4>
        <p className="text-neutral-500">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
