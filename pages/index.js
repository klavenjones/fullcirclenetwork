import { motion } from "framer-motion";
import { NavBar, Footer } from "@components/layout";
import { Featured, Header, Description, Brands } from "@components/views";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavBar />
      <Header />
      <Featured />
      <Description />
      <Brands />
      <Footer />
    </motion.div>
  );
}
