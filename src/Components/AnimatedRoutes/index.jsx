import React from "react";
import { 
    Outlet,
    useLocation 
} from "react-router-dom";

import { Home } from "../../Routes/Home";
import { About } from "../../Routes/About";
import { Contact } from "../../Routes/Contact";
import { Services } from "../../Routes/Services";
import { Testimonials } from "../../Routes/Testimonials";

import { motion } from "framer-motion"; //https://codesandbox.io/s/sad-kirch-lb8vm4?fontsize=14&hidenavigation=1&module=/src/App.js&theme=dark&file=/src/App.js:555-602
const PageLayout = ({ children }) => children;


export const AnimatedRoutes = () => {
  const { pathname } = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "linear",
    duration: 0.5,
  };

  return (
    <PageLayout>
      <motion.div
        key={pathname}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
      >
        <Outlet />
      </motion.div>
    </PageLayout>
  );
};
