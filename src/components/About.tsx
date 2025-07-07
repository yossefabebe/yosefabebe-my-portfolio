import React from 'react';
import { User, Target, Download } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate IT professional with proven experience in managing end-to-end infrastructure, 
            network systems, and technical support. Skilled in maintaining servers, administering networks, 
            and ensuring secure, efficient IT operations across both industrial and office environments. 
            I bring a strong focus on reliability, compliance, and practical problem-solving to drive 
            business continuity and performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Photo */}
          <div className="lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/photo_2025-02-21_13-14-49.jpg" 
                  alt="Yosef Abebaw - Professional Photo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                <User className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>

          <div className="lg:order-1 space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                  Professional Profile
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  With over 6 years of experience in IT support and systems management, I have developed 
                  a comprehensive skill set that spans from hardware maintenance to strategic IT leadership. 
                  My passion lies in creating efficient, secure technology solutions that empower organizations 
                  to achieve their goals.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Previously served as IT Head at Queens College for over 5 years, and currently working 
                  as IT Support Officer at Tana Drilling and Industries, where I provide technical support 
                  for industrial operations and implement innovative monitoring solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                  Core Strengths
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Expert in multitasking, analytical problem-solving, and collaborative leadership. 
                  Passionate about staying current with emerging technologies and best practices 
                  in IT support and system administration.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="/Yosef Abebaw CV all docs.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5 mr-2" />
                View Full CV
              </a>
            </div>
          </div>
        </div>

        {/* Career Timeline */}
        <div className="mt-16 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
          <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">
            Career Timeline
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-3 h-3 bg-primary-600 rounded-full mt-2"></div>
              <div>
                <div className="font-semibold text-gray-900">July 04, 2024 - Present</div>
                <div className="text-primary-600 font-medium">IT Support Officer - Tana Drilling and Industries</div>
                <div className="text-sm text-gray-600">Current position providing technical support for industrial operations</div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-3 h-3 bg-accent-600 rounded-full mt-2"></div>
              <div>
                <div className="font-semibold text-gray-900">October 18, 2018 - July 04, 2024</div>
                <div className="text-accent-600 font-medium">IT Head - Queens College</div>
                <div className="text-sm text-gray-600">5+ years of technical leadership and infrastructure management</div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-3 h-3 bg-primary-600 rounded-full mt-2"></div>
              <div>
                <div className="font-semibold text-gray-900">2014 - 2017</div>
                <div className="text-primary-600 font-medium">BSc Computer Science</div>
                <div className="text-sm text-gray-600">Arba Minch University</div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-3 h-3 bg-accent-600 rounded-full mt-2"></div>
              <div>
                <div className="font-semibold text-gray-900">Present</div>
                <div className="text-accent-600 font-medium">Master's in Project Management</div>
                <div className="text-sm text-gray-600">Queens' University College - In Progress</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;