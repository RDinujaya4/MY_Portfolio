import { Hand } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import rayanPortrait from "@/assets/rayan-portrait.jpg";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, ease: EASE_OUT },
  },
};

const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 1.3 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 2, ease: EASE_OUT },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-hero-bg flex items-center justify-center pt-20 pb-10"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={stagger}
        >
          {/* Left side - Text */}
          <motion.div
            className="space-y-6 text-center lg:text-left order-2 lg:order-1"
            variants={stagger}
          >
            <motion.div className="space-y-2" variants={fadeUp}>
              <p className="text-text-body text-lg font-medium">Hi</p>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-4.5xl font-bold text-text-large"
                variants={fadeUp}
              >
                RAYAN DINUJAYA
              </motion.h1>
            </motion.div>

            <motion.div className="space-y-4" variants={fadeUp}>
              <motion.h2
                className="hero-text text-text-large"
                variants={fadeUp}
              >
                SOFTWARE
              </motion.h2>
              <motion.h2
                className="hero-text text-text-large"
                variants={fadeUp}
              >
                ENGINEER
              </motion.h2>
            </motion.div>

            <motion.p
              className="text-text-body text-lg max-w-md mx-auto lg:mx-0"
              variants={fadeUp}
            >
              I'm a passionate software engineer specializing in full-stack
              development, mobile applications, and modern web technologies
            </motion.p>
          </motion.div>

          {/* Right side - Portrait */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            variants={zoomIn}
          >
            <div className="relative">
              <div className="w-80 h-96 md:w-96 md:h-[28rem] lg:w-[420px] lg:h-[520px] rounded-3xl overflow-hidden bg-card-bg shadow-2xl">
                <img
                  src={rayanPortrait}
                  alt="Rayan Dinujaya - Software Engineer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Animated Hand Wave (unchanged) */}
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent-purple rounded-full flex items-center justify-center shadow-xl">
                <Hand className="w-8 h-8 text-white wave-hand" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
