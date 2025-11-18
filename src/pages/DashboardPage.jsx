import React from 'react';
import { Plus } from 'lucide-react';

// --- MOCK DATA ---
const MOCK_PROJECTS = [
  { id: 1 }, { id: 2 }, { id: 3 }
];
const MOCK_CLIENTS = [
  { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }
];
const MOCK_CONTACTS = [
  { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
];
const MOCK_SUBSCRIBERS = [
  { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }
];
// --- END MOCK DATA ---

export default function DashboardPage() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome, Admin!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Projects</h3>
                    <p className="text-4xl font-bold text-indigo-600">{MOCK_PROJECTS.length}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Clients</h3>
                    <p className="text-4xl font-bold text-green-600">{MOCK_CLIENTS.length}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">New Contacts</h3>
                    <p className="text-4xl font-bold text-yellow-600">{MOCK_CONTACTS.length}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Subscribers</h3>
                    <p className="text-4xl font-bold text-blue-600">{MOCK_SUBSCRIBERS.length}</p>
                </div>
            </div>
            
            
        </div>
    );
}