
"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const PageLayout = ({ children, title, description }: PageLayoutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {title && (
        <>
          <title>{title} - Extendia</title>
          <meta name="description" content={description} />
        </>
      )}
      <Header />
      <main>{children}</main>
      <Footer />
    </motion.div>
  );
};

export default PageLayout;
