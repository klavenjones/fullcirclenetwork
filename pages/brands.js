import { motion } from "framer-motion";
import { NavBar, Footer } from "@components/layout";
import { BrandsList } from "@components/views";

export default function BrandsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavBar />
      <BrandsList />
      <Footer />
    </motion.div>
  );
}
