// components/Profile.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchUserProfile = async () => {
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
      
      if (!userId || !token) {
        navigate('/login');
        return;
      }

      try {
        const response = await fetch(`https://dummyjson.com/users/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        navigate('/login');
      }
    };

    fetchUserProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/login');
  };

  if (!user) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="min-h-[calc(100vh-64px)] p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl mb-8">Profile</h1>
        <div className="space-y-4">
          <div>
            <label className="block mb-1">Full Name :</label>
            <div className="text-gray-400">{`${user.firstName} ${user.lastName}`}</div>
          </div>
          <div>
            <label className="block mb-1">Email :</label>
            <div className="text-gray-400">{user.email}</div>
          </div>
          <div>
            <label className="block mb-1">Password :</label>
            <div className="text-gray-400">{user.password}</div>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="mt-8 bg-white text-black px-6 py-2 rounded hover:bg-gray-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;