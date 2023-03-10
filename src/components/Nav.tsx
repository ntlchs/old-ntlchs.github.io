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
      <a
        href="#projects"
        className="text-lg w-9/12 font-bold border nav hover:scale-105"
      >
        My Projects
      </a>
      <a
        href="#about"
        className="text-lg w-9/12 font-bold border nav hover:scale-105"
      >
        About Me
      </a>
      <a
        href="#contact_form"
        className="text-lg w-9/12 font-bold border nav hover:scale-105"
      >
        Contact{" "}
      </a>
    </motion.div>
  );
}
