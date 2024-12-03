import React from 'react';
import { LucideIcon } from 'lucide-react';

interface WorkflowStepProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string;
}

export function WorkflowStep({ title, description, icon: Icon, imageUrl }: WorkflowStepProps) {
  return (
    <div className="relative group">
      <div className="relative bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-3 text-indigo-600 mb-2">
            <Icon className="w-5 h-5" />
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          </div>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}