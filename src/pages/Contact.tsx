import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    resume: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Get existing contacts from localStorage
    const existingContacts = JSON.parse(
      localStorage.getItem("contacts") || "[]"
    );

    // Add new contact with timestamp
    const newContact = {
      ...formData,
      // Store file name instead of the file object itself
      resume: formData.resume ? formData.resume.name : null,
      id: Date.now(),
      timestamp: new Date().toISOString(),
    };

    existingContacts.push(newContact);
    localStorage.setItem("contacts", JSON.stringify(existingContacts));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      resume: null,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

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
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            We'd love to hear from you. Let's discuss your project!
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent text-white">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@mindspire.com</p>
                    <p className="text-muted-foreground">support@mindspire.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">Mobile: +91 12345 67890</p>
                    <p className="text-muted-foreground">Office: +91 40 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Mindspire Solution Private Limited
                      <br />
                      HITEC City, Vittalrao Nagar
                      <br />
                      Madhapur, Hyderabad, Telangana 500081
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                      setFormData({ ...formData, service: value })
                    }
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dotnet">.NET Development</SelectItem>
                      <SelectItem value="frontend">Frontend Development</SelectItem>
                      <SelectItem value="backend">Backend Development</SelectItem>
                      <SelectItem value="fullstack">
                        Full Stack Development
                      </SelectItem>
                      <SelectItem value="erp">ERP Solutions</SelectItem>
                      <SelectItem value="mobile">Mobile Development</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-medium mb-2">
                    Upload Resume (PDF, DOC, DOCX)
                  </label>
                  <input
                    type="file"
                    id="resume"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                  />
                  {formData.resume && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      Selected file: {formData.resume.name}
                    </p>
                  )}
                </div>

                <Button type="submit" className="w-full btn-gradient text-white">
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Location</h2>
            <p className="text-muted-foreground text-lg">
              KAVALI RAJU, Shop No 01, near Western Building, Vittal Rao Nagar, Madhapur, Hyderabad, Telangana 500081
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
                title="MindSpire Office Location"
  src="https://www.google.com/maps?q=17.441660,78.382570&z=17&output=embed"

              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mindspire Solution Private Limited Location"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
