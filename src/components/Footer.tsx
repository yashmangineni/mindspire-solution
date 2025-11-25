import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Smartphone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Mindspire Solution Private Limited</h3>
            <p className="text-muted-foreground text-sm">
              Leading software development company delivering innovative solutions
              for businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/clients"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">.NET Development</li>
              <li className="text-muted-foreground text-sm">Frontend Development</li>
              <li className="text-muted-foreground text-sm">Backend Development</li>
              <li className="text-muted-foreground text-sm">Full Stack Development</li>
              <li className="text-muted-foreground text-sm">ERP Solutions</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone size={16} className="text-primary" />
                <span>+91 79279237979</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Smartphone size={16} className="text-primary" />
                <span>Web Support</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail size={16} className="text-primary" />
                <a href="mailto:info@mindspire.com" className="hover:text-primary">
                  info@mindspire.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin size={16} className="text-primary mt-1" />
                <span>Madhapur, Vittalrao Nagar, Hyderabad</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Mindspire Solution Private Limited. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
