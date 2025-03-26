import React from 'react';
import { ChevronDown, Filter, SlidersHorizontal } from 'lucide-react';
import { JobCard } from './JobCard';
import { Sidebar } from './Sidebar';
export function JobListings() {
  return <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg md:text-2xl font-bold">
            Showing 196 jobs based on your profile
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-1">
            Jobs near Delhi-NCR
          </p>
        </div>
        <button className="md:hidden flex items-center space-x-2 bg-white border border-gray-200 px-3 py-2 rounded-lg">
          <SlidersHorizontal size={18} />
          <span>Filters</span>
        </button>
      </div>
      <div className="mt-4 flex flex-col md:flex-row gap-6">
        <div className="hidden md:block md:w-1/3 lg:w-1/4">
          <Sidebar />
        </div>
        <div className="md:w-2/3 lg:w-3/4 space-y-3 md:space-y-4">
          <JobCard logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVWHLV3aR_IG7sXbnYXC2KMKXSDGJ8gqqEXw&s" title="Tech Lead - C++ Developer" company="Aristocrat" location="Noida" isUrgent={false} jobDetails={[{
          type: 'office',
          text: 'Work from Office'
        }, {
          type: 'time',
          text: 'Full Time'
        }, {
          type: 'experience',
          text: 'Any experience'
        }]} />
          <JobCard logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVWHLV3aR_IG7sXbnYXC2KMKXSDGJ8gqqEXw&s" title="Technical Lead" company="Guess Corp Limited" location="Noida" isUrgent={false} jobDetails={[{
          type: 'office',
          text: 'Work from Office'
        }, {
          type: 'time',
          text: 'Full Time'
        }, {
          type: 'experience',
          text: 'Min. 1 year'
        }]} />
          <JobCard logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVWHLV3aR_IG7sXbnYXC2KMKXSDGJ8gqqEXw&s" title="Graphic Designer" company="KPH Technologies Private Limited" location="Noida" isUrgent={true} jobDetails={[]} />
        </div>
      </div>
    </div>;
}