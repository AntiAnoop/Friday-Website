import * as React from 'react';
import { cn } from '@/src/lib/utils';

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  dark?: boolean;
}

export const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
  dark = false,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        'mb-12 max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      <span className="text-label text-[var(--color-primary)] mb-4 block">
        {eyebrow}
      </span>
      <h2
        className={cn(
          'text-h1 mb-6',
          dark ? 'text-[var(--color-text-inverse)]' : 'text-[var(--color-text-primary)]'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-body-lg',
            dark ? 'text-white/70' : 'text-[var(--color-text-secondary)]'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
