import React from 'react';
import { MapPin, Building, Clock, Briefcase, ChevronRight, Flame } from 'lucide-react';
type JobDetailType = {
  type: 'office' | 'time' | 'experience';
  text: string;
};
type JobCardProps = {
  logo: string;
  title: string;
  company: string;
  location: string;
  isUrgent: boolean;
  jobDetails: JobDetailType[];
};
export function JobCard({
  logo,
  title,
  company,
  location,
  isUrgent,
  jobDetails
}: JobCardProps) {
  return <div className="bg-white rounded-lg border border-gray-200 p-3 md:p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between">
        <div className="flex space-x-3 md:space-x-4">
          <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
            <img src={logo} alt={company} className="w-full h-full object-contain" onError={e => {
            const target = e.target as HTMLImageElement;
            target.src = `https://via.placeholder.com/48x48?text=${company.charAt(0)}`;
          }} />
          </div>
          <div>
            <h3 className="font-semibold text-base md:text-lg">{title}</h3>
            <p className="text-gray-600 text-sm md:text-base">{company}</p>
            <div className="flex items-center mt-1 text-gray-500">
              <MapPin size={14} className="mr-1" />
              <span className="text-xs md:text-sm">{location}</span>
            </div>
            <div className="flex items-center mt-1 text-gray-500">
              <span className="text-xs md:text-sm">Not disclosed</span>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3 mt-2 md:mt-3">
              {isUrgent && <div className="flex items-center bg-orange-50 text-orange-600 px-2 py-1 rounded text-xs md:text-sm">
                  <Flame size={12} className="mr-1" />
                  <span>Urgently hiring</span>
                </div>}
              {jobDetails.map((detail, index) => {
              let Icon = Building;
              if (detail.type === 'time') Icon = Clock;
              if (detail.type === 'experience') Icon = Briefcase;
              return <div key={index} className="flex items-center bg-gray-100 px-2 py-1 rounded text-xs md:text-sm text-gray-600">
                    <Icon size={12} className="mr-1" />
                    <span>{detail.text}</span>
                  </div>;
            })}
            </div>
          </div>
        </div>
        <div>
          <ChevronRight className="text-green-600" size={20} />
        </div>
      </div>
    </div>;
}