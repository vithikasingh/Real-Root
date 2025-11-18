import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, User, Save, X, LogOut } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: 'John Doe',
    email: 'user@example.com',
    bio: 'Passionate about web development and design',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, USA',
    profilePhoto: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Load user data from localStorage if available
    const savedUserInfo = localStorage.getItem('userInfo');
    if (savedUserInfo) {
      setUserInfo(JSON.parse(savedUserInfo));
    }
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      // Simulate save delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Save to localStorage
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      
      setIsEditing(false);
      setSaving(false);
    } catch (err) {
      console.error('Error saving profile:', err);
      setSaving(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 pt-20 pb-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header Background */}
          <div className="h-32 bg-gradient-to-r from-purple-600 to-purple-700"></div>

          {/* Profile Content */}
          <div className="px-4 sm:px-8 pb-8">
            {/* Profile Photo Section */}
            <div className="relative -mt-16 mb-6 flex flex-col sm:flex-row items-start sm:items-end gap-4">
              <div className="relative">
                {userInfo.profilePhoto ? (
                  <img
                    src={userInfo.profilePhoto}
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                    <User size={64} className="text-white" />
                  </div>
                )}
              </div>

              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  {userInfo.fullName}
                </h1>
                <p className="text-gray-600 text-sm mt-1">Member since 2024</p>
              </div>
            </div>

            {/* Profile Information */}
            <div className="space-y-5 mt-8">
              {/* Email */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center gap-3 text-gray-600 w-full sm:w-auto">
                  <Mail size={20} className="text-purple-600 flex-shrink-0" />
                  <span className="font-medium">Email</span>
                </div>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                  />
                ) : (
                  <p className="flex-1 text-gray-700">{userInfo.email}</p>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center gap-3 text-gray-600 w-full sm:w-auto">
                  <Phone size={20} className="text-purple-600 flex-shrink-0" />
                  <span className="font-medium">Phone</span>
                </div>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={userInfo.phone}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                  />
                ) : (
                  <p className="flex-1 text-gray-700">{userInfo.phone}</p>
                )}
              </div>

              {/* Location */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center gap-3 text-gray-600 w-full sm:w-auto">
                  <MapPin size={20} className="text-purple-600 flex-shrink-0" />
                  <span className="font-medium">Location</span>
                </div>
                {isEditing ? (
                  <input
                    type="text"
                    name="location"
                    value={userInfo.location}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                  />
                ) : (
                  <p className="flex-1 text-gray-700">{userInfo.location}</p>
                )}
              </div>

              {/* Bio */}
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <User size={20} className="text-purple-600 flex-shrink-0" />
                  <span className="font-medium">Bio</span>
                </div>
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={userInfo.bio}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 resize-none"
                  />
                ) : (
                  <p className="text-gray-700">{userInfo.bio}</p>
                )}
              </div>
            </div>

            {/* Edit/Save Buttons */}
            <div className="flex gap-4 mt-8">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
                  >
                    <Save size={20} />
                    {saving ? 'Saving...' : 'Save Changes'}
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                  >
                    <X size={20} />
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Edit Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex-1 flex items-center justify-center gap-2 bg-red-50 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-100 transition-all border border-red-200"
                  >
                    <LogOut size={20} />
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;