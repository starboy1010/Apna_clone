import React from 'react';
import { ChevronDown, Filter } from 'lucide-react';
export function Sidebar() {
  return <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-center mb-4">
        <Filter size={18} className="mr-2" />
        <span className="font-medium">Filters</span>
      </div>
      <div className="border-b pb-4 mb-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium">Date posted</h3>
          <ChevronDown size={16} />
        </div>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="radio" name="date" className="mr-2 text-blue-600" checked />
            <span>All</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="date" className="mr-2 text-blue-600" />
            <span>Last 24 hours</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="date" className="mr-2 text-blue-600" />
            <span>Last 3 days</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="date" className="mr-2 text-blue-600" />
            <span>Last 7 days</span>
          </label>
        </div>
      </div>
      <div className="border-b pb-4 mb-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium">Distance</h3>
          <ChevronDown size={16} />
        </div>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="radio" name="distance" className="mr-2 text-blue-600" checked />
            <span>All</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="distance" className="mr-2 text-blue-600" />
            <span>Within 5 km</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="distance" className="mr-2 text-blue-600" />
            <span>Within 10 km</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="distance" className="mr-2 text-blue-600" />
            <span>Within 20 km</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="distance" className="mr-2 text-blue-600" />
            <span>Within 50 km</span>
          </label>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium">Salary</h3>
          <ChevronDown size={16} />
        </div>
      </div>
    </div>;
}