import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo and about */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white">AmberClone</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Find and book student accommodation worldwide. Verified properties, 
              flexible booking, and dedicated support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Popular Cities */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Popular Cities</h3>
            <ul className="space-y-3">
              <li><Link to="/properties?location=London" className="text-gray-400 hover:text-white transition-colors">London</Link></li>
              <li><Link to="/properties?location=Barcelona" className="text-gray-400 hover:text-white transition-colors">Barcelona</Link></li>
              <li><Link to="/properties?location=Melbourne" className="text-gray-400 hover:text-white transition-colors">Melbourne</Link></li>
              <li><Link to="/properties?location=Boston" className="text-gray-400 hover:text-white transition-colors">Boston</Link></li>
              <li><Link to="/properties?location=Sydney" className="text-gray-400 hover:text-white transition-colors">Sydney</Link></li>
              <li><Link to="/properties?location=Berlin" className="text-gray-400 hover:text-white transition-colors">Berlin</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <address className="not-italic text-gray-400 space-y-3">
              <p>123 Student Street</p>
              <p>London, UK 10001</p>
              <p>Email: info@amberclone.com</p>
              <p>Phone: +44 123 456 7890</p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AmberClone. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">Terms</Link>
            <Link to="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy</Link>
            <Link to="/cookies" className="text-gray-500 hover:text-white text-sm transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;