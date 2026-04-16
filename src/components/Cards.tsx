import * as React from 'react';
import { cn } from '@/src/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  metrics?: string[];
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, metrics }) => {
  return (
    <div className="bg-white border border-[var(--color-border)] rounded-[var(--radius-lg)] p-8 shadow-sm hover:shadow-lg hover:border-[var(--color-primary)] hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors">
        <Icon className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-h3 mb-4">{title}</h3>
      <p className="text-body text-[var(--color-text-secondary)] mb-6">{description}</p>
      {metrics && (
        <div className="flex flex-wrap gap-2">
          {metrics.map((metric) => (
            <span key={metric} className="text-small px-3 py-1 bg-[var(--color-bg)] rounded-full text-[var(--color-primary)] font-medium">
              {metric}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

interface AIAgentCardProps {
  title: string;
  description: string;
  metrics: string[];
  image?: string;
}

export const AIAgentCard: React.FC<AIAgentCardProps> = ({ title, description, metrics, image }) => {
  return (
    <div className="bg-[#0D1A3A] border border-[var(--color-primary)]/30 rounded-[var(--radius-lg)] overflow-hidden hover:border-[var(--color-primary)] hover:shadow-glow transition-all duration-300">
      {image && (
        <div className="aspect-video bg-white/5 flex items-center justify-center overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
        </div>
      )}
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {metrics.map((metric) => (
            <span key={metric} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-[var(--color-primary)]/20 text-[var(--color-primary)] rounded-full font-bold">
              {metric}
            </span>
          ))}
        </div>
        <h3 className="text-h3 text-white mb-4">{title}</h3>
        <p className="text-body text-white/60">{description}</p>
      </div>
    </div>
  );
};
