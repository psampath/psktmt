
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader = ({ 
  title, 
  subtitle, 
  centered = true,
  className 
}: SectionHeaderProps) => {
  return (
    <div className={cn(
      centered ? "text-center mx-auto" : "", 
      "max-w-3xl mb-12",
      className
    )}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="text-neutral-600 text-lg">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
