import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "ISRO AI/ML Geodata Analysis Certificate Course",
      organization: "ISRO",
      description: "Specialized training in AI/ML applications for geodata analysis",
      date: "2024"
    },
    {
      title: "Data Structures and Algorithms using C",
      organization: "Codetantra",
      description: "Comprehensive course completion in DSA fundamentals",
      date: "2023"
    },
    {
      title: "Full Stack Development Course",
      organization: "Professional Certification",
      description: "Complete web development stack including frontend and backend technologies",
      date: "2023"
    },
    {
      title: "Blockchain Technology Course",
      organization: "Professional Certification",
      description: "In-depth study of blockchain fundamentals and applications",
      date: "2023"
    },
    {
      title: "2nd Runner Up - Rapid Innovation Challenge 2024",
      organization: "IEEE Bangalore",
      description: "Award for AI-based Job Portal with integrated chatbot",
      date: "2024"
    },
    {
      title: "Unstop Events and Hackathons",
      organization: "Various Organizations",
      description: "Active participation in multiple competitive coding and innovation events",
      date: "2023-2024"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Achievements</h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Award className="text-purple-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">{cert.title}</h3>
              </div>
              <p className="text-purple-600 font-medium mb-2">{cert.organization}</p>
              <p className="text-gray-600 mb-2">{cert.description}</p>
              <p className="text-sm text-gray-500">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;