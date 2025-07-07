import React from 'react';
import { GraduationCap, BookOpen, Award, Calendar, Star, Sparkles } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Master\'s in Project Management',
      institution: 'Queens\' University College',
      duration: 'Present',
      status: 'In Progress',
      description: 'Advanced studies in project management methodologies, strategic planning, and organizational leadership.',
      icon: GraduationCap,
      color: 'accent'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Arba Minch University',
      duration: '2014 - 2017',
      status: 'Completed',
      description: 'Comprehensive foundation in computer science principles, programming, and system analysis.',
      icon: GraduationCap,
      color: 'primary'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Formal education and academic achievements that provide the foundation 
            for professional expertise in IT and project management.
          </p>
        </div>

        {/* Formal Education */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-bold text-gray-900 mb-8 flex items-center justify-center">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            Academic Qualifications
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {education.map((edu, index) => {
              const IconComponent = edu.icon;
              const colorClasses = edu.color === 'accent' 
                ? 'from-accent-50 via-orange-50 to-accent-100 border-accent-200' 
                : 'from-primary-50 via-blue-50 to-primary-100 border-primary-200';
              
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${colorClasses} border rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 ${edu.color === 'accent' ? 'bg-gradient-to-r from-accent-400 to-orange-400' : 'bg-gradient-to-r from-primary-400 to-blue-400'} rounded-lg flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className={`px-4 py-2 ${edu.status === 'In Progress' ? 'bg-gradient-to-r from-accent-200 to-orange-200 text-accent-800' : 'bg-gradient-to-r from-green-200 to-emerald-200 text-green-800'} text-sm font-medium rounded-full shadow-md`}>
                      {edu.status}
                    </span>
                  </div>

                  <h4 className="font-heading text-xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h4>
                  
                  <div className="text-primary-600 font-semibold mb-2">
                    {edu.institution}
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{edu.duration}</span>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Continuous Learning */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl p-8 text-white text-center shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <BookOpen className="w-16 h-16 opacity-90" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-yellow-800" />
              </div>
            </div>
          </div>
          <h3 className="font-heading text-2xl font-bold mb-4">
            Commitment to Continuous Learning
          </h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
            Staying current with emerging technologies and industry best practices through 
            ongoing professional development, online courses, and hands-on experimentation 
            with new tools and methodologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;