import { motion } from "framer-motion";
import "../styles/global.css";

export default function Nav() {
  return (
    <motion.div
      id="nav"
      className="flex flex-col w-11/12"
      initial={{
        translateX: 300,
      }}
      animate={{
        translateX: 0,
      }}
    >
      <a href="#projects" className="text-lg w-11/12 border nav">
        ✖ My Projects ✖
      </a>
      <a href="#about" className="text-lg w-11/12 border nav">
        ✖ About Me ✖
      </a>
      <a href="#contact_form" className="text-lg w-11/12 border nav">
        ✖ Contact ✖{" "}
      </a>
    </motion.div>
  );
}
