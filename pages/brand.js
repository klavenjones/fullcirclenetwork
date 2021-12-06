import { motion } from "framer-motion";
import { NavBar, Footer } from "@components/layout";
import { Brand } from "@components/views";

export default function BrandPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavBar />
      <Brand />
      <Footer />
    </motion.div>
  );
}
