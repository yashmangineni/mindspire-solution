import { Target, Eye, Users, Award, Code, Database, Globe, Cloud, Factory, Zap, Package, Smartphone } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";
import erpImage from "@/assets/erp-dashboard.jpg";
import manufacturingImage from "@/assets/manufacturing-global.jpg";
import techImage from "@/assets/tech-bg.jpg";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for excellence in every project we undertake",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working together with clients to achieve common goals",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Innovation",
      description: "Embracing new technologies and creative solutions",
    },
  ];

  const expertise = [
    // {
    //   icon: <Code className="w-8 h-8" />,
    //   title: "Java Development",
    //   description: "Enterprise-grade applications built with Java and Spring ecosystem for robust, scalable solutions.",
    //   technologies: ["Spring Boot", "Microservices", "RESTful APIs"],
    // },
    // {
    //   icon: <Code className="w-8 h-8" />,
    //   title: ".NET Development",
    //   description: "Modern applications using Microsoft .NET ecosystem for high-performance, secure solutions.",
    //   technologies: ["ASP.NET Core", "C#", "Entity Framework"],
    // },
    // {
    //   icon: <Database className="w-8 h-8" />,
    //   title: "ERP Systems",
    //   description: "Comprehensive ERP solutions including Infor SyteLine and SAP for streamlined business operations.",
    //   technologies: ["Infor SyteLine", "SAP Integration", "Custom ERP"],
    // },
    // {
    //   icon: <Globe className="w-8 h-8" />,
    //   title: "React Development",
    //   description: "Modern, responsive web applications using React and cutting-edge frontend technologies.",
    //   technologies: ["React Hooks", "State Management", "Component Libraries"],
    // },
    // {
    //   icon: <Cloud className="w-8 h-8" />,
    //   title: "Cloud Solutions",
    //   description: "Scalable cloud infrastructure and deployment on AWS, Azure, and other leading platforms.",
    //   technologies: ["AWS & Azure", "Cloud Migration", "DevOps & CI/CD"],
    // },
    // {
    //   icon: <Factory className="w-8 h-8" />,
    //   title: "SAP Integration",
    //   description: "Seamless integration with SAP systems to enhance business processes and data flow.",
    //   technologies: ["SAP ERP", "SAP Fiori", "SAP HANA"],
    // },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            About Mindspire Solution Private Limited
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Building the future of software, one solution at a time
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={aboutImage}
                alt="Our Team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Who <span className="gradient-text">We Are</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Mindspire Solution Private Limited is a leading software development company
                based in Madhapur, Hyderabad. We specialize in delivering
                comprehensive IT solutions that empower businesses to thrive in the
                digital age.
              </p>
              <p className="text-muted-foreground text-lg">
                With a team of experienced developers and consultants, we provide
                end-to-end services from consultation to deployment, ensuring your
                projects are delivered on time and exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Our Expertise</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We specialize in a wide range of technologies and platforms to deliver comprehensive solutions for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {expertise.map((item, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <ul className="space-y-2 text-sm">
                  {item.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Product-Based Companies Focus */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Package className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary">Industry Focus</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Product-Based <span className="gradient-text">Companies</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                We specialize in delivering technology solutions for product-based companies and manufacturers worldwide.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Manufacturing Excellence</h3>
                    <p className="text-muted-foreground">End-to-end solutions for discrete and process manufacturing industries.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Enterprise Integration</h3>
                    <p className="text-muted-foreground">Seamless integration of business systems to create a unified digital ecosystem.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Digital Transformation</h3>
                    <p className="text-muted-foreground">Modernize your business with cutting-edge digital solutions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={manufacturingImage} 
                  alt="Manufacturing Solutions" 
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* ERP Solutions */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={erpImage} 
                  alt="ERP Solutions" 
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Database className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary">ERP Solutions</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Enterprise <span className="gradient-text">Resource Planning</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Comprehensive ERP solutions including Infor SyteLine and SAP for streamlined business operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Infor SyteLine Implementation</h3>
                    <p className="text-muted-foreground">Specialized implementation services for manufacturing companies.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">SAP Integration</h3>
                    <p className="text-muted-foreground">Seamless integration with existing SAP systems and processes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Custom ERP Development</h3>
                    <p className="text-muted-foreground">Tailored ERP solutions to meet specific business requirements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Eye className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Vision & Mission</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="gradient-text">Vision & Mission</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              The guiding principles that drive our commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card p-8 rounded-2xl hover:shadow-xl transition-all">
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary to-accent text-white mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg">
                To be the most trusted and innovative software development partner,
                empowering businesses worldwide with cutting-edge technology
                solutions that drive growth and transformation.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl hover:shadow-xl transition-all">
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary to-accent text-white mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg">
                To deliver exceptional software solutions that exceed client
                expectations through innovation, quality, and dedication. We aim to
                build long-lasting partnerships by understanding our clients' needs
                and providing tailored solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl text-center group hover:shadow-xl transition-all"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary to-accent text-white mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;