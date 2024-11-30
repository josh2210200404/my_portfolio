import React from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Bharat Heavy Electricals Limited",
      position: "Web Developer (Intern)",
      period: "May 2024-June 2024",
      description: "Developed a location-based application that retrieves detailed information about any area when provided with its pincode, using APIs and geospatial data.",
      achievements: [
        "Led the development and integration of the Google Maps API to fetch real-time location details based on pincode input, improving accuracy by 30%.",
        "Optimized search algorithms to reduce data retrieval time by 40%, resulting in faster response times for users.",
        "Collaborated in a team to design and implement a user-friendly interface using JavaScript and React, ensuring intuitive navigation and usability."
      ]
    },
    {
      company: "Internpe",
      position: "AI/ML Programming (Intern)",
      period: "June 2024-July-2024",
      description: "Completed an AI/ML Programming Internship, focusing on training machine learning models and optimizing algorithms for improved performance and accuracy.",
      achievements: [
        "Trained and fine-tuned machine learning models for various real-world applications, improving model accuracy by 15% through hyperparameter optimization and feature engineering.",
        "Implemented deep learning algorithms using TensorFlow and PyTorch to solve complex classification and regression problems.",
        "Developed custom neural network architectures for specific use cases, achieving improved performance over baseline models by 20%."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Briefcase className="text-purple-600 mr-3" size={24} />
                <div>
                  <h3 className="text-2xl font-semibold">{exp.company}</h3>
                  <p className="text-purple-600">{exp.position}</p>
                  <p className="text-gray-500">{exp.period}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">{exp.description}</p>
              <div className="space-y-4">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="text-purple-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-600">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;