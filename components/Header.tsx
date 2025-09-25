"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-9999">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-blue-600 h-10 w-10 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div className="text-xl font-bold text-gray-800">
              Amana Transportation
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#map"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Live Map
            </a>
            <a
              href="#schedule"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Schedule
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a
                href="#home"
                className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#map"
                className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Live Map
              </a>
              <a
                href="#schedule"
                className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Schedule
              </a>
              <a
                href="#contact"
                className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
