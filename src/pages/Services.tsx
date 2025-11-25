import { motion } from "framer-motion";
import {
  Code2,
  Laptop,
  Server,
  Layers,
  Building2,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import servicesImage from "@/assets/services-bg.jpg";

const Services = () => {
  const services = [
    {
      icon: <Code2 className="w-10 h-10" />,
      title: ".NET Development",
      description:
        "Build robust, scalable applications using Microsoft .NET framework. From web apps to enterprise solutions.",
      features: ["ASP.NET Core", "C# Development", "Azure Integration", "API Development"],
    },
    {
      icon: <Laptop className="w-10 h-10" />,
      title: "Frontend Development",
      description:
        "Create stunning, responsive user interfaces with modern frameworks and best practices.",
      features: ["React & Next.js", "Vue.js", "Tailwind CSS", "TypeScript"],
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: "Backend Development",
      description:
        "Develop powerful server-side applications with secure and efficient architecture.",
      features: ["Node.js", "Python/Django", "Database Design", "RESTful APIs"],
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: "Full Stack Development",
      description:
        "End-to-end development solutions covering both frontend and backend technologies.",
      features: ["MERN Stack", "MEAN Stack", "Full Deployment", "Cloud Services"],
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: "ERP Solutions",
      description:
        "Comprehensive enterprise resource planning systems tailored to your business needs.",
      features: [
        "Custom ERP",
        "Integration",
        "Process Automation",
        "Reporting & Analytics",
      ],
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android platforms.",
      features: [
        "React Native",
        "Flutter",
        "Native iOS/Android",
        "App Store Deployment",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="relative py-32 overflow-hidden"
        style={{
          backgroundImage: `url(${servicesImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-accent/95" />
        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Comprehensive software development solutions to meet all your business
            needs
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass-card p-8 rounded-2xl group hover:shadow-2xl transition-all"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary to-accent text-white mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <ArrowRight size={16} className="text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              We're here to help you build the perfect solution for your business
            </p>
            <Link to="/contact">
              <Button size="lg" className="btn-gradient text-white">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
