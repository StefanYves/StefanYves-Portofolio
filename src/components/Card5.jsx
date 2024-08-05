import React from "react";
import { useState } from "react";
import "../Flipcard.css";
import gd from "../assets/gd.png";

const Card3 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div onMouseEnter={handleCardHover} onMouseLeave={handleCardHover}>
      <div className={`card ${isHovered ? "flipped" : ""}`}>
        <div className="front flex flex-col">
          <div className="flex items-center justify-center mt-20">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADuUlEQVR4nO2aS2xMURjHR9EqLYIuKLEgYtHExlLsPNpKPBYSFlQ8FlKPjbCgHgkRkS5trEksxE4IKiHe1CMRrxJpvUJoqKRE0598M/9pTqf3MXdmOu4k/slk7j3fd75zfveec+953EQiRwHjgNPAH1K6D8wL8K8C3pKbeoArQGOu9Q0COalC+oBeHX8AKocBxNWhQkJUqvJ2N+qAMcATFbSyAPGTcs6nAbuB3ykLDXlDKPACBXzgpB1V2pFCg6QlGNPlRCEE7FLAE07aaqVd9MkzAnhEBCWGxrA7Y/peKJCzCrjOSZuttC8+ecqA9nxATEG2yALeK96cjCverfSZecZPKqotaiEzFeurVT7D1ibbqlIAWa1Y5z1sx2U77GErB54TQYlhBmlVrP0etrWyXfABeRYnkJuKtcTDNle2z3mWkVRUW5QCyjRcMNX42Hv97HECmaU4HwN8HstnQWz7CLBccS4F+JyRz6bY9hFgr+K0BvgclM+xPMpJKqotSgGnFGdjgM8a+ZyLM0ib4iwK8Fkonxtx7iNPFacuwCf9CH4Z5z7yTXEmB/hMkk93HuUkFdUWpYB+xRkR4GODR1N/nEGSysUvbn0kX5BnJQ8SRfwHyfFK2ToT8A7oAur9/GLfR0gBpNVZsn2ECCD5lFMMkHrBdAJLSw4EqIhakVj2EZyrHxEkXn2E1JPKmlX5cBRGEUFwVuI7gAO2kF2KIHs8oK6nYUoGJDEYarGamqmlZEESqWODGZhMlTJIuU77YgdCahdqB3AH+GlrWX4gfpDaivsEXAU2A6OLCgLMcLbSMvUjC5D0amOmbgNTigLC4P3Axxrh2kbmBPWF+VmANADrgVpgqi3WOeOyG8DIYoDsdCCqsi0srABB2ZjM1FQMkLvybXSublfYnMPjfEg+YIPc2ooB0iPfqihDdY/zIfnU90KXiigQiGcFs6h4aD5nqYjYg6A1r2zz/dOmBYx3H8VKG7Sj65PPnnyh++QUCMRegKZlOq/X02ZgFmifacjnlscC95aAfKvkczOkDn1eEzg7d0cQYSDb5WzvkmoPu92NN/JpdtKblGZv8uke+SYCL+SzNaQOHV4TOF2cIQvkfkEqnE8tXmuXqlq/FQ7EQ3diBYzSyw4NZ9apKY1VjPTssD1sqALsz5jAVes/PcreFwqiQNNDvhsxiFqPfDXAvZB807IcXVz3iXEtbM0gM5jdmW3WD/QAsJ9tTTf7TXGVb7Sa5wN9BmU/O7YRw8AsMkuYFuAV8Muak90JP4i/0WxuZUCYVz8AAAAASUVORK5CYII=" />
          </div>
          <p className="font-medium text-lg text-center mt-10 mr-1 ml-1">
            An application for a barbershop to manage appointments. Clients can
            easily book appointments, and admins can view reports and manage
            bookings through a dedicated admin page. The app features email
            confirmations for clients using EmailJS.
          </p>
        </div>
        <div className="back">
          <div className="flex flex-col justify-between items-center">
            <p className="text-center font-medium text-lg mt-2 ml-1 mr-1">
              This barbershop appointment app was developed as my bachelor's
              degree final project. It leverages the power of React for building
              the user interface, Firebase for authentication, data storage, and
              hosting, and Tailwind CSS for styling. EmailJS is used to send
              email confirmations to clients upon booking appointments.{" "}
            </p>
            <p className="text-center font-medium text-base mt-2 ml-2 mr-1">
              <span>
                Admin Account: Email: contactmmbarbershop@gmail.com Password:
                123456
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
