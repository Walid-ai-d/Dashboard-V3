import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-100 to-blue-100 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-black text-white px-3 py-1 rounded-lg font-bold text-lg">
                alt
              </div>
              <span className="font-bold text-gray-800">Alt Academy</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Empowering students with quality education and innovative learning experiences 
              that prepare them for success in their academic and professional journeys.
            </p>
            <div className="flex space-x-4 mb-6">
              <div className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center">
                <Facebook size={16} className="text-gray-600" />
              </div>
              <div className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center">
                <Twitter size={16} className="text-gray-600" />
              </div>
              <div className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center">
                <Instagram size={16} className="text-gray-600" />
              </div>
              <div className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center">
                <Linkedin size={16} className="text-gray-600" />
              </div>
            </div>
            <p className="text-sm text-gray-500">© Alt Academy, 2024</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Login</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Sign Up</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Blogs</a></li>
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Subjects</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Chemistry</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Physics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Biology</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Mathematics</a></li>
            </ul>
          </div>

          {/* More Subjects & Legal */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">More Subjects</h3>
            <ul className="space-y-2 mb-6">
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Business</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Economics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Accounting</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Psychology</a></li>
            </ul>
            <div className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-gray-800 transition-colors">Privacy Policy</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800 transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;