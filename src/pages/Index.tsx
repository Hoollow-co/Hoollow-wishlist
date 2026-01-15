import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { EcosystemCards } from "@/components/EcosystemCards";
import { StatusSection } from "@/components/StatusSection";
import { CTASection } from "@/components/CTASection";
import { PartnersSection } from "@/components/PartnersSection";
import { TeamSection } from "@/components/TeamSection";
import { Footer } from "@/components/Footer";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    }
  },
};

const sectionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    }
  },
};

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen bg-background"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <Navbar />
      <main>
        <motion.div variants={sectionVariants}>
          <Hero />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <EcosystemCards />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <PartnersSection />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <StatusSection />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <CTASection />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <TeamSection />
        </motion.div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
