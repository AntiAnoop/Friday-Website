/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Check, 
  MessageSquare, 
  Shield, 
  Zap, 
  Globe, 
  Mic, 
  BarChart3, 
  Users, 
  Briefcase, 
  Award,
  Star,
  FileText,
  Plus,
  Search,
  Lock,
  Layout,
  Database,
  Plug
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { SectionHeader } from './components/SectionHeader';
import { ServiceCard, AIAgentCard } from './components/Cards';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* 4.1 HERO SECTION */}
        <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white">
          <div className="container-custom relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-gray-100 text-small font-medium mb-8 shadow-sm">
                Faster. Smarter. AI Assistants delivered at speed
              </div>
              <h1 className="text-hero text-[var(--color-text-primary)] mb-8">
                <span className="text-[var(--color-primary)]">AI-First</span> Software Development Company
              </h1>
              <p className="text-body-lg text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto">
                Just tell the Friday Enterprises AI Agent about your project – it will ask questions, gather requirements, and propose a tailored solution
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-20">
                <Button variant="secondary" size="lg" className="rounded-full px-10 border-gray-200 text-[var(--color-text-primary)] hover:bg-gray-50">
                  Schedule a Consultation
                </Button>
                <Button variant="primary" size="lg" className="rounded-full px-10 bg-[var(--color-primary)] shadow-[0_4px_14px_0_rgba(0,128,254,0.39)]">
                  Estimate Project Online
                </Button>
              </div>
              
              {/* Trust Bar */}
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2">
                  <span className="text-[var(--color-text-primary)] font-bold">TechBehemoths</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--color-text-primary)] font-bold">Clutch</span>
                  <div className="flex items-center gap-0.5 text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--color-text-primary)] font-bold">GoodFirms</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--color-text-primary)] font-bold">Sortlist</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--color-text-primary)] font-bold">SelectedFirms</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* Robot Icon */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[60%] left-[15%] lg:left-[20%]"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00D4FF] to-[#0080FE] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  <svg className="absolute -top-8 -right-8 w-12 h-12 text-gray-300 rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>

              {/* Avatar 1 */}
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[25%] right-[15%] lg:right-[20%]"
              >
                <div className="relative">
                  <div className="w-14 h-14 rounded-full border-4 border-white shadow-lg overflow-hidden">
                    <img src="https://picsum.photos/seed/user1/100/100" alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  <svg className="absolute top-1/2 -left-10 w-10 h-10 text-gray-300 -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </div>
              </motion.div>

              {/* Avatar 2 */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[20%] right-[10%] lg:right-[15%]"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden">
                    <img src="https://picsum.photos/seed/user2/100/100" alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  <svg className="absolute -top-8 -left-8 w-12 h-12 text-gray-300 -rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </div>
              </motion.div>

              {/* Time Pill */}
              <motion.div 
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[25%] left-[55%]"
              >
                <div className="relative">
                  <div className="px-4 py-2 bg-white border border-green-400 text-green-600 rounded-full text-small font-medium shadow-sm">
                    It takes 2-3 min
                  </div>
                  <svg className="absolute -top-6 -left-6 w-10 h-10 text-gray-300 rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Subtle Background Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,128,254,0.03)_0%,transparent_70%)] -z-10"></div>
        </section>

        {/* 4.2 AI AGENTS SHOWCASE */}
        <section className="section-padding bg-[var(--color-bg)]">
          <div className="container-custom">
            <SectionHeader
              eyebrow="AI Agents & Pre-built Solutions"
              title={<><span className="text-[var(--color-primary)]">Ready-to-Deploy AI Agents</span> tailored to your business needs</>}
              subtitle="Stop building from scratch. Friday Enterprises ships production-ready AI agents — pre-trained, pre-integrated, and deployable within days."
              align="center"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AIAgentCard
                title="Financial AI Agent"
                metrics={['↓ 60% manual work', '↑ collections', '↑ forecast accuracy']}
                description="AI that handles invoice queries, payment collection, approval routing, and forecast explanations."
                image="https://picsum.photos/seed/finance/800/450"
              />
              <AIAgentCard
                title="Sales AI Agent"
                metrics={['↓ 90% speed-to-lead', '↑ 35% meetings', '↑ CRM hygiene']}
                description="Voice and chat agents that qualify leads, book meetings, write recaps, and sync CRM."
                image="https://picsum.photos/seed/sales/800/450"
              />
              <AIAgentCard
                title="Medical Voice AI"
                metrics={['↓ No-shows', '↑ Scheduling', '↑ Clinician time']}
                description="HIPAA-ready voice agents for patient scheduling, triage, and EHR integration."
                image="https://picsum.photos/seed/medical/800/450"
              />
              <AIAgentCard
                title="Legal Voice AI"
                metrics={['Drafts in <2 hrs', 'Certified in 48 hrs', '↓ 40% cost']}
                description="Compliant voice assistants for deposition capture, transcripts, and exhibit management."
                image="https://picsum.photos/seed/legal/800/450"
              />
              <AIAgentCard
                title="HR Voice AI"
                metrics={['↓ Admin load', '↑ Hiring speed', '↑ Candidate UX']}
                description="Agentic assistants that handle candidate calls, pre-screening, and interview scheduling."
                image="https://picsum.photos/seed/hr/800/450"
              />
              <AIAgentCard
                title="Security Incident AI"
                metrics={['↓ False dispatches', '↓ Time-to-dispatch', '↑ Capacity']}
                description="AI that verifies alarms, triages incidents, dispatches per SOPs, and generates reports."
                image="https://picsum.photos/seed/security/800/450"
              />
            </div>
          </div>
        </section>

        {/* 4.3 BENCHMARKS */}
        <section className="section-padding bg-[var(--color-bg-dark)] text-white overflow-hidden">
          <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="Benchmarks"
                title="AI That Delivers Measurable Impact"
                subtitle="Don't just take our word for it. See what our clients say on Clutch."
                dark
              />
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                {[
                  { num: '7+', label: 'Years in Business', sub: 'Consistent, secure delivery since 2018' },
                  { num: '80+', label: 'Experts On Board', sub: 'AI/ML, Data, Product, DevOps specialists' },
                  { num: '300+', label: 'Projects Delivered', sub: 'From MVPs to enterprise AI platforms' },
                  { num: '15+', label: 'Industries Served', sub: 'Healthcare, FinTech, Legal, Retail & more' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-[52px] font-extrabold text-[var(--color-primary)] leading-none mb-2">{stat.num}</div>
                    <div className="font-bold mb-1">{stat.label}</div>
                    <div className="text-small text-white/50">{stat.sub}</div>
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center gap-4 bg-white p-6 rounded-[var(--radius-md)] text-[var(--color-text-primary)]">
                <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold">Friday Enterprises</div>
                  <div className="text-small text-[var(--color-text-secondary)]">Recognized in 2025 for excellence in AI & ReactJS</div>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              {/* Decorative Geometric Mascot */}
              <div className="w-full max-w-md aspect-square bg-gradient-to-br from-[var(--color-primary)]/20 to-transparent rounded-full flex items-center justify-center relative">
                <div className="w-3/4 h-3/4 bg-[var(--color-primary)]/10 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl rotate-12 flex items-center justify-center">
                    <Zap className="w-24 h-24 text-[var(--color-primary)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4.4 TESTIMONIALS */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeader
              eyebrow="Testimonials"
              title="Trusted by Builders Around the World"
              align="center"
            />
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { quote: "They really understand what we need. Professional, fast, and technically brilliant.", author: "James M.", role: "CTO, FinBridge" },
                { quote: "Friday's AI agents transformed our ops. ROI was visible in week one.", author: "Sarah K.", role: "Head of Growth, MedScale" },
                { quote: "Delivered our MVP in 6 weeks. Exactly what we needed.", author: "David L.", role: "Founder, LegalFlow" },
              ].map((t, i) => (
                <div key={i} className="bg-[var(--color-bg)] p-8 rounded-[var(--radius-lg)] relative">
                  <MessageSquare className="w-12 h-12 text-[var(--color-primary)]/20 absolute top-6 right-6" />
                  <p className="italic text-body-lg mb-8 relative z-10">"{t.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                    <div>
                      <div className="font-bold">{t.author}</div>
                      <div className="text-small text-[var(--color-text-secondary)]">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4.5 PROJECT ESTIMATOR */}
        <section className="section-padding bg-[var(--color-primary-light)]">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto bg-white rounded-[var(--radius-xl)] p-12 shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <SectionHeader
                  eyebrow="Project Estimator"
                  title="Answer a Few Questions. Get a Free Estimate."
                  className="mb-8"
                />
                <div className="grid sm:grid-cols-3 gap-6 mb-10">
                  {[
                    'Estimated launch timeline',
                    'Clear feature breakdown',
                    '15% off your first sprint'
                  ].map((text) => (
                    <div key={text} className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-small font-medium">{text}</span>
                    </div>
                  ))}
                </div>
                <Button variant="primary" size="lg" className="w-full">Get AI Estimate</Button>
              </div>
              <div className="absolute bottom-4 right-4 opacity-20">
                <Zap className="w-32 h-32 text-[var(--color-primary)]" />
              </div>
            </div>
          </div>
        </section>

        {/* 4.6 SERVICES */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeader
              eyebrow="Services & Solutions"
              title={<><span className="text-[var(--color-primary)]">Comprehensive AI Solutions</span> That Accelerate Your Business</>}
              align="center"
            />
            
            <div className="space-y-24">
              {[
                {
                  title: "AI Integrations & Business Process Automation",
                  metric: "Increase efficiency by up to 60%",
                  desc: "Real-time, event-driven AI integrations using Apache Kafka, Airflow, AWS Step Functions. RPA to eliminate manual tasks.",
                  icon: Zap,
                  image: "https://picsum.photos/seed/automation/800/450"
                },
                {
                  title: "Custom AI Application & Service Development",
                  metric: "Reduce time-to-market by 40%",
                  desc: "Scalable AI-driven apps built with Kubernetes, Docker, Python FastAPI, React, and cloud-native deployments on AWS/Azure/GCP.",
                  icon: Layout,
                  image: "https://picsum.photos/seed/dev/800/450",
                  reverse: true
                },
                {
                  title: "Generative AI & LLM Integration",
                  metric: "Up to 50% operational improvement",
                  desc: "Integrate GPT-4, Claude, LLaMA into your workflows. Fine-tuning, RLHF, RAG. Automate content, data extraction, knowledge management.",
                  icon: MessageSquare,
                  image: "https://picsum.photos/seed/genai/800/450"
                },
                {
                  title: "Voice & Multimodal Interfaces",
                  metric: "Boost customer engagement by 70%",
                  desc: "Advanced speech recognition (Whisper), TTS (Azure, ElevenLabs), NLP, and computer vision across voice, text, and visual channels.",
                  icon: Mic,
                  image: "https://picsum.photos/seed/voice/800/450",
                  reverse: true
                }
              ].map((service, i) => (
                <div key={i} className={cn("grid lg:grid-cols-2 gap-16 items-center", service.reverse && "lg:flex-row-reverse")}>
                  <div className={cn(service.reverse && "lg:order-2")}>
                    <div className="inline-block px-4 py-1 bg-[var(--color-primary-light)] text-[var(--color-primary)] rounded-full text-small font-bold mb-6">
                      {service.metric}
                    </div>
                    <h3 className="text-h2 mb-6">{service.title}</h3>
                    <p className="text-body-lg text-[var(--color-text-secondary)] mb-8">{service.desc}</p>
                    <Button variant="ghost">Learn More <ArrowRight className="ml-2 w-4 h-4" /></Button>
                  </div>
                  <div className={cn("relative", service.reverse && "lg:order-1")}>
                    <div className="aspect-video bg-[var(--color-primary-light)] rounded-[var(--radius-lg)] overflow-hidden">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-[var(--color-primary)]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4.7 VOICE TRANSLATION */}
        <section className="section-padding bg-[var(--color-bg-dark)] text-white relative overflow-hidden">
          <div className="container-custom grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <SectionHeader
                eyebrow="Signature Capability"
                title="Real-Time Voice Translation Across 47 Languages"
                subtitle="Our ultra-fast voice translation platform captures speech and translates simultaneously with near-zero latency. Integrates natively with Google Meet, Zoom, and live events."
                dark
              />
              <ul className="space-y-4 mb-10">
                {[
                  'Instantaneous translation across 47 languages',
                  'Ultra-low latency — suited for live presentations',
                  'Scalable to thousands of concurrent users'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[var(--color-primary)] rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="dark-ghost" size="lg">See It in Action</Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[var(--color-primary)]/30 to-transparent rounded-full flex items-center justify-center">
                <Globe className="w-1/2 h-1/2 text-[var(--color-primary)] animate-pulse" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[var(--color-primary)]/5 blur-[100px] -z-10"></div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[var(--color-primary)]/10 blur-[120px]"></div>
        </section>

        {/* 4.8 INDUSTRIES & CASES */}
        <section id="cases" className="section-padding bg-[var(--color-bg)]">
          <div className="container-custom">
            <SectionHeader
              eyebrow="AI Teams"
              title="AI Solutions for the World's Most Complex Industries"
              align="center"
            />
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {['All', 'Artificial Intelligence', 'Healthcare', 'Cybersecurity', 'LegalTech', 'FinTech', 'Retail'].map((tag) => (
                <button
                  key={tag}
                  className={cn(
                    "px-6 py-2 rounded-full text-small font-medium transition-all",
                    tag === 'All' 
                      ? "bg-[var(--color-primary)] text-white" 
                      : "bg-white border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "FinBridge AI Core", cat: "FinTech", desc: "Automated credit scoring and fraud detection for a leading European bank." },
                { title: "MedScale Voice", cat: "Healthcare", desc: "HIPAA-compliant patient triage system reducing call center load by 60%." },
                { title: "LegalFlow Assistant", cat: "LegalTech", desc: "AI-powered deposition analysis and transcript generation for law firms." },
                { title: "RetailX Demand", cat: "Retail", desc: "Inventory forecasting using real-time market signals and historical data." }
              ].map((caseStudy, i) => (
                <div key={i} className="bg-white rounded-[var(--radius-lg)] overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                  <div className="aspect-video bg-gray-100 overflow-hidden">
                    <img src={`https://picsum.photos/seed/case${i}/800/450`} alt={caseStudy.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-8">
                    <span className="text-label text-[var(--color-primary)] mb-2 block">{caseStudy.cat}</span>
                    <h3 className="text-h3 mb-4">{caseStudy.title}</h3>
                    <p className="text-body text-[var(--color-text-secondary)] mb-6">{caseStudy.desc}</p>
                    <a href="#" className="inline-flex items-center text-[var(--color-primary)] font-bold hover:gap-2 transition-all">
                      Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4.9 TEAM CTA */}
        <section className="relative py-32 bg-[var(--color-bg-dark)] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src="https://picsum.photos/seed/team/1920/1080" alt="Team" className="w-full h-full object-cover blur-sm" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-dark)] via-[var(--color-bg-dark)]/80 to-transparent"></div>
          </div>
          <div className="container-custom relative z-10 text-center">
            <h2 className="text-h1 text-white mb-6">Ready to Accelerate Your AI Project?</h2>
            <p className="text-body-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Our expert teams are standing by. Tell us what you need and we'll craft the perfect AI solution for your business.
            </p>
            <Button variant="primary" size="lg">Request Consultation</Button>
          </div>
        </section>

        {/* 4.10 AI COMPONENTS */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeader
              eyebrow="AI Expertise"
              title="Accelerate Development With Our Proven AI Components"
              align="center"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Auth & Security", icon: Lock, desc: "OAuth 2.0, JWT, MFA, AES-256 encryption, and pen-tested APIs." },
                { title: "Business Integrations", icon: Plug, desc: "API-first integrations with Salesforce, HubSpot, Stripe, AWS." },
                { title: "Financial Analytics", icon: BarChart3, desc: "Real-time analytics using Kafka, PyTorch, Apache Spark." },
                { title: "Voice & NLP", icon: Mic, desc: "Whisper ASR, Azure TTS, ElevenLabs, GPT-4 NLP modules." }
              ].map((comp, i) => (
                <ServiceCard
                  key={i}
                  title={comp.title}
                  description={comp.desc}
                  icon={comp.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 4.11 CLIENT LOGOS */}
        <section className="py-20 bg-[var(--color-bg)] overflow-hidden">
          <div className="container-custom mb-12 text-center">
            <span className="text-label text-[var(--color-text-secondary)]">Trusted by Industry Leaders</span>
          </div>
          
          <div className="flex flex-col gap-12">
            <div className="flex whitespace-nowrap animate-marquee-left">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="mx-12 text-2xl font-bold text-[var(--color-text-secondary)]/30 uppercase tracking-widest">
                  Client_{i}_Logo
                </div>
              ))}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i + 8} className="mx-12 text-2xl font-bold text-[var(--color-text-secondary)]/30 uppercase tracking-widest">
                  Client_{i}_Logo
                </div>
              ))}
            </div>
            <div className="flex whitespace-nowrap animate-marquee-right">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="mx-12 text-2xl font-bold text-[var(--color-text-secondary)]/30 uppercase tracking-widest">
                  Partner_{i}_Logo
                </div>
              ))}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i + 8} className="mx-12 text-2xl font-bold text-[var(--color-text-secondary)]/30 uppercase tracking-widest">
                  Partner_{i}_Logo
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4.12 CONTACT FORM */}
        <section id="contact" className="section-padding bg-white">
          <div className="container-custom grid lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader
                eyebrow="Contact Us"
                title="Here's What Happens After You Submit"
              />
              <div className="space-y-8 mb-12">
                {[
                  { num: '1', text: 'We can sign an NDA for complete confidentiality' },
                  { num: '2', text: 'Discuss your project requirements in detail' },
                  { num: '3', text: 'Friday Enterprises experts contact you within 24 hours' },
                  { num: '4', text: 'Receive a comprehensive proposal with estimates' }
                ].map((step) => (
                  <div key={step.num} className="flex gap-6">
                    <div className="text-h2 text-[var(--color-primary)] leading-none">{step.num}</div>
                    <p className="text-body-lg">{step.text}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-[var(--color-bg)] p-6 rounded-[var(--radius-lg)] flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
                  <img src="https://picsum.photos/seed/manager/100/100" alt="Sales Manager" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="font-bold">Alex Rivera</div>
                  <div className="text-small text-[var(--color-text-secondary)] mb-2">Business Development Lead</div>
                  <a href="#" className="text-[var(--color-primary)] font-bold text-small flex items-center gap-1">
                    Schedule a Call <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-bg)] p-8 lg:p-12 rounded-[var(--radius-xl)]">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-small font-bold">Full Name*</label>
                    <input type="text" className="w-full bg-white border border-[var(--color-border)] rounded-[var(--radius-sm)] px-4 py-3 focus:border-[var(--color-primary)] outline-none transition-colors" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-small font-bold">Industry*</label>
                    <select className="w-full bg-white border border-[var(--color-border)] rounded-[var(--radius-sm)] px-4 py-3 focus:border-[var(--color-primary)] outline-none transition-colors" required>
                      <option value="">Select Industry</option>
                      <option value="ai">Artificial Intelligence</option>
                      <option value="fintech">FinTech</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-small font-bold">Email*</label>
                    <input type="email" className="w-full bg-white border border-[var(--color-border)] rounded-[var(--radius-sm)] px-4 py-3 focus:border-[var(--color-primary)] outline-none transition-colors" placeholder="john@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-small font-bold">Phone*</label>
                    <input type="tel" className="w-full bg-white border border-[var(--color-border)] rounded-[var(--radius-sm)] px-4 py-3 focus:border-[var(--color-primary)] outline-none transition-colors" placeholder="+1 (555) 000-0000" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-small font-bold">Project Description</label>
                  <textarea className="w-full bg-white border border-[var(--color-border)] rounded-[var(--radius-sm)] px-4 py-3 focus:border-[var(--color-primary)] outline-none transition-colors min-h-[120px]" placeholder="Tell us about your project..."></textarea>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="privacy" className="w-4 h-4 accent-[var(--color-primary)]" required />
                  <label htmlFor="privacy" className="text-small text-[var(--color-text-secondary)]">
                    I accept the <a href="#" className="text-[var(--color-primary)] hover:underline">Privacy Policy & Terms</a>
                  </label>
                </div>
                <Button variant="primary" size="lg" className="w-full">Send Request</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating AI Button */}
      <div className="fixed bottom-8 right-8 z-[1000] flex items-center gap-3">
        <div className="bg-white rounded-full shadow-lg border border-gray-100 flex items-center gap-3 px-4 py-2 hover:shadow-xl transition-all cursor-pointer group">
          <div className="w-8 h-8 bg-gradient-to-br from-[#00D4FF] to-[#0080FE] rounded-full flex items-center justify-center text-white">
            <MessageSquare className="w-4 h-4" />
          </div>
          <span className="text-small font-bold text-[var(--color-text-primary)]">Ask Friday Enterprises AI</span>
        </div>
      </div>
    </div>
  );
}
