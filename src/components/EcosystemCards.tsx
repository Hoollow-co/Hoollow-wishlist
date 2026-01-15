import { motion } from "framer-motion";
import { Rocket, TrendingUp, Briefcase, GraduationCap } from "lucide-react";

const ecosystemData = [
  {
    icon: Rocket,
    title: "Startups",
    description:
      "We help startups scale faster through mentorship, funding access, and technical support.",
  },
  {
    icon: TrendingUp,
    title: "Investors",
    description:
      "Discover curated, high-potential investment opportunities aligned with innovation.",
  },
  {
    icon: Briefcase,
    title: "Professionals",
    description:
      "Empowering professionals to connect, collaborate, and grow with next-gen companies.",
  },
  {
    icon: GraduationCap,
    title: "Learners",
    description:
      "Helping learners build industry-ready skills through real-world exposure.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const EcosystemCards = () => {
  return (
    <section className="section-padding relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What is <span className="text-gradient">Hoollow</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A unified platform bridging the gap between visionary ideas and
            strategic execution.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {ecosystemData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-card-hover p-8 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
