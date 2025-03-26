import React from 'react';
import { Star } from 'lucide-react';
export function AppPromotion() {
  return <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-purple-700 font-semibold text-lg">
        Download Apna app
      </h3>
      <ul className="mt-4 space-y-2">
        <li className="flex items-start">
          <span className="text-purple-700 mr-2">•</span>
          <span>Unlimited job applications</span>
        </li>
        <li className="flex items-start">
          <span className="text-purple-700 mr-2">•</span>
          <span>Connect with HRs directly</span>
        </li>
        <li className="flex items-start">
          <span className="text-purple-700 mr-2">•</span>
          <span>Track your applications</span>
        </li>
      </ul>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center">
          <Star size={20} className="text-yellow-400 fill-yellow-400" />
          <span className="ml-1 font-semibold text-lg">4.4</span>
        </div>
        <div className="w-32">
          <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" alt="App mockup" className="w-full" />
        </div>
      </div>
    </div>;
}