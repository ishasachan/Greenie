import React from 'react';

const DashboardCard = ({ title, value, icon: Icon, color }) => {
  return (
    <div className={`bg-white mr-5 mb-5 rounded-lg shadow-md p-6 flex items-center justify-between ${color} sm:w-full md:w-1/2 lg:w-1/4`}>
      <div className="flex items-center">
        <div className="mr-4 flex-shrink-0">
          {Icon && (
            <div className="rounded-full border border-green-500 bg-green-100 p-2">
              <Icon className="h-8 w-8 text-green-500" />
            </div>
          )}
        </div>
        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <h3 className="text-lg font-semibold">{value}</h3>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
