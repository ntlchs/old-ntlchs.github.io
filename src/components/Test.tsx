import { motion } from "framer-motion";

export default function Test() {
  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
    >
      <html></html>
    </motion.div>
  );
}
