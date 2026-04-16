import * as React from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Button } from './Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Hire developer', hasDropdown: true },
    { name: 'Services', hasDropdown: true },
    { name: 'Solutions', hasDropdown: true },
    { name: 'Industries', hasDropdown: true },
    { name: 'Cases', href: '#cases' },
    { name: 'Company', hasDropdown: true },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-[1000] px-4">
      <nav
        className={cn(
          'container-custom max-w-[1280px] h-[72px] bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex items-center justify-between px-6 lg:px-8 transition-all duration-300',
          isScrolled && 'shadow-[0_8px_30px_rgb(0,0,0,0.08)] scale-[0.98]'
        )}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm">
            F
          </div>
          <span className="text-xl font-bold text-[var(--color-text-primary)] whitespace-nowrap">Friday Enterprises</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 2xl:gap-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <a
                href={item.href || '#'}
                className="text-nav text-[var(--color-text-primary)]/80 hover:text-[var(--color-primary)] flex items-center gap-1 transition-colors whitespace-nowrap"
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="w-4 h-4 opacity-50" />}
              </a>
            </div>
          ))}
        </div>

        {/* Right Zone */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0">
          <Button 
            variant="primary" 
            size="sm" 
            className="rounded-full bg-gradient-to-r from-[#0080FE] to-[#00D4FF] border-none px-6 lg:px-8 py-6 h-auto flex items-center gap-2 group shadow-[0_4px_14px_0_rgba(0,128,254,0.39)]"
          >
            <span className="whitespace-nowrap">Online Estimate</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[var(--color-text-primary)] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[1001] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-xl font-bold text-[var(--color-text-primary)]">Friday Enterprises</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--color-text-primary)]">
                <X />
              </button>
            </div>
            <div className="flex flex-col gap-6 overflow-y-auto mb-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href || '#'}
                  className="text-2xl font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-primary)]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="mt-auto flex flex-col gap-4">
              <Button variant="primary" className="w-full rounded-full py-4">Online Estimate</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
