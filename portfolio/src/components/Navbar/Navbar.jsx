import React, { useState } from "react";
import "./Navbar.scss";
import { HiMenuAlt4, HiChevronDoubleRight } from "react-icons/hi";
import { motion } from "framer-motion";

import Images from "../../constants/index";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={Images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["Home", "about", "contact", "skills", "projects"].map((items) => (
          <li className="app__flex p-text" key={`link-${items}`}>
            <div />
            <a href={`#${items}`}>{items}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          >
            <HiChevronDoubleRight onClick={() => setToggle(false)} />
            <ul className="app__navbar-links">
              {["Home", "about", "contact", "skills", "projects"].map(
                (items) => (
                  <li key={items}>
                    <div />
                    <a href={`#${items}`} onClick={() => setToggle(false)}>
                      {items}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
