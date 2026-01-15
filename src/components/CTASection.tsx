import { motion } from "framer-motion";
import { ArrowRight, Building2, TrendingUp } from "lucide-react";

export const CTASection = () => {
  return (
    <section id="connect" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Connect with <span className="text-gradient">Us!</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Partner with us to bridge the gap between strategic capital and
            visionary innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {/* Investor Card */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            className="glass-card-hover p-8 md:p-10 group cursor-pointer"
          >
            <div className="flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Investor</h3>
              <p className="text-muted-foreground mb-6 flex-1">
                Explore curated investment opportunities and connect with
                promising startups shaping the future.
              </p>
              <motion.button
                className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                Join as Investor
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Startup Card */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            className="glass-card-hover p-8 md:p-10 group cursor-pointer"
          >
            <div className="flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Startup</h3>
              <p className="text-muted-foreground mb-6 flex-1">
                Get access to mentorship, funding opportunities, and a network
                of industry professionals.
              </p>
              <motion.button
                className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                Join as Startup
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
