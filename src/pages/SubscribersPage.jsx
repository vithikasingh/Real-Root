import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';

// --- MOCK DATA ---
const MOCK_SUBSCRIBERS = [
  { id: 1, email: "subscriber1@example.com" },
  { id: 2, email: "subscriber2@example.com" },
  { id: 3, email: "subscriber3@example.com" },
  { id: 4, email: "subscriber4@example.com" },
];
// --- END MOCK DATA ---

export default function SubscribersPage() {
  const [subscribers, setSubscribers] = useState(MOCK_SUBSCRIBERS);
  
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this subscriber?')) {
      setSubscribers(subscribers.filter(s => s.id !== id));
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Subscribed Email Addresses</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email Address
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {subscribers.map((sub) => (
              <tr key={sub.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {sub.id}
                </td>
                <td className="px-6 py-4 whitespace-nowR
ap text-sm text-gray-500">
                  {sub.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => handleDelete(sub.id)} className="text-red-600 hover:text-red-900">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}