import React, { useRef } from "react";
import { useState } from "react";
import "../Flipcard.css";
import { motion, useInView } from "framer-motion";

const Card3 = () => {
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
                alt="drive"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACnElEQVR4nO2ZO2gUQRiAV018oAaxCRG1sEkhEoiFoKRIIWpQSawCgigqxiZYahNO0thoJyI+UNAyphALhRjEgA8sfOADQfABEiP4Nip6fjLwHyzHLTv/7OzcgftVd3s7//zf7t7M/LNRVFBQUPBfAcwEjsjnxcAn7JgGzgPNUSMA7JDEuuV7CR1D9XaIgHnAK0loQo4tAKYUIl+BtnqLDFUltVGOH1TelVP1lGgFvlQldA+YAcwHJhUif4BV9RI5k5BUr/x+QHlXxuoh0SFXsRaPZCSbC7xWymwILXItJaF+OW9AKfIYaAolsdUioecmITNHAC+UMntCSDTJVbNhp7TZpRSZBBbmLTKoSOglMBuYBTxVypTylFgEvFcm1CVt+5XtvgFL8hI5qkzmgRm9pK0Zxe4r25/NQ2IF8FOZSE9VjD5l+zLQ6VtkRJnEREKcO8o4131KrAX+KhPoToi1CT09PiTMuumusuOrKTFvKOM9yTxJxmoNDWtSYnY5xNznq9awZdQy9pgy7jugxVetYTPKdCj+d1qGfdUaaVxQ9nFFGX8aWO6r1kjiN9Cu7KPTYTQ856vWSOKk6kq5z09lYLWvWqOaH8AyR5GVkpyGcV+1RjXHXCRifV506HNzWtDLDqvU1qjRAEZzHxJDAKxTPLMfTI0i7cYJR9nMQzYyJywDHpLz1xOW47Z3pQV4kxJsqlJXA7cIx9vKU2Arsy0l4KCc10tY+qwlYjKXEoKZheQcx/I1CyNqCRFpAz7WCLhbft8eUOIzsNRJRJLdn7DxZrZ4ngUUGXCWEBHz+NyssRW6N6DE7cpuTFaZdtlBeZhhc9qVX2Y9llkiJnMY2OL4uiALJW8Sknxz7LWaKTvz5jtwumFelBYUFBREvvkHhGzaj8LDM8IAAAAASUVORK5CYII="
              />
            </div>
            <p className="font-medium text-lg text-center mt-10 mr-1 ml-1">
              A web application for uploading and managing files. Users can sign
              in to upload files to their folders, view details of uploaded
              files, and download them.
            </p>
          </div>
          <div className="back">
            <div className="flex flex-col justify-between items-center">
              <p className="text-center font-medium text-lg mt-2 ml-1 mr-1">
                This File Uploader App is built using Node.js for server-side
                logic and Express.js for routing. Prisma ORM is employed to
                handle database operations with PostgreSQL, and Cloudinary is
                used for storing and managing uploaded files. EJS is used for
                rendering dynamic HTML templates on the front end, and Tailwind
                CSS is utilized for styling the application. Passport.js handles
                user authentication and session management.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card3;
