import React, { useRef } from "react";
import { useState } from "react";
import "../Flipcard.css";
import { motion, useInView } from "framer-motion";

const Card4 = () => {
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
              <img
                alt="inventory"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+UlEQVR4nO2TwQ3CMBAEj3pogAfF0UAeNAQSiBdQAR9EI8MnlkCKEztx4BztSPlEt9aNNzEToh6AFbABGuDZPk37bmXeAdbADngQ5wXsga0rKdKW9ynFtOX/K8U8y/9Git8uX1bKyfLTpIAj9XDoE6kKk4gzTI04w9TIEhqxP4FEIqiRidBD2dBSRYA7w9xqEElCIh+okRRIJOkw0z8y7w2WPs+KhiTiv5Ebw1zdi5QGiUTouKkLw5zHzgf6hi1GTihhqa9c7nxAIjFybqorlzsfyJkdFZLIADbhctVICmM/xUDO7KhQ7mISKd2IR6xH5Ew9nKIiQlgx3uhUBwVyNjMpAAAAAElFTkSuQmCC"
              />
            </div>
            <p className="font-medium text-lg text-center mt-10 mr-1 ml-1">
              A web application to manage an inventory of games, along with
              their developers and genres. This app allows users to add games,
              developers, and genres to the database.
            </p>
          </div>
          <div className="back">
            <div className="flex flex-col justify-between items-center">
              <p className="text-center font-medium text-lg mt-2 mr-1 ml-1">
                This inventory app is built using Node.js for the server-side
                logic and Express as the web framework. PostgreSQL is used as
                the database to store the games, developers, and genres. EJS
                (Embedded JavaScript) is utilized as the templating engine to
                render dynamic HTML pages.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card4;
