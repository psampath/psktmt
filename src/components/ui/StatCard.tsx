
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
  className?: string;
}

const StatCard = ({ value, label, icon, className }: StatCardProps) => {
  return (
    <div className={cn("stat-card", className)}>
      {icon && <div className="mb-4 text-psktmt-500">{icon}</div>}
      <div className="text-4xl font-bold text-psktmt-500 mb-2">{value}</div>
      <div className="text-neutral-700">{label}</div>
    </div>
  );
};

export default StatCard;
