import { motion } from "framer-motion";
import { Building2, Rocket, TrendingUp, Sparkles, Globe, Zap } from "lucide-react";

const partners = [
  { name: "TechVentures", icon: Rocket },
  { name: "InnovateCap", icon: Sparkles },
  { name: "GlobalFund", icon: Globe },
  { name: "StartupLabs", icon: Building2 },
  { name: "GrowthPartners", icon: TrendingUp },
  { name: "AccelerateVC", icon: Zap },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const PartnersSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-3 tracking-wider uppercase text-sm">
            Trusted By Industry Leaders
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Backed by the <span className="text-gradient">Best</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're proud to partner with leading investors and organizations who believe in our vision.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 flex flex-col items-center justify-center gap-3 group cursor-pointer transition-all duration-300 hover:border-primary/50"
            >
              <partner.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="glass-card p-8 md:p-10 relative">
            {/* Quote decoration */}
            <div className="absolute top-4 left-6 text-6xl text-primary/20 font-serif leading-none">"</div>
            
            <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 pt-8">
              Hoollow is building exactly what the startup ecosystem needs - a unified platform that brings 
              together all stakeholders. We're excited to be part of this journey.
            </blockquote>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                <span className="text-lg font-bold text-primary">V</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">Venture Partner</p>
                <p className="text-sm text-muted-foreground">TechVentures Capital</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
