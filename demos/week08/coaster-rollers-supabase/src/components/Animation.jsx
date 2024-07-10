"use client";
import { motion } from "framer-motion";
export default function Animation() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 6 }}
      >
        <h2>The best coaster rollers in the world!</h2>
      </motion.div>
    </>
  );
}
