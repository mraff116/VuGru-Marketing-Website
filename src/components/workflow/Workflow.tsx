import React from 'react';
import { MessageSquare, Play, Share2, Clock } from 'lucide-react';
import { WorkflowStep } from './WorkflowStep';

export function Workflow() {
  const steps = [
    {
      title: 'Frame-Accurate Comments',
      description: 'Leave precise feedback directly on specific frames of your video',
      icon: MessageSquare,
      imageUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Real-Time Collaboration',
      description: 'Work together with your team in real-time, anywhere in the world',
      icon: Play,
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Instant Sharing',
      description: 'Share work with clients and get immediate feedback',
      icon: Share2,
      imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Streamlined Review Cycles',
      description: 'Speed up approvals with automated review workflows',
      icon: Clock,
      imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Streamlined Video Review Workflow</h2>
          <p className="mt-4 text-xl text-gray-600">Everything you need for efficient video collaboration</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <WorkflowStep key={step.title} {...step} />
          ))}
        </div>
      </div>
    </div>
  );
}