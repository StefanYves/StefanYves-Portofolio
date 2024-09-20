import React, { useRef } from "react";
import { useState } from "react";
import "../Flipcard.css";
import rps from "../assets/rock.png";
import { motion, useInView } from "framer-motion";

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardHover = () => {
    setIsHovered(!isHovered);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div onMouseEnter={handleCardHover} onMouseLeave={handleCardHover}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : -50,
        }}
        transition={{ duration: 0.5 }}
        ref={ref}
      >
        <div className={`card ${isHovered ? "flipped" : ""}`}>
          <div className="front flex flex-col">
            <div className="flex items-center justify-center mt-20">
              <img src={rps} alt="" className="rounded-lg" />
            </div>
            <p className="font-medium text-lg text-center mt-10">
              Immerse yourself in my impressive rock-paper-scissors game built
              with React, Tailwind CSS, and Socket.IO. Engage in real-time
              battles, showcasing sleek design and seamless gameplay.
            </p>
          </div>
          <div className="back">
            <div className="flex flex-col justify-between items-center">
              <p className="text-center font-medium text-lg mt-2">
                To engage in gameplay, both you and your friend are required to
                join the same room. After completing your initial game, simply
                reset the game, proceed to join the room again, and continue
                playing. This process ensures a smooth and uninterrupted gaming
                experience.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
