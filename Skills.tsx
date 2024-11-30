import React from 'react';

const Skills = () => {
  const skills = {
    'Programming Languages': [
      { name: 'Python', level: 90 },
      { name: 'C', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'JavaScript', level: 85 }
    ],
    'AI & ML': [
      { name: 'Machine Learning', level: 90 },
      { name: 'Deep Learning', level: 85 },
      { name: 'Computer Vision', level: 80 },
      { name: 'NLP', level: 75 }
    ],
    'Web Development': [
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'UI/UX Design', level: 85 },
      { name: 'Database Management', level: 80 }
    ],
    'Tools & Technologies': [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 75 },
      { name: 'TensorFlow', level: 85 },
      { name: 'PyTorch', level: 80 }
    ]
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6 text-center">{category}</h3>
              <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
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

export default Skills;