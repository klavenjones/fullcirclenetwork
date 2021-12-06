import { motion } from "framer-motion";
import { NavBar, Footer } from "@components/layout";
import { Contact } from "@components/views";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavBar />
      <Contact />
      <Footer />
    </motion.div>
  );
}
