import React from 'react';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to streamline your workflow?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Join thousands of creative professionals who trust Vugru to manage their projects and deliver content to clients.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="group relative inline-flex items-center gap-x-2 rounded-full px-8 py-4 text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
              Start your free trial
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="text-lg font-semibold leading-6 text-gray-900 hover:text-indigo-600">
              Schedule a demo <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
        <div className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-indigo-500 to-purple-500 opacity-25" />
      </div>
    </div>
  );
}