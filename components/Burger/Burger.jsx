import { useRef } from "react";
import BurgerStyle from "./BurgerStyle";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

export default function Header () {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      WebkitClipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(20px at 260px 35px)",
      WebkitClipPath: "circle(20px at 260px 35px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  return (
       <> 
          <div className="burger-wrapper"> 
               <motion.nav
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    custom={height}
                    ref={containerRef}
               >
                    <motion.div className="background" variants={sidebar}>
                      <Navigation />
                    </motion.div>
                    <MenuToggle toggle={() => toggleOpen()} />
               </motion.nav>
          </div>
          <BurgerStyle/>
    </>
  );
};
