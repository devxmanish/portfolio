import Link from "next/link";
import {
  Code,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Heart,
  Instagram,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Projects", href: "/projects" },
  ];

  const resources = [
    { name: "Blog", href: "/blog" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
    { name: "Resume", href: "/resume.pdf" },
  ];

  const services = [
    { name: "Web Development", href: "/services#web" },
    { name: "Mobile Apps", href: "/services#mobile" },
    { name: "UI/UX Design", href: "/services#design" },
    { name: "Consulting", href: "/services#consulting" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">DevXManish</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Full-stack developer and designer creating amazing digital
              experiences. Available for freelance projects and full-time
              opportunities.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com/in/devxmanish"
                target="_blank"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/devxmanish"
                target="_blank"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/devxmanish"
                target="_blank"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/devxmanish/"
                target="_blank"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>devxmanish@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>+91 72093 15881</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} DevXManish. All rights reserved.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Designed with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
              <span>by Manish Chaudhary</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
