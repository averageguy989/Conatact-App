import React from 'react';

function HomeHeader() {
  return (
    <div className="flex items-start justify-between pb-10 pt-5">
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-sans text-gray-800 flex items-center gap-3 justify-start">
          Contact List <span className="text-emerald-500">📇</span>
        </h1>
        <p className="text-left text-gray-500">
          Manage your contacts with style.
        </p>
      </div>
    </div>
  );
}

export default HomeHeader;

