// components/Navbar.jsx
"use client"; // This directive makes the component a client component

import Link from 'next/link';
import { useState } from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { auth } from '@/firebaseconfig';
import { signOut } from 'firebase/auth';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = () => {
    signOut(auth);
    router.push('/login');
  };
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">LearnPlatform</Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/courses" className="text-gray-700 hover:text-blue-600">
            Courses
          </Link>
          <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">
            Teaacher Dashboard
          </Link>
          <Link href="/instructors" className="text-gray-700 hover:text-blue-600">
            Instructors
          </Link>
          <Link href="/About" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          {/* Search Bar */}
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Search for courses"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* User Profile and Auth Links */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link href="/login" className="text-gray-700 hover:text-blue-600 hidden md:block">
            Login
          </Link>
          <Link href="/signup" className="text-gray-700 hover:text-blue-600 hidden md:block">
            Register
          </Link>
          <FaUserCircle className="text-2xl text-gray-700 hover:text-blue-600 cursor-pointer" />
          <button onClick={handleLogout} className="bg-indigo-500 text-white px-4 py-2 rounded-lg">LogOut</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-2 p-4">
            
            <Link href="/courses" className="text-gray-700 hover:text-blue-600">
              Courses
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">
              Teacher Dashboard
            </Link>
            <Link href="/instructors" className="text-gray-700 hover:text-blue-600">
              Instructors
            </Link>
            <Link href="/About" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Link href="/login" className="text-gray-700 hover:text-blue-600">
                Login
              </Link>
              <Link href="/signup" className="text-gray-700 hover:text-blue-600">
                Register
              </Link>
              <button onClick={handleLogout} className="bg-indigo-500 text-white px-4 py-2 rounded-lg">LogOut</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
