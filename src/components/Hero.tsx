import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Linkedin, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Empowering organizations with efficient, secure, and user-focused technology solutions.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white relative overflow-hidden pt-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-100 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-200 rounded-full opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-slide-up">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="block">Yosef Abebaw</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
            <span className="block mb-2">IT Professional | Network & System Support Specialist</span>
            <span className="block text-primary-700">Technical Leader</span>
          </div>

          <div className="text-lg md:text-xl text-gray-700 mb-12 max-w-4xl mx-auto min-h-[60px]">
            "{displayText}<span className="animate-pulse">|</span>"
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <a
              href="/Yosef Abebaw CV all docs.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-600 hover:text-white transition-colors"
            >
              View CV
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="mailto:yosefabebe2008@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow hover:scale-110 transform duration-200"
            >
              <Mail className="w-6 h-6 text-primary-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/yosef-abebe-531201257"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow hover:scale-110 transform duration-200"
            >
              <Linkedin className="w-6 h-6 text-primary-600" />
            </a>
            <a
              href="tel:+251922318733"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow hover:scale-110 transform duration-200"
            >
              <Phone className="w-6 h-6 text-primary-600" />
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-primary-600 mx-auto" />
        </button>
      </div>
    </section>
  );
};

export default Hero;