import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";

const transition = { type: "spring", duration: 3 };

const Hero = () => {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/* TagLine section */}
        <div className="tagLine">
          <motion.div
            initial={{ left: "176px" }}
            whileInView={{ left: "8px" }}
            transition={{...transition, type: 'tween'}}
          ></motion.div>
          <span>Start your fitness journey NOW!</span>
        </div>

        {/* heroHeading Section */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Sweat</span>
            <span>!</span>
          </div>
          <div>
            <span>smile, repeat!</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to the fullest
            </span>
          </div>
        </div>

        {/* figures Hero section */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+56</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* HeroButtons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div 
          initial = {{ right: "-4rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
        className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* HeroImages */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial = {{ right: "6rem" }}
          whileInView={{ right: "19rem" }}
          transition={transition}
          src={hero_image_back} alt="" className="hero-image-back" />

        {/* Calories */}
        <motion.div 
          initial = {{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 Kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
