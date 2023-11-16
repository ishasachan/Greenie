export default function LoadingSkeleton() {
  return (
    <>
      <div className="container mx-auto p-8 bg-white shadow-md rounded-md">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        />
        <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-md text-center">
          <thead>
            <tr className="bg-gray-200 text-center">
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Creation Date</th>
            </tr>
          </thead>
          </table>
        </div>
      </div>

      <div className="container mx-auto px-8 pb-8 bg-white shadow-md rounded-md">
        <div className="animate-pulse">
          <div className="bg-gray-200 h-8 w-full mb-4"></div>
          <div className="bg-gray-200 h-8 w-full mb-4"></div>
          <div className="bg-gray-200 h-8 w-full mb-4"></div>
          <div className="bg-gray-200 h-8 w-full mb-4"></div>
          <div className="bg-gray-200 h-8 w-full mb-4"></div>
          <div className="bg-gray-200 h-8 w-full mb-4"></div>
          <div className="bg-gray-200 h-8 w-full mb-4"></div>
        </div>
      </div>
    </>
  );
};
