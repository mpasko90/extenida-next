"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PortfolioGrid } from './PortfolioGrid';
import type { PortfolioProject } from '@/data/portfolio';
import { Button } from '@/components/ui/button';

interface PortfolioFilteredGridProps {
  projects: PortfolioProject[];
}

const serviceTypeLabels: Record<PortfolioProject['serviceType'], string> = {
  'house-extension': 'House Extensions',
  'loft-conversion': 'Loft Conversions',
  'kitchen-renovation': 'Kitchen Renovations',
  'bathroom-renovation': 'Bathroom Renovations'
};

export function PortfolioFilteredGrid({ projects }: PortfolioFilteredGridProps) {
  const [activeFilter, setActiveFilter] = useState<PortfolioProject['serviceType'] | 'all'>('all');

  const serviceTypes = Array.from(new Set(projects.map(p => p.serviceType)));
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.serviceType === activeFilter);

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        <Button
          variant={activeFilter === 'all' ? 'default' : 'outline'}
          onClick={() => setActiveFilter('all')}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            activeFilter === 'all'
              ? 'bg-extendia-accent text-white shadow-lg'
              : 'border-extendia-accent text-extendia-accent hover:bg-extendia-accent hover:text-white'
          }`}
        >
          All Projects ({projects.length})
        </Button>
        {serviceTypes.map(serviceType => {
          const count = projects.filter(p => p.serviceType === serviceType).length;
          return (
            <Button
              key={serviceType}
              variant={activeFilter === serviceType ? 'default' : 'outline'}
              onClick={() => setActiveFilter(serviceType)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === serviceType
                  ? 'bg-extendia-accent text-white shadow-lg'
                  : 'border-extendia-accent text-extendia-accent hover:bg-extendia-accent hover:text-white'
              }`}
            >
              {serviceTypeLabels[serviceType]} ({count})
            </Button>
          );
        })}
      </div>

      {/* Results Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={activeFilter}
        className="mb-6"
      >
        <p className="text-gray-600 text-center">
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          {activeFilter !== 'all' && ` in ${serviceTypeLabels[activeFilter as PortfolioProject['serviceType']]}`}
        </p>
      </motion.div>

      {/* Portfolio Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        key={activeFilter}
        transition={{ duration: 0.3 }}
      >
        <PortfolioGrid projects={filteredProjects} />
      </motion.div>
    </div>
  );
}
