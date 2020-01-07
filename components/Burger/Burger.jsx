import { useRef } from "react";
import {Modal} from "antd";
import { motion, useCycle } from "framer-motion";
import BurgerStyle from "./BurgerStyle";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import StatsGlossary from "../StatGlossary/StatGlossary";
import { useDimensions } from "./use-dimensions";

export default function Header () {
  const [isGlossary, toggleGlossary] = useCycle(false, true);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const sidebar = {
    open: {
      clipPath: `circle( 550px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 60,
      }
    },
    closed: {
      clipPath: "circle(20px at 260px 35px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      },
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
                      <Navigation isOpen={isOpen} toggleGlossary={toggleGlossary} />
                    </motion.div>
                    <MenuToggle toggle={ () => toggleOpen() } />
               </motion.nav>
          </div>
          { isOpen ? 
            <div style={{position: "fixed", backgroundColor: "transparent", width: "100vw", height: "100vh", zIndex: "-10"}} 
                onClick={ ()=> toggleOpen() } 
            /> : null 
          }
          <BurgerStyle/>
          <Modal title="Statistics Glossary" visible={isGlossary} onCancel={toggleGlossary} footer={false}>
            <StatsGlossary/>
          </Modal>
    </>
  );
};
