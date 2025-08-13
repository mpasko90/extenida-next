"use client";

import { motion } from "framer-motion";

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
      <main>{children}</main>
    </motion.div>
  );
};

export default PageLayout;
