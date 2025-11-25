import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopLoader from "./TopLoader";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopLoader />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
