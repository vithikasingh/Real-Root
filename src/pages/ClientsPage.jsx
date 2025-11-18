import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Pencil, X } from 'lucide-react';

// --- MOCK DATA ---
const MOCK_CLIENTS_DATA = [
  {
    id: 1,
    name: "Alice Johnson",
    designation: "CEO, TechCorp",
    description: "We've seen a 300% increase in efficiency thanks to their amazing work.",
    imageUrl: "https://placehold.co/200x200/818cf8/ffffff?text=AJ",
  },
  {
    id: 2,
    name: "Bob Smith",
    designation: "Marketing Head, InnovateX",
    description: "Their team understood our vision from day one. Truly exceptional partners.",
    imageUrl: "https://placehold.co/200x200/34d399/ffffff?text=BS",
  },
  {
    id: 3,
    name: "Charlie Lee",
    designation: "Founder, StartUpGrid",
    description: "The go-to firm for anyone serious about scaling their infrastructure.",
    imageUrl: "https://placehold.co/200x200/f59e0b/ffffff?text=CL",
  },
];
// --- END MOCK DATA ---

// --- Reusable Modal Component ---
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/10 bg-opacity-50 z-40 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg z-50 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  );
}

// --- Client Form Modal ---
function ClientFormModal({ isOpen, onClose, onSubmit, client }) {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    description: '',
  });

  useEffect(() => {
    if (client) {
      setFormData({
        name: client.name,
        designation: client.designation,
        description: client.description,
      });
    } else {
      setFormData({ name: '', designation: '', description: '' });
    }
  }, [client, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-2xl font-bold mb-4">
        {client ? 'Edit Client' : 'Add New Client'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Client Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="designation" className="block text-sm font-medium text-gray-700">
            Designation
          </label>
          <input
            type="text"
            name="designation"
            id="designation"
            value={formData.designation}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Testimonial / Description
          </label>
          <textarea
            name="description"
            id="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>
        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            {client ? 'Save Changes' : 'Add Client'}
          </button>
        </div>
      </form>
    </Modal>
  );
}

// --- Main ClientsPage Component ---
export default function ClientsPage() {
  const [clients, setClients] = useState(MOCK_CLIENTS_DATA);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentClient, setCurrentClient] = useState(null);

  const handleOpenModal = (client = null) => {
    setCurrentClient(client);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentClient(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this client?')) {
      setClients(clients.filter(c => c.id !== id));
    }
  };

  const handleClientSubmit = (formData) => {
    if (currentClient) {
      // Editing
      setClients(clients.map(c => 
        c.id === currentClient.id ? { ...c, ...formData, imageUrl: c.imageUrl } : c
      ));
    } else {
      // Adding
      const newClient = {
        ...formData,
        id: Date.now(),
        imageUrl: `https://placehold.co/200x200/a5b4fc/ffffff?text=${formData.name.charAt(0)}`,
      };
      setClients([newClient, ...clients]);
    }
    handleCloseModal();
  };
    
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Client Management</h1>
        <button 
          onClick={() => handleOpenModal(null)}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" /> Add New Client
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clients.map((client, index) => (
          <div key={client.id} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
            <img
              src={client.imageUrl}
              alt={client.name}
              className="w-28 h-28 rounded-full mb-6 border-4 border-white shadow-lg object-cover"
              style={{ borderColor: ['#818cf8', '#34d399', '#f59e0b'][index % 3] }}
              onError={(e) => e.target.src = 'https://placehold.co/200x200/f87171/ffffff?text=Error'}
            />
            <p className="text-gray-600 text-base mb-6 flex-grow">{client.description}</p>
            <div className="w-full border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-gray-900">{client.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{client.designation}</p>
              
              {/* --- ACTION BUTTONS --- */}
              <div className="mt-auto flex justify-between items-center space-x-3">
                <button 
                  onClick={() => handleOpenModal(client)}
                  className="flex-1 text-center px-4 py-2 font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
                  title="Edit Client"
                >
                  <Pencil className="w-4 h-4 inline-block mr-2" /> Edit
                </button>
                <button 
                  onClick={() => handleDelete(client.id)} 
                  className="flex-1 text-center px-4 py-2 font-medium text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 transition-all duration-300"
                  title="Delete Client"
                >
                  <Trash2 className="w-4 h-4 inline-block mr-2" /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Client Form Modal */}
      <ClientFormModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onSubmit={handleClientSubmit} 
        client={currentClient} 
      />
    </div>
  );
}