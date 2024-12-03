import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureHighlightProps {
  title: string;
  description: string;
  icon: LucideIcon;
  isReversed?: boolean;
}

export function FeatureHighlight({ title, description, icon: Icon, isReversed = false }: FeatureHighlightProps) {
  return (
    <div className={`flex flex-col lg:flex-row items-center gap-12 py-24 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
      <div className="flex-1">
        <div className="max-w-xl">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-xl">
            <Icon className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="mt-6 text-3xl font-bold text-gray-900">
            {title}
          </h3>
          <p className="mt-4 text-xl text-gray-600">
            {description}
          </p>
        </div>
      </div>
      <div className="flex-1">
        <div className="aspect-video rounded-xl overflow-hidden bg-gray-50 border border-gray-100 shadow-lg">
          <div className="w-full h-full bg-white" />
        </div>
      </div>
    </div>
  );
}