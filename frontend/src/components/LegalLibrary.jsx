import React from 'react';
import { Scale, Shield, Users, Building2, Briefcase, Heart, ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const LegalLibrary = () => {
  const domains = [
    { 
      title: 'Constitutional Law', 
      description: 'Fundamental rights, state powers, and constitutional amendments.', 
      icon: Scale,
      color: 'blue',
      stats: '4,200+ Documents'
    },
    { 
      title: 'Criminal Justice', 
      description: 'IPC, CrPC, and landmark judgments on bail, trial, and evidence.', 
      icon: Shield,
      color: 'red',
      stats: '8,500+ Cases'
    },
    { 
      title: 'Civil & Property', 
      description: 'Real estate law, succession, contract disputes, and property rights.', 
      icon: Building2,
      color: 'emerald',
      stats: '12,000+ Records'
    },
    { 
      title: 'Family Law', 
      description: 'Marriage, divorce, custody regulations, and personal laws.', 
      icon: Heart,
      color: 'pink',
      stats: '3,100+ Statutes'
    },
    { 
      title: 'Corporate Law', 
      description: 'Companies Act, mergers, acquisitions, and compliance frameworks.', 
      icon: Briefcase,
      color: 'amber',
      stats: '5,800+ Articles'
    },
    { 
      title: 'Labor & Employment', 
      description: 'Industrial relations, worker rights, and employment contracts.', 
      icon: Users,
      color: 'indigo',
      stats: '2,400+ Policies'
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="space-y-4">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
          Knowledge Base
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight">Legal Resource Library</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Comprehensive access to Indian legal corpus, categorized by specialized domains and updated with the latest precedents.
        </p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {domains.map((domain, index) => {
          const Icon = domain.icon;
          return (
            <motion.div 
              key={index}
              variants={item}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 bg-${domain.color}-500/5 rounded-full blur-2xl group-hover:bg-${domain.color}-500/10 transition-colors`} />
              
              <div className="relative space-y-4">
                <div className={`w-12 h-12 rounded-xl bg-${domain.color}-500/10 flex items-center justify-center text-${domain.color}-500`}>
                  <Icon size={24} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{domain.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {domain.description}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground px-2.5 py-1 bg-muted rounded-md">
                    {domain.stats}
                  </span>
                  <button className="flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                    Explore <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-xl font-bold">Request Specialized Data</h3>
          <p className="text-sm text-muted-foreground">Can't find what you're looking for? Our team can index specific legal domains for you.</p>
        </div>
        <button className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-all flex items-center gap-2">
          Contact Research Team <ExternalLink size={18} />
        </button>
      </div>
    </div>
  );
};

export default LegalLibrary;
