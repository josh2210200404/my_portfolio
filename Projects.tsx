import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Parking Management',
      description: 'Developed an intelligent parking system using C programming with real-time monitoring and space management capabilities.',
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80',
      technologies: ['C', 'Embedded Systems', 'IoT'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      title: 'Oil Spill Detection System',
      description: 'Created an advanced oil spill detection system using YOLO image segmentation with web interface for monitoring.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
      technologies: ['Python', 'YOLO', 'React', 'Image Processing'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      title: 'AI-Based Job Portal',
      description: 'Award-winning job portal with integrated chatbot for enhanced user navigation and job matching.',
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80',
      technologies: ['React', 'Python', 'AI', 'NLP'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    className="flex items-center text-gray-600 hover:text-purple-600"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveLink}
                    className="flex items-center text-gray-600 hover:text-purple-600"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;