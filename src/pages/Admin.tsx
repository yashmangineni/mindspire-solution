import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Trash2, Mail, Phone, Calendar, LogOut, RefreshCw, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  resume: string | null;
  timestamp: string;
}

const Admin = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    navigate("/");
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  useEffect(() => {
    loadContacts();
    
    // Set up interval to check for new contacts every 5 seconds
    const interval = setInterval(() => {
      loadContacts();
    }, 5000);
    
    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const loadContacts = () => {
    const stored = localStorage.getItem("contacts");
    if (stored) {
      const parsedContacts = JSON.parse(stored);
      
      // Check if new contacts have been added
      if (parsedContacts.length > contacts.length) {
        const newContacts = parsedContacts.length - contacts.length;
        if (contacts.length > 0) { // Don't show notification on initial load
          toast({
            title: "New Contact Submission(s)",
            description: `${newContacts} new contact submission(s) received.`,
          });
        }
      }
      
      setContacts(parsedContacts);
    }
  };

  const handleDelete = (id: number) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
    setContacts(updatedContacts);
    toast({
      title: "Contact Deleted",
      description: "The contact has been removed successfully.",
    });
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getServiceLabel = (service: string) => {
    const labels: { [key: string]: string } = {
      dotnet: ".NET Development",
      frontend: "Frontend Development",
      backend: "Backend Development",
      fullstack: "Full Stack Development",
      erp: "ERP Solutions",
      mobile: "Mobile Development",
    };
    return labels[service] || service;
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6"
          >
            Admin Dashboard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl"
          >
            Manage contact form submissions
          </motion.p>
        </div>
      </section>

      {/* Contacts Table */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">
                Contact Submissions ({contacts.length})
              </h2>
              <div className="flex gap-2">
                <Button
                  onClick={loadContacts}
                  variant="outline"
                  className="btn-gradient text-white gap-2"
                >
                  <RefreshCw size={16} />
                  Refresh
                </Button>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground gap-2"
                >
                  <LogOut size={16} />
                  Logout
                </Button>
              </div>
            </div>

            {contacts.length === 0 ? (
              <div className="text-center py-12">
                <Mail size={64} className="mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground text-lg">
                  No contact submissions yet
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contacts.map((contact) => (
                      <TableRow key={contact.id}>
                        <TableCell className="font-medium">
                          {contact.name}
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm">
                              <Mail size={14} className="text-primary" />
                              <span className="text-muted-foreground">
                                {contact.email}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Phone size={14} className="text-primary" />
                              <span className="text-muted-foreground">
                                {contact.phone}
                              </span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{getServiceLabel(contact.service)}</TableCell>
                        <TableCell className="max-w-xs">
                          <p className="truncate">{contact.message}</p>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar size={14} className="text-primary" />
                            <span>{formatDate(contact.timestamp)}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex gap-2 justify-end">
                            {contact.resume && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="gap-2"
                                title={`Resume: ${contact.resume}`}
                                disabled
                              >
                                <Download size={16} />
                                Resume
                              </Button>
                            )}
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  className="gap-2"
                                >
                                  <Trash2 size={16} />
                                  Delete
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>
                                    Delete Contact?
                                  </AlertDialogTitle>
                                <AlertDialogDescription>
                                  This action cannot be undone. This will
                                  permanently delete this contact submission.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleDelete(contact.id)}
                                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                >
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Admin;
