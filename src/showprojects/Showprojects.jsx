import React from "react";
import Projects from "./projects.json";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Showprojects = () => {
  return (
    <>
      <h2>Projects</h2>
      <div>
        {Projects && Projects.projects.length > 0 ? (
          Projects.projects.map((item, index) => {
            return (
              <ul key={index}>
                <li>
                  <Link to={item.url}>{item.project}</Link>
                </li>
              </ul>
            );
          })
        ) : (
          <motion.div
            className="box"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        )}
      </div>
    </>
  );
};

export default Showprojects;
