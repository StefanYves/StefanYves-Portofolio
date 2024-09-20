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
                alt="messageBoard"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADs0lEQVR4nO2aSWgUQRSGJ9G4RFCIEfeEKEYIruAuHtQQDSp4MGhUPIkHQb0ISkQQcxFRcAmiKC4gUcGD4sENYhS3uEURETwo4r5gDHFD43xS4TUUQ3emqqd6Zg7+lxm6ql7VV1P16tXricUyLKAvsBQ4CjwAXgNt8tkMHAOWAYWxbBQwFNgL/MBMP4A6oCiWLQKqgBZDAD+gddkAsQs3qgNyMgVRi1ttywTETCBuMLgGYARwyRCmPJ0QXYGnhgOrlTabDes/A/LSBTIXc221BFGa53rA44E9QCNwGRgrz49GDHLcFUAesB34m9DBOClvjhjksQuIYUBTQAd9pc7ngPJbQL5hPz2B6wF2WlOFWAx87WSmCqRea0D5baCXYV/5nYC0hAVQRg+SXGVS/wnRLq1HpgO/QTgtkfaHIwY5bAoSVkekfWXEIOVWIEaV/dvnWHiuWkuQR0CXtICIjTHAT4OBXQFGyjmUTMrdTzEdwEIXIGJrNW613nQ5bNIPuVRBxO5K4E+KAHFgi+nhcyKxtQsQsb8xBYiPwHyTTgYBd/wsOAQ5FQKgVd0/vEM2WQeTgbdBlhxBqI3828f8feAscA94Id7oArADqFCrxLSDBcm8igOIHBlc4nrfbzzQZAJ6A2ciBhklG71NZnyfFyFr14AyoBgYDUwDcsPOWA3QHtXS6iQ1dDKhO5XXmiTlvWyMqbXYVb5X+IXeEUHk+Czpm8BAKS8BHtoYVLoGDNBmqSlNILqOe/sFmAF8UPvIFsT7SafKs+56uB4xiNo7G7TnqzTvFgrEz+gKleGLEEQt49na5B1KGE9oEE9HgB5SbhachYMpkc+Bsj9wDYKE3x0dRSlxvS8DxuAEBPnp50QIUZ0kKx93BYKcLTVBiWOgG7BWPN134Jt8XxOUCVQXImCnQd9xlyCe1OnfJ6FtqfL1SZZnaUKbAov8bjwKEOUSqxPedQSle3SpOlVau+UBwWNaQF4B07XE9DbDDLuuA2oZio2JEummFaQB6C91h6SQIlK6q7ncQuB8OkDiMvMdUSgwC3hP6lKesFI7FDcEBasuQD55blc8zBafRHUqUpO0WwtWZwLvXIMo11ksZf2Ai0SnRi3aHeyT4w0F4s1SnhaBviF6qSi3XHMk+q9vDaJc5CJt3a6zcJEu1C4Audr1+4stiPrXwXDt2nuazOmc9kqiSL1+sAHxotwJwHMyrxdqLPrYbGA67h1kj35Z/8sBqCd7VW8Dks2K24BcJXvVYLW8/iuWef0DMhfRf6M0oCMAAAAASUVORK5CYII="
              />
            </div>
            <p className="font-medium text-lg text-center mt-10 mr-1 ml-1">
              A web application where users can write and view messages. This
              simple message board allows users to enter their messages, which
              are then visible to all other users.
            </p>
          </div>
          <div className="back">
            <div className="flex flex-col justify-between items-center">
              <p className="text-center font-medium text-lg mt-2 ml-1 mr-1">
                This mini message board is built using Node.js for the
                server-side logic and Express as the web framework. PostgreSQL
                is used as the database to store user messages. The
                express-validator middleware is used to validate user inputs to
                ensure data integrity and security.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card3;
