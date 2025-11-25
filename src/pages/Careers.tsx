import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Careers = () => {
  const jobs = [
    {
      title: "Senior .NET Developer",
      department: "Engineering",
      location: "Hyderabad, India",
      type: "Full-time",
      description:
        "We're looking for an experienced .NET developer to join our growing team.",
      requirements: [
        "5+ years of .NET development experience",
        "Strong knowledge of C# and ASP.NET Core",
        "Experience with Azure cloud services",
      ],
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Hyderabad, India",
      type: "Full-time",
      description:
        "Join our frontend team to build beautiful and responsive user interfaces.",
      requirements: [
        "3+ years of React experience",
        "Strong CSS and Tailwind skills",
        "Knowledge of TypeScript",
      ],
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Hyderabad, India",
      type: "Full-time",
      description:
        "Work on both frontend and backend technologies in our dynamic environment.",
      requirements: [
        "4+ years of full stack experience",
        "Proficiency in React and Node.js",
        "Database design experience",
      ],
    },
    {
      title: "Mobile App Developer",
      department: "Engineering",
      location: "Hyderabad, India",
      type: "Full-time",
      description:
        "Create innovative mobile applications for iOS and Android platforms.",
      requirements: [
        "3+ years of mobile development",
        "Experience with React Native or Flutter",
        "Published apps in stores",
      ],
    },
    {
      title: "ERP Consultant",
      department: "Consulting",
      location: "Hyderabad, India",
      type: "Full-time",
      description:
        "Help clients implement and optimize their ERP systems.",
      requirements: [
        "5+ years of ERP consulting",
        "Strong business process knowledge",
        "Client-facing experience",
      ],
    },
    {
      title: "DevOps Engineer",
      department: "Operations",
      location: "Hyderabad, India",
      type: "Full-time",
      description:
        "Build and maintain our cloud infrastructure and deployment pipelines.",
      requirements: [
        "3+ years of DevOps experience",
        "Strong knowledge of Docker and Kubernetes",
        "CI/CD pipeline experience",
      ],
    },
  ];

  const benefits = [
    "Competitive salary packages",
    "Health insurance",
    "Flexible working hours",
    "Remote work options",
    "Professional development",
    "Modern office space",
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
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Build your career with a team that values innovation, collaboration, and
            growth
          </motion.p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Why <span className="gradient-text">Mindspire</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We offer an environment where you can grow, learn, and make an impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-xl text-center"
              >
                <p className="font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-muted-foreground text-lg">
              Find your next opportunity with us
            </p>
          </motion.div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                      <span className="flex items-center gap-1">
                        <Briefcase size={16} />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Link to="/contact">
                    <Button className="btn-gradient text-white">
                      Apply Now
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
                <p className="text-muted-foreground mb-4">{job.description}</p>
                <div>
                  <p className="font-semibold mb-2">Key Requirements:</p>
                  <ul className="space-y-1">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <ArrowRight
                          size={16}
                          className="text-primary mr-2 mt-0.5 flex-shrink-0"
                        />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Don't See a Suitable Position?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and
              we'll keep you in mind for future opportunities.
            </p>
            <Link to="/contact">
              <Button size="lg" className="btn-gradient text-white">
                Send Your Resume
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
