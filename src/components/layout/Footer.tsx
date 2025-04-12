
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, PhoneCall, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-700 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-psktmt-500 text-white font-bold text-xl p-2 rounded">
                PSK
              </div>
              <span className="font-heading font-bold text-xl">PSKTMT</span>
            </div>
            <p className="text-neutral-300 mb-6">
              Premium TMT Bars for a Stronger Future. Building Tomorrow's Foundations with Quality Steel.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="hover:text-psktmt-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-psktmt-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-psktmt-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-psktmt-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-psktmt-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-neutral-300 hover:text-psktmt-500 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/manufacturing" className="text-neutral-300 hover:text-psktmt-500 transition-colors">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-psktmt-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-neutral-300 hover:text-psktmt-500 transition-colors">
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-psktmt-500 shrink-0 mt-1" size={18} />
                <span className="text-neutral-300">
                  123 Steel Complex, Industrial Area, Mumbai, Maharashtra, India - 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall className="text-psktmt-500" size={18} />
                <a href="tel:+919876543210" className="text-neutral-300 hover:text-psktmt-500 transition-colors">
                  +91 9876543210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-psktmt-500" size={18} />
                <a href="mailto:info@psktmt.com" className="text-neutral-300 hover:text-psktmt-500 transition-colors">
                  info@psktmt.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-neutral-300 mb-4">
              Subscribe to our newsletter for updates and promotions.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-neutral-600 border-neutral-500 text-white"
              />
              <Button className="bg-psktmt-500 hover:bg-psktmt-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-600 pt-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between text-neutral-400">
            <p>© {currentYear} PSKTMT - A PSK Group Venture. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-psktmt-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-psktmt-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
