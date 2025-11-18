import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';

// --- MOCK DATA ---
const MOCK_CONTACTS = [
  {
    id: 1,
    name: "David King",
    email: "david.king@example.com",
    mobile: "555-1234",
    city: "New York",
  },
  {
    id: 2,
    name: "Emily White",
    email: "emily.white@example.com",
    mobile: "555-5678",
    city: "Los Angeles",
  },
  {
    id: 3,
    name: "Frank Green",
    email: "frank.green@example.com",
    mobile: "555-8765",
    city: "Chicago",
  },
];
// --- END MOCK DATA ---

export default function ContactsPage() {
  const [contacts, setContacts] = useState(MOCK_CONTACTS);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this contact submission?')) {
      setContacts(contacts.filter(c => c.id !== id));
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Form Submissions</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email Address
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mobile Number
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                City
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {contact.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {contact.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {contact.mobile}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {contact.city}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => handleDelete(contact.id)} className="text-red-600 hover:text-red-900">
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