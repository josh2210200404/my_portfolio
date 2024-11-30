import React from 'react';
import { Code, Palette, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
              alt="Profile"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate Full Stack Developer with 5 years of experience in creating web applications.
              I specialize in React, Node.js, and modern web technologies.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Code className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
                  <p className="text-gray-600">I write clean, maintainable, and efficient code following best practices.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Palette className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Design Focus</h3>
                  <p className="text-gray-600">I create beautiful and intuitive user interfaces with attention to detail.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Users className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Team Player</h3>
                  <p className="text-gray-600">I excel in collaborative environments and enjoy working in teams.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;