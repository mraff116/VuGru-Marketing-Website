import React from 'react';
import { Camera, Users, HardDrive, Award } from 'lucide-react';

export function Stats() {
  const stats = [
    { label: 'Active Users', value: '10,000+', icon: Users },
    { label: 'Files Delivered', value: '1M+', icon: HardDrive },
    { label: 'Pro Studios', value: '500+', icon: Camera },
    { label: 'Client Satisfaction', value: '99%', icon: Award },
  ];

  return (
    <div className="relative bg-gradient-to-r from-primary-900 via-accent-900 to-secondary-900">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover mix-blend-multiply opacity-20"
          src="https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Background"
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="mt-4">
                <div className="text-4xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-base text-white/80">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}