import { cn } from '@/src/lib/utils';
import { Linkedin, Twitter, Github } from 'lucide-react';

export const Footer = () => {
  const sections = [
    {
      title: 'Services',
      links: ['AI Solutions', 'Product Dev', 'Digital & Enterprise', 'Software Engineering'],
    },
    {
      title: 'Solutions',
      links: ['Friday Core', 'AI Agents', 'Business AI'],
    },
    {
      title: 'Industries',
      links: ['Healthcare', 'FinTech', 'LegalTech', 'Retail'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Leadership', 'Insights', 'Careers'],
    },
  ];

  return (
    <footer className="bg-[var(--color-bg-dark)] text-[var(--color-text-inverse)] pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[var(--color-primary)] rounded-md flex items-center justify-center text-white font-bold text-xl">
                F
              </div>
              <span className="text-xl font-bold text-white">Friday Enterprises</span>
            </a>
            <p className="text-white/60 mb-8 max-w-xs">
              Building tomorrow's products, today. AI-first software development for the modern enterprise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-small">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/60 hover:text-[var(--color-primary)] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-small">
            Friday Enterprises © 2026. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/40 hover:text-white text-small transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white text-small transition-colors">Online Estimate</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
