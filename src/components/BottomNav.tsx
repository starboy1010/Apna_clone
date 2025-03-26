import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
export function BottomNav() {
  return <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden">
      <div className="flex justify-around items-center h-16">
        <button className="flex flex-col items-center justify-center space-y-1">
          <Briefcase size={20} className="text-blue-600" />
          <span className="text-xs text-blue-600">Jobs</span>
        </button>
        <button className="flex flex-col items-center justify-center space-y-1">
          <GraduationCap size={20} className="text-gray-600" />
          <span className="text-xs text-gray-600">Degree</span>
        </button>
      </div>
    </div>;
}