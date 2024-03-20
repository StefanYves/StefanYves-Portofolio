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
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAYAAABznEEcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEq0lEQVR4nOWaTWxVRRTHH33WVt2IX7jFak0MIZEStRtX4gdbobVqomHBBjQBUePHxhCXsOJhSIrmWdEKJSHsofEjfge1SDBVsIkmFo2fMSRtsT9z8H/NdN7M3NtrW/OeJ5nc9s6ZO/O7c86cc2deBbgBGAWmaS6ZBo4DKysCmAIOAPtKlDPATMm2M2q/r0QZ1rhHKyIarpQU4CBwvmTb89a+Ur7vERu//WFSb1KIug2+AQIYAmpANdDoEmDQSgoCuAJ4GvgY+FbXp4DLUxDo2dZPoO8qsNfGVwTCFE1ec0EEcEh1u2IQwLXAmPTOAe/oavI5cE0CYrf0DrkgArDxmNSKQLgNLoJ4APuBtgTEUek9k70EPeM53T+SgGjT8/8BCY0nFyICEgTwIYBu6b3um4PqbUUxuTEEEQEJAuRCOCCvOutyA0AA4iHp3u/rqX6j6gdSjg0sc8za5M2In+RCuCYUfBMBiAHp9kUg+lX/QA5E1ZmBBh8pBBHwgaHElLoQXVmnEYjDwOzFKBs3p6oDMOT7SCGIkBPnOJfv2FnbnUC77rUDL2amkXDsamBRaXD2IhCDIR/wOtiTgFgOfCS934FPdDX5ELgyAbEn8qJckMGiELsiTlxVR7WcYNcBbFVe9rWuW4BLPT0foqbnh3yvTePKh2iJtKOZISY0mDLFcqMLJdteUPuDJcuEC2F5+c8ly5SWzTJtZxegb1rKnOpOxVoLWomGlh+tyYMAOoF7gEeBu+3/+UDwd+B8UKnMTfOF+FRTtTbQqBf4DXgvBWFpBfADc8XS8f48COAqRXZfjrhpfB5ENtA5IN79nhiE8iez9e+BbcB6YLv+n3VBAnGiU8ERPbdPSeMbuveZ+2GVlzvNAYkB+BAaxDkN+DpPbwUwqdIZgXhc43khYAXPqu7JQhAeyC8xgACE2b7Jdl9P9U+ofl0E4m311R7JFn601KUwhJQsVchkU0THhTAnNrk3onuf6h+JQHxl5hRqq/p3ge/+65nYofq7IhBvFZiJD5bSJ1Z4etfLH6yuIwLxmMazMwDxvOp2LMXq1K9VaFI+sF7XSd3f6Oj6EB1OGj+iZ/Xp8xQt/5ctVZzo06BdsRnYUCBOLNfHjwG7YrHj6oWM2LemIBzTWmdObD6QmVAeRCba6B5Q1O7636TiU62QxU60wvdEvRXMqd6SEMAabWOeUnkZWJWCsFXLlt9QZFd9D/B+trqV2O3YXXi3A9gse/0T+BIYlxPaqdLDCYjuRGTv0X2r717sfafbBHDKffN6y+MCWZWI2A2R3QPoXYodwGEdCN4SMTGbkf0xiADIphBACGIh92K/sS8oV9lraLPxRYGInYGY/AHcGdBJ7YrXnZRjJJLZRiHOWv6UA3GyAISZ3096/q9mpvOAWAa8VPp8QoMyc7o50Gi1zOmVFITyr8yEtoay4kU9KQLu0Ko05oKYMwOnBbg6BuEB9Oak94t6ZrdFIDPaYRjTijXjf6Z6S2xXwoldkK5/cXq6txCEFG7XSnVW2/MH3E2zCITNwgkfwAM5kc1GiXPsWqFz7GZNO6ZtCWv233aMKi8fbtJf2Rw3iJX63VAz/t7pmJ3E/gUTeqtQxG695AAAAABJRU5ErkJggg=="></img>
          </div>
          <p className="font-medium text-lg text-center mt-10 mr-1 ml-1">
            Introducing a dynamic 2-player Tic Tac Toe game crafted with
            JavaScript for an interactive gaming experience. The simplicity of
            HTML, complemented by CSS styling, ensures an intuitive and visually
            appealing interface.
          </p>
        </div>
        <div className="back">
          <div className="flex flex-col justify-between items-center">
            <p className="text-center font-medium text-lg mt-2 ml-1 mr-1">
              JavaScript drives the game's functionality, allowing both players
              to take turns seamlessly. Immerse yourself in the timeless fun of
              Tic Tac Toe, where skill and strategy meet in a friendly duel.
              Enjoy a classic gaming experience with this JavaScript-powered
              2-player Tic Tac Toe, perfect for challenging your friends and
              reliving nostalgic moments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
