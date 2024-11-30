import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="text-purple-600" size={24} />
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <p className="text-gray-600">joshswaroop04@gmail.com</p>
                  <p className="text-gray-600">vjoshswaroop@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-purple-600" size={24} />
                <div>
                  <h4 className="text-lg font-medium">Phone</h4>
                  <p className="text-gray-600">+91 7989094798</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="text-purple-600" size={24} />
                <div>
                  <h4 className="text-lg font-medium">Location</h4>
                  <p className="text-gray-600">58-15-94, Shantinagar, N.A.D</p>
                  <p className="text-gray-600">Visakhapatanam, Andhra Pradesh</p>
                  <p className="text-gray-600">India-530009</p>
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                <a href="https://github.com/josh2210200404" className="text-gray-600 hover:text-purple-600">
                  <Github size={24} />
                </a>
                <a href="http://www.linkedin.com/in/josh-swaroop-3787252b2" className="text-gray-600 hover:text-purple-600">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.instagram.com/vegi_josh_swaroop?igsh=MTdveXI0dW0ycDU1eQ==" className="text-gray-600 hover:text-purple-600">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;