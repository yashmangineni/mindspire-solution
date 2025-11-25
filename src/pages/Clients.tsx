import { motion } from "framer-motion";
import { Building, CheckCircle, Users } from "lucide-react";

const Clients = () => {
  const clients = [
    {
      name: "Infor",
      industry: "Enterprise Software",
      description:
        "Global leader in business cloud software specialized by industry.",
      projects: "15+ Projects",
    },
    {
      name: "ETS",
      industry: "Educational Testing",
      description:
        "World's largest private nonprofit educational testing and assessment organization.",
      projects: "10+ Projects",
    },
    {
      name: "TechCorp Solutions",
      industry: "Product Development",
      description:
        "Leading product-based company creating innovative software solutions.",
      projects: "20+ Projects",
    },
    {
      name: "DataFlow Systems",
      industry: "Data Analytics",
      description:
        "Product-based company specializing in big data and analytics platforms.",
      projects: "12+ Projects",
    },
    {
      name: "CloudWave Technologies",
      industry: "Cloud Services",
      description:
        "Product company focused on cloud infrastructure and SaaS solutions.",
      projects: "18+ Projects",
    },
    {
      name: "InnovateHub",
      industry: "Innovation Platform",
      description:
        "Product-based company building collaboration and innovation tools.",
      projects: "8+ Projects",
    },
  ];

  const stats = [
    { icon: <Building className="w-8 h-8" />, value: "50+", label: "Clients" },
    { icon: <CheckCircle className="w-8 h-8" />, value: "200+", label: "Projects" },
    { icon: <Users className="w-8 h-8" />, value: "98%", label: "Satisfaction" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6"
          >
            Our Clients
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Trusted by leading organizations worldwide
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl text-center"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary to-accent text-white mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Companies That <span className="gradient-text">Trust Us</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're proud to partner with industry leaders and innovative startups
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass-card p-8 rounded-2xl group hover:shadow-2xl transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{client.name}</h3>
                    <p className="text-primary text-sm font-medium">
                      {client.industry}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                    {client.name.charAt(0)}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{client.description}</p>
                <div className="flex items-center text-sm text-primary font-medium">
                  <CheckCircle size={16} className="mr-2" />
                  {client.projects}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="glass-card p-12 rounded-2xl">
              <p className="text-2xl text-muted-foreground mb-6 italic">
                "Mindspire Solution Private Limited has been an exceptional partner in our digital
                transformation journey. Their expertise and commitment to quality
                have exceeded our expectations."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold">
                  J
                </div>
                <div className="text-left">
                  <p className="font-bold">John Anderson</p>
                  <p className="text-muted-foreground text-sm">
                    CTO, Technology Solutions Inc.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
