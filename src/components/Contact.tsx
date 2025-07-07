import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, MessageCircle, Sparkles, Heart } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'yosefabebe2008@gmail.com',
      link: 'mailto:yosefabebe2008@gmail.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+251 922 318 733',
      link: 'tel:+251922318733',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Phone,
      label: 'Alternative',
      value: '+251703318733',
      link: 'tel:+251703318733',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Addis Ababa, Ethiopia',
      link: '#',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/yosef-abebe-531201257',
      gradient: 'from-blue-600 to-blue-700'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-xl mb-6">
            <MessageCircle className="w-8 h-8 text-white mr-2" />
            <Heart className="w-8 h-8 text-white" />
            <Sparkles className="w-8 h-8 text-white ml-2" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your IT needs or explore collaboration opportunities? 
            I'd love to hear from you and discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  
                  return (
                    <a
                      key={index}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{info.label}</div>
                        <div className={`bg-gradient-to-r ${info.gradient} bg-clip-text text-transparent font-medium group-hover:scale-105 transition-transform duration-300`}>
                          {info.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-2xl">
              <div className="flex items-center mb-4">
                <Sparkles className="w-8 h-8 mr-3" />
                <h4 className="font-heading text-xl font-bold">
                  Let's Collaborate
                </h4>
              </div>
              <p className="opacity-90 leading-relaxed">
                Whether you're looking for IT leadership, system administration expertise, 
                or technical consultation, I'm here to help your organization achieve its 
                technology goals efficiently and securely.
              </p>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full shadow-lg mb-4">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Send a Message
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-xl mb-4">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-xl">Message Sent!</h4>
                <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none hover:border-blue-300"
                    placeholder="Tell me about your project or how I can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium rounded-xl hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                  <Sparkles className="w-5 h-5 ml-2" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;