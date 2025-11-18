import React, { useState, useEffect } from 'react';
import { Plus, Trash2, MapPin, Pencil, X } from 'lucide-react';

// --- MOCK DATA ---
const MOCK_PROJECTS_DATA = [
  {
    id: 1,
    name: "Modern Villa",
    category: "Residential",
    location: "Miami, FL",
    description: "A stunning modern villa with ocean views and state-of-the-art amenities.",
    imageUrl: "https://placehold.co/600x400/3b82f6/ffffff?text=Modern+Villa",
  },
  {
    id: 2,
    name: "Tech Hub Office",
    category: "Commercial",
    location: "San Francisco, CA",
    description: "A collaborative office space designed for innovation and productivity.",
    imageUrl: "https://placehold.co/600x400/10b981/ffffff?text=Tech+Hub",
  },
  {
    id: 3,
    name: "Cityscape Towers",
    category: "High-Rise",
    location: "New York, NY",
    description: "Luxury apartments redefining urban living with breathtaking city views.",
    imageUrl: "https://placehold.co/600x400/f59e0b/ffffff?text=Cityscape+Towers",
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

// --- Project Form Modal ---
function ProjectFormModal({ isOpen, onClose, onSubmit, project }) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    location: '',
    description: '',
  });

  useEffect(() => {
    if (project) {
      setFormData({
        name: project.name,
        category: project.category,
        location: project.location,
        description: project.description,
      });
    } else {
      setFormData({ name: '', category: '', location: '', description: '' });
    }
  }, [project, isOpen]);

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
        {project ? 'Edit Project' : 'Add New Project'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Project Name
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
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
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
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            {project ? 'Save Changes' : 'Add Project'}
          </button>
        </div>
      </form>
    </Modal>
  );
}

// --- Main ProjectsPage Component ---
export default function ProjectsPage() {
  const [projects, setProjects] = useState(MOCK_PROJECTS_DATA);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null); 

  const handleOpenModal = (project = null) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  const handleProjectSubmit = (formData) => {
    if (currentProject) {
      // Editing
      setProjects(projects.map(p => 
        p.id === currentProject.id ? { ...p, ...formData, imageUrl: p.imageUrl } : p
      ));
    } else {
      // Adding
      const newProject = {
        ...formData,
        id: Date.now(),
        imageUrl: `https://placehold.co/600x400/8b5cf6/ffffff?text=${formData.name.replace(/\s/g, '+')}`,
      };
      setProjects([newProject, ...projects]);
    }
    handleCloseModal();
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Project Management</h1>
        <button 
          onClick={() => handleOpenModal(null)}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" /> Add New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
            <img 
              src={project.imageUrl} 
              alt={project.name}
              className="w-full h-48 object-cover"
              onError={(e) => e.target.src = 'https://placehold.co/600x400/f87171/ffffff?text=Image+Error'}
            />
            <div className="p-6 flex flex-col flex-grow">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.name}</h3>
              <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{project.location}</span>
              </div>
              <p className="text-gray-600 flex-grow mb-6">{project.description}</p>
              
              {/* --- ACTION BUTTONS --- */}
              <div className="mt-auto flex justify-between items-center space-x-3">
                <button 
                  onClick={() => handleOpenModal(project)}
                  className="flex-1 text-center px-4 py-2 font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
                >
                  <Pencil className="w-4 h-4 inline-block mr-2" /> Edit
                </button>
                <button 
                  onClick={() => handleDelete(project.id)}
                  className="flex-1 text-center px-4 py-2 font-medium text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 transition-all duration-300"
                  title="Delete Project"
                >
                  <Trash2 className="w-4 h-4 inline-block mr-2" /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Project Form Modal */}
      <ProjectFormModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onSubmit={handleProjectSubmit} 
        project={currentProject} 
      />
    </div>
  );
}