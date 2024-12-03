import React from 'react';
import { Check } from 'lucide-react';

export function Pricing() {
  const tiers = [
    {
      name: 'Freelancer',
      price: 29,
      features: [
        '50GB Storage',
        'Up to 5 active projects',
        'Basic client portal',
        'Email support',
        'Standard transfer speeds',
      ],
    },
    {
      name: 'Professional',
      price: 79,
      features: [
        '200GB Storage',
        'Unlimited projects',
        'Advanced client portal',
        'Priority support',
        'Enhanced transfer speeds',
        'Custom branding',
      ],
      featured: true,
    },
    {
      name: 'Studio',
      price: 149,
      features: [
        '1TB Storage',
        'Unlimited projects',
        'Premium client portal',
        '24/7 support',
        'Maximum transfer speeds',
        'Custom branding',
        'Team collaboration',
      ],
    },
  ];

  return (
    <div id="pricing" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the perfect plan for your needs
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl p-8 xl:p-10 ${
                tier.featured
                  ? 'bg-indigo-600 ring-indigo-600'
                  : 'bg-white ring-gray-200'
              } ring-1 shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
            >
              <h3 className={`text-lg font-semibold leading-8 ${
                tier.featured ? 'text-white' : 'text-gray-900'
              }`}>
                {tier.name}
              </h3>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className={`text-4xl font-bold tracking-tight ${
                  tier.featured ? 'text-white' : 'text-gray-900'
                }`}>
                  ${tier.price}
                </span>
                <span className={`text-sm font-semibold leading-6 ${
                  tier.featured ? 'text-indigo-100' : 'text-gray-600'
                }`}>
                  /month
                </span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className={`h-6 w-5 flex-none ${
                      tier.featured ? 'text-white' : 'text-indigo-600'
                    }`} />
                    <span className={
                      tier.featured ? 'text-indigo-100' : 'text-gray-600'
                    }>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full rounded-md px-3 py-2 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.featured
                    ? 'bg-white text-indigo-600 hover:bg-indigo-50'
                    : 'bg-indigo-600 text-white hover:bg-indigo-500'
                }`}
              >
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}