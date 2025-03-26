import React from 'react';
export function ProfileSection() {
  return <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
        <img src="http://media.moddb.com/images/groups/1/37/36085/Unknown_person.jpg" alt="Profile" className="w-full h-full object-cover" />
      </div>
      <h2 className="mt-4 text-xl font-semibold">Pratiyush Sharma</h2>
      <p className="text-gray-600">Software Developer</p>
      <p className="text-gray-500 text-sm mt-1">
        ABCD Technology Private Limited
      </p>
      <button className="mt-4 w-full border border-green-600 text-green-600 py-2 px-4 rounded hover:bg-green-50 transition-colors">
        Update profile
      </button>
    </div>;
}