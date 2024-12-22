import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="flex justify-between items-center p-4 bg-black text-white border-b border-gray-800">
      <div className="text-xl">Header</div>
      <div>
        <Link to="/login" className={`mx-2 ${location.pathname === '/signup' ? 'text-white' : 'text-gray-400'}`}>
          Signup
        </Link>
        <Link to="/profile" className={`mx-2 ${location.pathname === '/profile' ? 'text-white' : 'text-gray-400'}`}>
          Profile
        </Link>
      </div>
    </header>
  );
};

export default Header;

