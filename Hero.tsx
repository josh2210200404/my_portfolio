import React from 'react';
import { ArrowDown } from 'lucide-react';
import SocialButtons from './SocialButtons';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Josh Swaroop Vegi</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            AI/ML Developer | Data Scientist | Full Stack Developer
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
            Passionate about creating innovative solutions using AI, ML, and web technologies. 
            Experienced in developing intelligent systems and user-friendly applications.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-colors"
            >
              View Projects
            </a>
          </div>
          <SocialButtons />
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-purple-600" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;