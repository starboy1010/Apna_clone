import React from "react";
import { LayoutGrid, DollarSign, MapPin, FileText } from "lucide-react";

export function JobFilterTabs() {
  return (
    <div className="flex space-x-3 overflow-x-auto pb-2">
      <button className="flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base whitespace-nowrap">
        <LayoutGrid size={16} />
        <span>For You</span>
      </button>
      <button className="flex items-center space-x-2 bg-white border border-gray-200 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base whitespace-nowrap">
        <DollarSign size={16} />
        <span>High Salary</span>
      </button>
      <button className="flex items-center space-x-2 bg-white border border-gray-200 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base whitespace-nowrap">
        <MapPin size={16} />
        <span>Nearby</span>
      </button>
      <button className="flex items-center space-x-2 bg-white border border-gray-200 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base whitespace-nowrap">
        <FileText size={16} />
        <span>New Jobs</span>
      </button>
    </div>
  );
}
