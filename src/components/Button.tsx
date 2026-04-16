import * as React from 'react';
import { cn } from '@/src/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark-ghost' | 'text-link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', ...props }, ref) => {
    const variants = {
      primary: 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] hover:shadow-glow translate-y-0 hover:-translate-y-0.5',
      secondary: 'bg-transparent border-1.5 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary-light)]',
      ghost: 'bg-transparent border-1.5 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary-light)]',
      'dark-ghost': 'border-1.5 border-white/30 text-[var(--color-text-inverse)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]',
      'text-link': 'bg-transparent text-[var(--color-primary)] hover:underline p-0 h-auto',
    };

    const sizes = {
      default: 'px-7 py-3.5 rounded-[var(--radius-sm)]',
      sm: 'px-4 py-2 rounded-[var(--radius-sm)] text-small',
      lg: 'px-8 py-4 rounded-[var(--radius-sm)] text-body-lg',
      icon: 'w-9 h-9 flex items-center justify-center rounded-full',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center text-btn transition-all duration-250 disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          size !== 'icon' && sizes[size as keyof typeof sizes],
          size === 'icon' && sizes.icon,
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
