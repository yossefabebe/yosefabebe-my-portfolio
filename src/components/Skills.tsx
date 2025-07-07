import React from 'react';
import { Server, Network, Shield, Code, Users, Lightbulb } from 'lucide-react';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: 'Hardware & Software Maintenance', level: 95, icon: Server },
    { name: 'Network Administration & Security', level: 92, icon: Network },
    { name: 'System Administration', level: 90, icon: Shield },
    { name: 'Server Management & Configuration', level: 88, icon: Server },
    { name: 'CCTV & PBX Systems', level: 85, icon: Network },
    { name: 'Cloud Services & Microsoft 365', level: 82, icon: Server },
    { name: 'Data Communication Systems', level: 80, icon: Network },
    { name: 'Quality Management Systems', level: 78, icon: Shield },
  ];

  const softSkills = [
    { name: 'IT Leadership & Team Management', level: 95, icon: Users },
    { name: 'Technical Problem-Solving', level: 93, icon: Lightbulb },
    { name: 'Project Management', level: 90, icon: Lightbulb },
    { name: 'Cross-functional Collaboration', level: 88, icon: Users },
    { name: 'Strategic IT Planning', level: 85, icon: Lightbulb },
    { name: 'Technical Documentation', level: 87, icon: Users },
  ];

  const SkillBar: React.FC<{ skill: any }> = ({ skill }) => {
    const IconComponent = skill.icon;
    
    return (
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <IconComponent className="w-5 h-5 text-primary-600" />
            <span className="font-medium text-gray-900">{skill.name}</span>
          </div>
          <span className="text-sm font-semibold text-primary-600">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT skills developed through hands-on experience in infrastructure management, 
            network administration, and technical leadership across educational and industrial environments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Server className="w-7 h-7 text-primary-600 mr-3" />
              Technical IT Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-accent-50 to-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Users className="w-7 h-7 text-accent-600 mr-3" />
              Leadership & Management Skills
            </h3>
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6 text-center">
            Core IT Competencies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Infrastructure Security</h4>
              <p className="text-sm text-gray-600">Network security, system protection, and compliance management</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">IT Team Leadership</h4>
              <p className="text-sm text-gray-600">Technical team management and cross-departmental coordination</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Network Administration</h4>
              <p className="text-sm text-gray-600">Network design, implementation, and optimization</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-accent-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">IT Strategic Planning</h4>
              <p className="text-sm text-gray-600">Technology roadmap development and implementation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;