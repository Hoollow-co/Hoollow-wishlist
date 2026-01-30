import { motion } from "framer-motion";

// Team member images
import ayushkumar from "@/assets/team/ayush-kumar.png";
import anjaniKrishna from "@/assets/team/user.png";
import anulome from "@/assets/team/user.png";
import darshPatil from "@/assets/team/user.png";
import faiyan from "@/assets/team/user.png";
import jayish from "@/assets/team/user.png";
import harshraj from "@/assets/team/user.png";
import sakshi from "@/assets/team/user.png";
import yash from "@/assets/team/user.png";
import rajat from "@/assets/team/user.png";
import sarvesh from "@/assets/team/user.png";
import anushka from "@/assets/team/user.png";
import saksham from "@/assets/team/user.png";
import sumanth from "@/assets/team/user.png";

const teamMembers = [
  { name: "Ayush Kumar", image: ayushkumar },
  { name: "Anulome", image: anulome },
  { name: "Jayish", image: jayish },
  { name: "Darsh Patil", image: darshPatil },
  { name: "Sarvesh", image: sarvesh },
  { name: "Faiyan", image: faiyan },
  { name: "Anjani Krishna", image: anjaniKrishna },
  { name: "Harsh raj", image: harshraj },
  { name: "Yash", image: yash },
  { name: "Sakshi", image: sakshi },
  { name: "Rajat", image: rajat },
  { name: "Anushka", image: anushka },
  { name: "Saksham", image: saksham },
  { name: "Sumanth", image: sumanth },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const TeamSection = () => {
  return (
    <section id="team" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            The team that is powering the{" "}
            <span className="text-gradient">Next-Gen Ecosystem</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet the passionate individuals behind Hoollow.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 md:gap-8 justify-items-center"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="avatar-glow w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 border-border/50 group-hover:border-primary/50 mb-3"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <h3 className="font-medium text-sm md:text-base text-center group-hover:text-primary transition-colors duration-300 max-w-[100px]">
                {member.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
