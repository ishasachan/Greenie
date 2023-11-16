"use client"

import { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingSkeleton from '../components/LoadingSkeleton';

export default function UserTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get('/api/users');
        console.log(response.data);
        setUserData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  
    fetchUserData();
  }, []);

  // Filter user based on search term
  const filteredUsers = userData.filter((user) =>
    Object.values(user).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Function to handle click on user
  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const generateReport = (userId) => {
    console.log(`Generating report for user with ID: ${userId}`);
  };

  return (
    <div>
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
    <div className="container mx-auto p-8 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6">View Users</h2>
      <input
        type="text"
        placeholder="Search users..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        onChange={(e) => setSearchTerm(e.target.value)}
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
          
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100 cursor-pointer" onClick={() => handleUserClick(user)}>
                <td className="px-4 py-2">{user.username}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.phone}</td>
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for generating report */}
      {selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Generate Report</h2>
            <p>{`Generate report for ${selectedUser.username}`}</p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4"
              onClick={() => generateReport(selectedUser.id)}
            >
              Generate
            </button>
            <button className="ml-4" onClick={() => setSelectedUser(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    )}
    </div>
  );
}