import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Vision from "./components/Vision";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />

      {/* প্রতিটি সেকশনকে এনিমেশন কন্টেইনারে রাখা হয়েছে */}
      <main>
        <section id="home">
          <Hero />
        </section>

        <motion.section 
          id="about"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <About />
        </motion.section>

        <motion.section 
          id="products"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Products />
        </motion.section>

        <section id="vision">
          <Vision />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;