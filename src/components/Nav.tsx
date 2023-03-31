import { motion } from "framer-motion";
import "../styles/globals.css";

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
        className="w-9/12 border-2 border-black px-2 py-2 mt-2 mb-2 text-center font-bold text-n-black font-nunito text-sm mx-auto shadow-5xl bg-n-lightgreen hover:scale-105"
      >
        My Projects
      </a>
      <a
        href="#about"
        className="w-9/12 border-2 border-black px-2 py-2 mt-2 mb-2 text-center font-bold text-n-black font-nunito text-sm mx-auto shadow-5xl bg-n-lightgreen hover:scale-105"
      >
        About Me
      </a>
      <a
        href="#contact_form"
        className="w-9/12 border-2 border-black px-2 py-2 mt-2 mb-2 text-center font-bold text-n-black font-nunito text-sm mx-auto shadow-5xl bg-n-lightgreen hover:scale-105"
      >
        Contact{" "}
      </a>
    </motion.div>
  );
}
