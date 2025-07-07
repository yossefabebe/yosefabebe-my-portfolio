import React from 'react';
import { Building, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'IT Support Officer',
      company: 'Tana Drilling and Industries',
      duration: 'July 04, 2024 - Present',
      location: 'Ethiopia',
      responsibilities: [
        'Provide comprehensive technical support for industrial operations and equipment',
        'Maintain and troubleshoot network infrastructure and communication systems',
        'Manage CCTV and PBX systems for organizational security and communication',
        'Perform system analysis and implement quality management protocols',
        'Support data communication systems and web-based monitoring solutions',
        'Collaborate with teams to ensure optimal IT service delivery in industrial environment'
      ],
      technologies: ['Industrial IT Support', 'Network Troubleshooting', 'CCTV Systems', 'PBX Management']
    },
    {
      title: 'IT Head',
      company: 'Queens College',
      duration: 'October 18, 2018 - July 04, 2024 (5+ years)',
      location: 'Addis Ababa, Ethiopia',
      responsibilities: [
        'Led comprehensive IT infrastructure management and strategic planning',
        'Supervised technical team and coordinated cross-departmental IT initiatives',
        'Implemented network security protocols and system optimization strategies',
        'Managed hardware/software procurement, installation, and maintenance',
        'Developed and executed IT policies and procedures for organizational efficiency',
        'Provided technical leadership in system upgrades and technology adoption'
      ],
      technologies: ['Network Administration', 'System Management', 'Team Leadership', 'IT Strategy']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over 6 years of progressive experience in IT head and IT infrastructure within 
            educational and manufacturing industrial zones.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Building className="w-6 h-6 text-primary-600" />
                    <h3 className="font-heading text-2xl font-bold text-gray-900">
                      {exp.title}
                    </h3>
                  </div>
                  <div className="text-xl text-primary-600 font-semibold mb-3">
                    {exp.company}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-gray-600 mb-4">
                    <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                    Key Responsibilities & Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                    Technologies & Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;