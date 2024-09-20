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
                alt="members"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADiElEQVR4nO2ZW0hVQRSGd0KhaSVUXoII0h6sQH0RKcKgDAwiKgjCIIhuUhEUQS9RGliRD2H6EEVRPgSF2ItFdNMyMCiLLLOIKLrQRSJMu5j5xcQ6sJFzZvbZs5UT7B/Oy5l//rV+Z86amaXjhAgRIoRfAGOBFcAJ4B7QA/wCcpz/AcAYYAPwjuioB5KdRAaQDDRixhDQAaxxEnQlmogflU4iASjHH/4ApaOdbBKwCDgJPADeAqnyfRf+0SL6aVIYXgP9QPFImJgL3B2WwFUZK8IO6jczXbS6Xd/fAjYDWUGZUIn2RUmgTsY3YY9lonU+ythXYJWtiXTgY4zge4VzIAAj20WrNsb4dyDPxkilJvhB4ewO0MhRDee4jZFOjfAp4awNwMhq0Tqj4byxuWYMaoS7hJdh4HkpwTNE66GhKKT4PeTU5Fj4ojjCfWxhpN0Vr8/ATfW7Kq80oueEU4o9ikTrmobT48uECNdphCPld1sARlaK1gUN57SNkXaNcJNwFgdgZKZodWg4N22M9GqE1fkyTj5PLUxEbgiZwG8N772NkVZDEhtdleu+DxPX1aErGtUGbrONkWJVvzXiasXmWZzwW2VuGTCg4amiU+DbiASpMiRzRXiFcZoYdF0WTau538qEBMk3BFH7OkO4N+Iw0ihzZnng5lsbkWDNhkBVwsuTRoMJnyKNCM1FMYKLgZiQYFnooR5Cs4V7BDNqhFsg3RUdsoM0ol6CJuwU7jEP3Frh7vLAzQrSSLaHgBXCVb0sE04It8IDtzAoEynAWUMwdbksE36Dh+QaXGVXdzFFCki6bZ9qPfASPZ4By12mTXyE869RJx3J5wb+B2AHMDkeA5nyMoz1xI28IS7JXzTJdbpfxjtUJZwqc1UnZqloKu1Y+Cnv+iWmLbQP+KYRUo2AGiDXNW+87PXPxA9Vhre4H0xArsRQsXRQXZ350VZBd9MdkGo0xTUnBzjk8dwwQWkcdje5VSyJOWC4HZS7S+sTDbkzckYIv0S2kG4L+MWQaJe44s0x5PdD3Q4UcY+GpJpkaa6rhOk2HCRaIlsYmAC0abj1jrQ/o+EFMFGE1nl4T48E+lRsyWGSpiJ2O5oEF7jaPaZaP5IYUjlILgtjcPrV4O0oA60ycZqhio0WelUukpPa7sNxx3SmmF5to4lqwxGoNfKIxEGnjREv/0obLbT5NhIiRIgQIZwRwl/ZuvOtuaRGQAAAAABJRU5ErkJggg=="
              />
            </div>
            <p className="font-medium text-lg text-center mt-10 mr-1 ml-1">
              A web application where users can write and view messages. Users
              must sign in or log in to participate, and only members can see
              who wrote each message and the timestamp. Members can become
              admins, and admins have the ability to delete messages.
            </p>
          </div>
          <div className="back">
            <div className="flex flex-col justify-between items-center">
              <p className="text-center font-medium text-lg mt-2 ml-1 mr-1">
                This Members-Only Message Board is built using Node.js for the
                server-side logic and Express as the web framework. PostgreSQL
                is used as the database to store user messages, user roles, and
                membership statuses. EJS is utilized as the templating engine
                for rendering dynamic content on the front-end, and Passport.js
                is employed for user authentication.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card3;
