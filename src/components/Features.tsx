import React from 'react';
import { FileStack, Upload, Share2, Clock, Shield, Users } from 'lucide-react';

export function Features() {
  const features = [
    {
      name: 'Secure File Transfer',
      description: 'Transfer large files securely with end-to-end encryption and customizable access controls.',
      icon: Shield,
    },
    {
      name: 'Client Collaboration',
      description: 'Streamline feedback and approvals with intuitive client collaboration tools.',
      icon: Users,
    },
    {
      name: 'Fast Delivery',
      description: 'Deliver content quickly with our optimized transfer infrastructure.',
      icon: Upload,
    },
    {
      name: 'Project Timeline',
      description: 'Keep projects on track with automated timelines and milestone tracking.',
      icon: Clock,
    },
    {
      name: 'Asset Organization',
      description: 'Organize and categorize your files with smart folders and tags.',
      icon: FileStack,
    },
    {
      name: 'Easy Sharing',
      description: 'Share content with clients through branded, professional galleries.',
      icon: Share2,
    },
  ];

  return (
    <div id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to manage your projects
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Designed specifically for creative professionals, Vugru combines powerful project management with seamless file delivery.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className="absolute -top-3 -left-3">
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-50 rounded-md">
                      <feature.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}