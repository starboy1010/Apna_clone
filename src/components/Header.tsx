import React, { useState } from 'react';
import { ChevronDown, Search, Menu } from 'lucide-react';
export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const handleDropdownHover = (menu: string) => {
    setActiveDropdown(menu);
  };
  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };
  return <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 md:py-3">
          <div className="flex items-center justify-between md:hidden mb-2">
            <button className="p-1">
              <Menu size={24} />
            </button>
            <div className="text-purple-900 font-bold text-2xl">apna</div>
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-2 border-gray-300">
              <img src="http://media.moddb.com/images/groups/1/37/36085/Unknown_person.jpg" alt="Profile" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="hidden md:flex items-center space-x-8">
              <div className="text-purple-900 font-bold text-2xl">apna</div>
              <div className="flex items-center space-x-6">
                <div className="relative" onMouseEnter={() => handleDropdownHover('jobs')} onMouseLeave={handleDropdownLeave}>
                  <button className="flex items-center space-x-1 hover:text-blue-600">
                    <span>Jobs</span>
                    <ChevronDown size={16} className={`transform transition-transform duration-200 ${activeDropdown === 'jobs' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === 'jobs' && <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                      <div className="px-4 py-2 hover:bg-green-400">
                        Jobs For You
                      </div>
                      <div className="px-4 py-2 hover:bg-green-400">
                        Work From Home Jobs
                      </div>
                      <div className="px-4 py-2 hover:bg-green-400">
                        Part Time Jobs
                      </div>
                      <div className="px-4 py-2 hover:bg-green-400">
                        Freshers Jobs
                      </div>
                      <div className="px-4 py-2 hover:bg-green-400">
                        Jobs for women
                      </div>
                      <div className="px-4 py-2 hover:bg-green-400">
                        Full Time Jobs
                      </div>
                      <div className="px-4 py-2 hover:bg-green-400">
                        Night Shift Jobs
                      </div>
                    </div>}
                </div>
                <div className="relative" onMouseEnter={() => handleDropdownHover('career')} onMouseLeave={handleDropdownLeave}>
                  <button className="flex items-center space-x-1 hover:text-blue-600">
                    <span>Career Compass</span>
                    <ChevronDown size={16} className={`transform transition-transform duration-200 ${activeDropdown === 'career' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === 'career' && <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                      <div className="px-4 py-2 hover:bg-green-400">
                        Jobs By City
                      </div>
                      <div className="px-4 py-2 hover:bg-green-400">
                        Jobs By Department
                      </div>
                      <div className="px-4 py-2 hover:bg-green-400">
                        Jobs By Company
                      </div>
                      <div className="px-4 py-2 hover:bg-green-400">
                        Jobs By Qualification
                      </div>
                      <div className="px-4 py-2 hover:bg-green-400">Others</div>
                    </div>}
                </div>
                <button className="hover:text-blue-600">Contests</button>
                <button className="hover:text-blue-600">Degree</button>
              </div>
            </div>
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <div className="relative flex-1 md:flex-none">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input type="text" placeholder="Search jobs by title, company or skill" className="w-full md:w-[350px] bg-gray-100 rounded-md pl-10 pr-4 py-2 focus:outline-none text-sm md:text-base" />
              </div>
              <div className="hidden md:block h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-2 border-gray-300">
                <img src="http://media.moddb.com/images/groups/1/37/36085/Unknown_person.jpg" alt="Profile" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </header>
      {activeDropdown && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={handleDropdownLeave} />}
    </>;
}