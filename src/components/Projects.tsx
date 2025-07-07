import React, { useState } from 'react';
import { Folder, Award, FileText, Filter, ExternalLink, Download } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Network Infrastructure Overhaul',
      category: 'networking',
      type: 'Case Study',
      description: 'Complete redesign and implementation of network infrastructure at Queens College, improving connectivity and security.',
      technologies: ['Network Design', 'Security Protocols', 'Infrastructure Management'],
      icon: FileText,
      link: '#'
    },
    {
      title: 'System Administration Best Practices',
      category: 'systems',
      type: 'Documentation',
      description: 'Comprehensive documentation of system administration procedures and best practices for organizational efficiency.',
      technologies: ['System Admin', 'Documentation', 'Process Optimization'],
      icon: FileText,
      link: '#'
    },
    {
      title: 'IT Security Implementation',
      category: 'security',
      type: 'Project',
      description: 'Multi-layered security implementation including CCTV systems, network security, and access control.',
      technologies: ['CCTV Systems', 'Network Security', 'Access Control'],
      icon: FileText,
      link: '#'
    }
  ];

  const certificates = [
    {
      title: 'CompTIA Network+ (N10-007) Exam Preparation',
      category: 'certifications',
      type: 'Certificate',
      description: 'LinkedIn Learning certification in CompTIA Network+ covering Network Administration and Network Security.',
      technologies: ['Network Administration', 'Network Security', 'CompTIA'],
      icon: Award,
      image: '/photo_2025-06-24_09-02-45.jpg',
      date: 'November 26, 2022',
      provider: 'LinkedIn Learning'
    },
    {
      title: 'Big Data Analytics Course',
      category: 'certifications',
      type: 'Certificate',
      description: 'Comprehensive training in big data analytics and data processing methodologies.',
      technologies: ['Data Analysis', 'Big Data', 'Analytics'],
      icon: Award,
      image: '/photo_2025-06-24_09-03-48.jpg',
      date: 'August 2024',
      provider: 'Great Learning Academy'
    },
    {
      title: 'Programming Fundamentals',
      category: 'certifications',
      type: 'Certificate',
      description: 'Udacity Nanodegree program completion in programming concepts and software development principles.',
      technologies: ['Programming', 'Software Development', 'Problem Solving'],
      icon: Award,
      image: '/photo_2025-06-24_09-04-06.jpg',
      date: 'September 7, 2024',
      provider: 'Udacity'
    },
    {
      title: 'Computer Hardware and Software Maintenance',
      category: 'certifications',
      type: 'Certificate',
      description: 'Professional certification in computer hardware and software maintenance from Arba Minch University.',
      technologies: ['Hardware Maintenance', 'Software Support', 'Technical Training'],
      icon: Award,
      image: '/photo_2025-06-24_09-04-20.jpg',
      date: 'October 15, 2017',
      provider: 'Arba Minch University'
    },
    {
      title: 'Quality Management System Development & Implementation',
      category: 'certifications',
      type: 'Certificate',
      description: 'Based on ES ISO 9001:2015 standards for quality management system development and implementation.',
      technologies: ['Quality Management', 'ISO 9001:2015', 'Process Improvement'],
      icon: Award,
      image: '/photo_2025-06-24_09-04-45.jpg',
      date: 'December 23-27, 2024',
      provider: 'Institute of Ethiopian Standards /ኢደኢ/'
    },
    {
      title: 'Office Machines Maintenance',
      category: 'certifications',
      type: 'Certificate',
      description: 'Professional certification in office machines maintenance and technical support.',
      technologies: ['Office Equipment', 'Maintenance', 'Technical Support'],
      icon: Award,
      image: '/photo_2025-06-24_09-04-34.jpg',
      date: 'May 16, 2025',
      provider: 'Satcome Institute of Technology'
    }
  ];

  const allItems = [...projects, ...certificates];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'networking', label: 'Networking' },
    { id: 'systems', label: 'Systems' },
    { id: 'security', label: 'Security' },
    { id: 'certifications', label: 'Certifications' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? allItems 
    : allItems.filter(item => item.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projects & Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of technical projects, case studies, and professional certifications 
            that demonstrate expertise and continuous learning in IT.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects and Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => {
            const IconComponent = item.icon;
            const isCertificate = 'image' in item;
            
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                {isCertificate && item.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  {isCertificate && (
                    <div className="mb-3 text-sm text-gray-500">
                      <div className="font-medium">{item.provider}</div>
                      <div>{item.date}</div>
                    </div>
                  )}

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="w-full flex items-center justify-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors">
                    {isCertificate ? (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        View Certificate
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Document Repository */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center">
          <Folder className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
            Document Repository
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Access comprehensive documentation, case studies, certificates, and project materials. 
            All documents are available for download and review.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/Yosef Abebaw CV all docs.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors inline-flex items-center justify-center"
            >
              <Download className="w-4 h-4 mr-2" />
              View Complete CV
            </a>
            <button className="px-6 py-3 border-2 border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-600 hover:text-white transition-colors">
              Request Additional Documents
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;