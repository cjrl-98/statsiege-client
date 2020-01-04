import { motion } from "framer-motion";

const Path = props => (
  <motion.path
    fill="#transparent"
    strokeWidth="3"
    stroke="#FFFFFF"
    strokeLinecap="round"
    {...props}
  />
);

const burgerVariants = {
     top : {
          closed: { d: "M 2 2.5 L 20 2.5" }, 
          open: { d: "M 3 16.5 L 17 2.5" } 
     },
     middle : {
          closed: { opacity: 1 }, 
          open: { opacity: 0 }
     },
     bottom : {
          closed: { d: "M 2 16.346 L 20 16.346" }, 
          open: { d: "M 3 2.5 L 17 16.346" }
     }
}

export const MenuToggle = ({ toggle }) => (
  <button onClick={toggle} aria-label="burger-icon">
    <svg width="20" height="20" viewBox="0 0 23 23">
      <Path variants={burgerVariants.top}/>
      <Path d="M 2 9.423 L 20 9.423" variants={burgerVariants.middle} transition={{ duration: 0.1 }}/>
      <Path variants={burgerVariants.bottom}/>
    </svg>
  </button>
);
