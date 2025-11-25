import { Package, Factory, Database, Smartphone, ArrowRight, Zap, Code, Globe, Cloud, Users, Building, Award, Target, Lightbulb, TrendingUp, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import manufacturingImage from "@/assets/manufacturing-global.jpg";
import erpImage from "@/assets/erp-dashboard.jpg";
import techImage from "@/assets/tech-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transforming Businesses Through <span className="block gradient-text">Digital Innovation</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Mindspire Solution Private Limited delivers comprehensive IT solutions that empower businesses to thrive in the digital age with cutting-edge technology and unmatched expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="btn-gradient px-8 py-3 rounded-full font-semibold text-white hover:shadow-xl transition-all inline-flex items-center justify-center">
                Explore Our Services
              </Link>
              <Link to="/contact" className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-3 rounded-full font-semibold text-white hover:bg-white/20 transition-all inline-flex items-center justify-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Building className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary">About Us</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Leading <span className="gradient-text">Software Solutions</span> Provider
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Mindspire Solution Private Limited is a premier software development company based in Madhapur, Hyderabad. 
                With over a decade of experience, we specialize in delivering comprehensive IT solutions that empower 
                businesses to thrive in the digital age.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                Our team of seasoned developers and consultants provide end-to-end services from consultation to 
                deployment, ensuring your projects are delivered on time and exceed expectations.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">10+ Years</h3>
                    <p className="text-muted-foreground text-sm">Experience</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">200+ Projects</h3>
                    <p className="text-muted-foreground text-sm">Completed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={techImage} 
                  alt="Our Technology Solutions" 
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-8 h-8 text-yellow-500" />
                  <div>
                    <p className="font-bold">Innovative Solutions</p>
                    <p className="text-xs text-muted-foreground">Driving Digital Transformation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Clients Worldwide</div>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Retention</div>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Team Experts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product-Based Companies */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Package className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Industry Focus</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Trusted by <span className="gradient-text">Product-Based Companies</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We partner with leading product-based companies and manufacturers worldwide, delivering technology solutions that drive innovation and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all group">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Factory className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Manufacturing Excellence</h3>
                  <p className="text-muted-foreground mb-4">
                    End-to-end solutions for discrete and process manufacturing industries, from MRP to shop floor control.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <ArrowRight size={14} className="text-primary" />
                      Production scheduling & optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight size={14} className="text-primary" />
                      Quality management systems
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight size={14} className="text-primary" />
                      Traceability & compliance
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all group">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={manufacturingImage} 
                  alt="Manufacturing Solutions" 
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Global Manufacturing Solutions</h3>
              <p className="text-muted-foreground mb-4">
                We help manufacturers worldwide streamline operations, improve quality, and accelerate innovation through digital transformation.
              </p>
              <Link to="/services" className="flex items-center text-primary font-medium hover:underline">
                <span>Learn more</span>
                <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>

            <div className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all group">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Enterprise Integration</h3>
                  <p className="text-muted-foreground mb-4">
                    Seamless integration of business systems to create a unified digital ecosystem for your organization.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <ArrowRight size={14} className="text-primary" />
                      ERP system integration
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight size={14} className="text-primary" />
                      API development & management
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight size={14} className="text-primary" />
                      Data synchronization
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all group">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={erpImage} 
                  alt="ERP Dashboard" 
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">ERP Implementation</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive ERP solutions including Infor SyteLine and SAP for streamlined business operations.
              </p>
              <Link to="/services" className="flex items-center text-primary font-medium hover:underline">
                <span>View case study</span>
                <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Skills */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Our Expertise</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="gradient-text">Technical Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We specialize in a wide range of technologies and platforms to deliver comprehensive solutions for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Java Development</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Enterprise-grade applications built with Java and Spring ecosystem for robust, scalable solutions.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Spring Boot & Spring Framework
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Microservices Architecture
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  RESTful API Development
                </li>
              </ul>
            </div>

            <div className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">.NET Development</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Modern applications using Microsoft .NET ecosystem for high-performance, secure solutions.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  ASP.NET Core & C#
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Entity Framework
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Azure Integration
                </li>
              </ul>
            </div>

            <div className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">ERP Systems</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Comprehensive ERP solutions including Infor SyteLine and SAP for streamlined business operations.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Infor SyteLine Implementation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  SAP Integration
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Custom ERP Development
                </li>
              </ul>
            </div>

            <div className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">React Development</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Modern, responsive web applications using React and cutting-edge frontend technologies.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  React & React Hooks
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  State Management (Redux, Context)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Component Libraries
                </li>
              </ul>
            </div>

            <div className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Cloud Solutions</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Scalable cloud infrastructure and deployment on AWS, Azure, and other leading platforms.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  AWS & Microsoft Azure
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Cloud Migration
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  DevOps & CI/CD
                </li>
              </ul>
            </div>

            <div className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Factory className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">SAP Integration</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Seamless integration with SAP systems to enhance business processes and data flow.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  SAP ERP Integration
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  SAP Fiori Development
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  SAP HANA Solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how our expertise can help you achieve your digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
              Get Started
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Location</h3>
              <p className="text-muted-foreground">Madhapur, Hyderabad<br />India</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-muted-foreground">+91 12345 67890<br />Mon-Fri, 9AM-6PM</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-muted-foreground">info@mindspiresolution.com<br />support@mindspiresolution.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;