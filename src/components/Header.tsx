import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-white via-blue-50 to-white/95 backdrop-blur-md border-b border-gradient-to-r from-blue-200 via-purple-200 to-blue-200 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Brand Name */}
          <div className="font-heading font-bold text-xl bg-gradient-to-r from-primary-600 via-purple-600 to-accent-600 bg-clip-text text-transparent">
            Yosef Abebaw
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 bg-gradient-to-r from-blue-100 via-purple-100 to-blue-100 rounded-full p-2 shadow-inner">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 transform hover:scale-105 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-primary-100 hover:to-purple-100 hover:text-primary-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gradient-to-r from-primary-500 to-purple-500 text-white hover:from-primary-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gradient-to-r from-blue-200 via-purple-200 to-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 rounded-b-xl">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-lg' 
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-primary-100 hover:to-purple-100 hover:text-primary-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/Yosef Abebaw CV all docs.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-3 bg-gradient-to-r from-accent-500 to-orange-500 text-white text-sm font-medium rounded-lg hover:from-accent-600 hover:to-orange-600 transition-all duration-300 w-fit shadow-lg"
              >
                <Download className="w-4 h-4 mr-2" />
                View CV
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;