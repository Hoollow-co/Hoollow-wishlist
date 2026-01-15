import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-12 relative">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6"
      >
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-foreground">Hool</span>
            <span className="text-gradient">low</span>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            © Hoollow Co. 2026 | Made with{" "}
            <span className="text-primary">❤️</span>
          </p>
        </div>
      </motion.div>
    </footer>
  );
};
