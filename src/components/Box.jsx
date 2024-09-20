import React from "react";
import { motion } from "framer-motion";

const Box = () => {
  return (
    <motion.div
      className="box"
      style={{ width: "100px", height: "100px", backgroundColor: "red" }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    />
  );
};

export default Box;
