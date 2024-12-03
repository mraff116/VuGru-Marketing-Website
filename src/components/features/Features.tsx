import React from 'react';
import { MessageSquare, Users, Zap, Shield } from 'lucide-react';
import { FeatureHighlight } from './FeatureHighlight';

export function Features() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeatureHighlight
          title="Frame-Accurate Comments"
          description="Leave precise feedback directly on specific frames. No more confusing timecodes or lengthy email threads."
          icon={MessageSquare}
        />
        <FeatureHighlight
          title="Real-Time Collaboration"
          description="Work together with your team in real-time. See who's viewing and get instant notifications."
          icon={Users}
          isReversed
        />
        <FeatureHighlight
          title="Lightning-Fast Playback"
          description="Stream 4K+ footage instantly with our adaptive playback technology."
          icon={Zap}
        />
        <FeatureHighlight
          title="Enterprise-Grade Security"
          description="Keep your content secure with SOC 2 Type 2 compliance and end-to-end encryption."
          icon={Shield}
          isReversed
        />
      </div>
    </div>
  );
}