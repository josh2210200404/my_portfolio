import React from 'react';
import { Menu, X, Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
            <a href="#experience" className="text-gray-700 hover:text-purple-600 transition-colors">Experience</a>
            <a href="#projects" className="text-gray-700 hover:text-purple-600 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-700 hover:text-purple-600 transition-colors">Skills</a>
            <a href="#certifications" className="text-gray-700 hover:text-purple-600 transition-colors">Certifications</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/josh2210200404" className="text-gray-700 hover:text-purple-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="http://www.linkedin.com/in/josh-swaroop-3787252b2" className="text-gray-700 hover:text-purple-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:joshswaroop04@gmail.com" className="text-gray-700 hover:text-purple-600 transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://www.instagram.com/vegi_josh_swaroop?igsh=MTdveXI0dW0ycDU1eQ==" className="text-gray-700 hover:text-purple-600 transition-colors">
              <Instagram size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-purple-600">About</a>
            <a href="#experience" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Experience</a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Projects</a>
            <a href="#skills" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Skills</a>
            <a href="#certifications" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Certifications</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;