import React from 'react';
import { Header } from './components/Header';
import { JobFilterTabs } from './components/JobFilterTabs';
import { JobListings } from './components/JobListings';
import { ProfileSection } from './components/ProfileSection';
import { AppPromotion } from './components/AppPromotion';
import { BottomNav } from './components/BottomNav';
export function App() {
  return <div className="w-full min-h-screen bg-gray-50 pb-16 md:pb-0">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-4 md:py-6">
        <JobFilterTabs />
        <div className="mt-4 md:mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <JobListings />
          </div>
          <div className="hidden lg:block space-y-6">
            <ProfileSection />
            <AppPromotion />
          </div>
        </div>
      </main>
      <BottomNav />
    </div>;
}