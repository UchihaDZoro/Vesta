import { motion } from "motion/react";
import {
  ShieldCheck,
  BrainCircuit,
  Activity,
  MapPin,
  BellRing,
  Linkedin,
  Mail,
  Phone,
  ArrowRight
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-neutral-950 font-sans">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-rose-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <ShieldCheck className="w-8 h-8 text-rose-400" />
          <span className="font-display font-bold tracking-widest text-xl text-white">VESTA</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://www.linkedin.com/company/vesta-wearables/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="hidden sm:inline">Follow Us</span>
          </a>
        </motion.div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <section className="pt-24 pb-32 md:pt-32 md:pb-40 flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl flex flex-col items-center"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-rose-300 text-sm font-medium mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              Intelligent Personal Safety
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight mb-6"
            >
              Protection that acts <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-indigo-400">
                when you can't.
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed"
            >
              Vesta is an AI-powered safety wearable combining motion, voice, and biometric signals. We detect threats and respond automatically, preventing dangerous situations before they escalate.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <a href="#mission" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-rose-500 text-white font-medium hover:bg-rose-600 transition-colors">
                Our Mission <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium transition-colors border border-white/5">
                Contact Team
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-24 border-t border-white/5" id="features">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Activity className="w-6 h-6 text-indigo-400" />,
                title: "Multi-Modal Sensing",
                description: "Fuses motion, voice analysis, and biometric signals to accurately contextualize your environment and detect anomalies instantly."
              },
              {
                icon: <BrainCircuit className="w-6 h-6 text-rose-400" />,
                title: "Proactive AI Response",
                description: "Unlike traditional SOS buttons, Vesta utilizes advanced decision-making algorithms to initiate protection automatically without manual triggers."
              },
              {
                icon: <MapPin className="w-6 h-6 text-cyan-400" />,
                title: "Discreet Alerts & GPS",
                description: "Seamlessly and silently shares your live location, initiates alerts, and captures critical information to emergency contacts when threats arise."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Mission Statement */}
        <section id="mission" className="py-24 md:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative p-10 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-indigo-950/40 to-rose-950/20 border border-white/10 overflow-hidden text-center max-w-4xl mx-auto"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <ShieldCheck className="w-64 h-64" />
            </div>
            <h2 className="text-sm font-semibold tracking-widest uppercase text-rose-300 mb-6">Our Core Vision</h2>
            <p className="font-display text-2xl md:text-4xl text-white leading-snug md:leading-snug mb-8 relative z-10">
              "Starting with women's safety, Vesta aims to create a scalable personal safety ecosystem that ensures protection is continuous, responsive, and always accessible."
            </p>
            <p className="text-neutral-400 text-lg relative z-10">
              We focus on preventing dangerous situations before they escalate, rather than simply reacting to them.
            </p>
          </motion.div>
        </section>

        {/* Team Section */}
        <section id="contact" className="py-24 border-t border-white/5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
              Meet the Founders
            </motion.h2>
            <motion.p variants={fadeUp} className="text-neutral-400 text-lg max-w-2xl mx-auto">
              The team behind Vesta is dedicated to engineering the future of personal security and wearable AI.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                name: "Pathan Gulamgaush",
                role: "Founder",
                linkedin: "https://www.linkedin.com/in/gulamgaush-pathan/",
                email: "pathangulam203@gmail.com",
                phone: "8758964805",
                imagePlaceholder: "PG"
              },
              {
                name: "Nancy Srivastava",
                role: "Co-Founder",
                linkedin: "https://www.linkedin.com/in/nancy-srivastava-2k05/",
                email: "edhas6514@gmail.com",
                phone: "9219342528",
                imagePlaceholder: "NS"
              }
            ].map((person, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="flex flex-col items-center p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 border flex items-center justify-center border-neutral-700 text-2xl font-display font-medium text-neutral-400 mb-6">
                  {person.imagePlaceholder}
                </div>
                <h3 className="text-2xl font-display font-semibold text-white mb-1">{person.name}</h3>
                <span className="text-rose-400 font-medium text-sm mb-6 uppercase tracking-wider">{person.role}</span>
                
                <div className="flex flex-wrap justify-center gap-3 w-full">
                  <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 transition-colors" title="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={`mailto:${person.email}`} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 transition-colors text-sm font-medium">
                    <Mail className="w-4 h-4" /> Email
                  </a>
                  <a href={`tel:${person.phone}`} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 transition-colors text-sm font-medium">
                    <Phone className="w-4 h-4" /> Call
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 relative z-10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 opacity-50">
            <ShieldCheck className="w-6 h-6 text-white" />
            <span className="font-display font-bold tracking-widest text-white">VESTA</span>
          </div>
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Vesta Wearables. All rights reserved.
          </p>
          <a
            href="https://www.linkedin.com/company/vesta-wearables/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
          >
            LinkedIn Page <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </footer>
    </div>
  );
}
