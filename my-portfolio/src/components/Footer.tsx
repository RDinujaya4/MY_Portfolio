import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/rayandinujaya",
      label: "GitHub"
    },
    {
      icon: Linkedin, 
      href: "https://linkedin.com/in/rayandinujaya",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:rayandinujaya4@gmail.com",
      label: "Email"
    },
    {
      icon: Phone,
      href: "tel:+94750994300",
      label: "Phone"
    }
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand and Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Rayan Dinujaya</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-sm">
              Software Engineer passionate about building exceptional digital experiences 
              and solving complex technical challenges.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent-purple transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={18} className="mr-3 text-primary-foreground/60" />
                <a 
                  href="mailto:rayan@example.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  rayandinujaya4@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-3 text-primary-foreground/60" />
                <a 
                  href="tel:+94123456789"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +94 750 994 300
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Rayan Dinujaya. All rights reserved. Built with React & TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;