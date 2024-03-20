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
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE+UlEQVR4nL2ae4hVVRTGZ1JLzUcmvkqLIRCyTOuvTLIE6W32hxEVFRVRqVlBRhkYWWiBgZBQSWEiZJAkJhRRYTlZYX+kwhjYw8qoMStzLN/5i2XfkTW7fe45p+4+HwzM/tZee33rnnv2Y+3b0lIBQE/gamAxsB74GvgNOAzsA3YCXwJvA08Dk4ETcsb6COgArmupG8DnVMeWnLE82oG2upIYqKAHgMeAKZmKiLhrgQXAIbUHNEjEnqbhZ2BiHYmco4BfhGIatLeLGt0gkQuBbe5Duih1Ilcq2LsVEvlE1KS8RPT/KXrnDJ3AqJSJ3HksDCyvkMhqUTc0SkTtPsBG0W+lTGSegiyokMjzou4vSkTcSOB3mS5PlcgSBZhVIZHHw+QbJWIAHpLpg5YUAF4LvyYlEpkhammFRPoDfwBHgbNSJPK+Yk+pkMhNot4om4gBWCHzgy3NBrBZg4+vkMhVotorJnKbzKtTJPKNBj+zQiITRHVUTORcmb9KkchPGnyo42xrsb5B+2z5fB8Zz94BQ2vENli2Q3l7tf+TSJcG71fBZ7h8fo3YjsjWI2JrBQ5WjVdWVLZv6lnBp7d8DkZsmdATcxLZr6fWuxn6/eC7Fbh/BZ8B8tkdsZlQYkKBobLtaob2cPBNGnxsBZ+x8tkUsf0pW9+I7RrZNjRDe97K/lQFn/nyWRKx7c17B4AXZJvXDO2xT/cvnQTHl9z2Zyv0eRF7tqcaGPD9nO1ffk0BsEgBfgEubtBvgo69hsU5feyIbBgU8LPFH5/Gmw6gF7DKzfEPRPrMcjPSGuCknLHswzAMdlxf4Efx05IlomA9VFjIFrQZznavOLM922iq1tHWMMRxD4vbGFsokwC4UUE7HWenO8PNJfyzvsPUHuS+bpel1t8SnOgM+xxnE4GhTwn/bl8t4Jmk55AGQuw0Z9jhuB3iRhb4tqp6clS1shHuQ5hYSwJOzDgF3hzZ6o8r8LXDk6FL7UfUfqcO7aEYqyIa1jlunbjJBb6j/NMEPlV7eh3aQzHXK/jrjltVRpAtdP5pupd8SB3aQzH3KPiLjlsq7u4C30nq96HatgMwDK9DeyhmroIvdNxCcXMLfKeq31q1P1N7ah3a87Yrcxw3R9yiAt9b1G+F2k/mVVuSA1im4HdEqpHLCnzvU7/nghmws7YV3YmxfVS3PZHddYhbU7JqOd9x3ybd8TYQsyFcwNxL3F7gaxdF3epW7gnPTq09FLNVgcdEyjgdBb6vqN/tjrs1nM5rAfCdAp/huDZx2wt834x8LS/IOxYnhTs4+TrXsOylLfDN7kIujdSydqXWnlfn6h+pmuwp8N0S7smsLMQ/OJBaeygmu/vrGZwgDYcKfO02GF9td76HU2sPxVghAl/S1OnRcKRk+XVE5Gl2pdYeijkYFth05jbsL/DdE1ZQXHl1Z2rteXWpAZEr7K6S5ddejhsjbltq7XnFg9Mcd3rJWetI5P26Qtx7qbXnLYh+5hlXckHMjrUnO26muJdTa89bC47fvtr/ZQoIriB+auS6bWZq7aGYl8K9kV1Dl9mOu1nr2A8DVIDICnOli+RNgduKr3TcyjKfKvCx+l2i9nS1t9ahPRTTpnKOHVNH62+vuLaST9N+nHM+8IPad9WXQXdB2RPweLWEn/16KMTa2g9VTpBdAdiW3PZd9re87J0f8Khdkuq2+Am/pvwX/A1U8tTAcb0qYwAAAABJRU5ErkJggg=="></img>
          </div>
          <p className="font-medium text-lg text-center mt-10 mr-1 ml-1">
            Presenting my restaurant webpage project, a fusion of HTML, Tailwind
            CSS and Webpack
          </p>
        </div>
        <div className="back">
          <div className="flex flex-col justify-between items-center">
            <p className="text-center font-medium text-lg mt-2 ml-1 mr-1">
              HTML structures the project, and Tailwind CSS adds the stylish
              flair.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
