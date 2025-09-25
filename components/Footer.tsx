import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 h-10 w-10 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div className="text-xl font-bold">Amana Transportation</div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Proudly servicing Malaysian bus riders since 2019. We provide
              modern, reliable, and comfortable public transportation connecting
              key areas in Kuala Lumpur and surrounding regions.
            </p>

            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">Kuala Lumpur, Malaysia</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+60 3-1234 5678</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">info@amanatransportation.my</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#map"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Live Bus Map
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Bus Schedule
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Route Planning
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Fare Information
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support & Hours</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center text-gray-400 mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Operating Hours</span>
                </div>
                <div className="text-sm text-gray-500">
                  <p>Monday - Friday: 5:00 AM - 11:00 PM</p>
                  <p>Saturday: 6:00 AM - 11:00 PM</p>
                  <p>Sunday: 7:00 AM - 10:00 PM</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-2">Customer Service</p>
                <p className="text-sm text-gray-500">24/7 Emergency Hotline</p>
                <p className="text-sm text-white font-medium">
                  +60 3-1234 9999
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              <p>&copy; 2025 Amana Transportation. All rights reserved.</p>
              <p>Licensed by the Malaysian Ministry of Transport</p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-6 mt-4 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Safety Guidelines
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
