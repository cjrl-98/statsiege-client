import * as React from "react";
import { motion } from "framer-motion";

const listContainerVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const listVariants = {
     open: {
       y: 0,
       opacity: 1,
       transition: {
         y: { stiffness: 1000, velocity: -100 }
       }
     },
     closed: {
       y: 50,
       opacity: 0,
       transition: {
         y: { stiffness: 1000 }
       }
     }
   };
const menuItems = [
  {
    color : "#FF008C",
    text : "Teams",
    icon : "https://firebasestorage.googleapis.com/v0/b/statsiege.appspot.com/o/icon%2Fteam.svg?alt=media&token=b8b811a0-8df1-4a75-aa71-19b69d0568d8"
  },
  {
    color : "#D309E1",
    text : "Players",
    icon : "https://firebasestorage.googleapis.com/v0/b/statsiege.appspot.com/o/icon%2Fplayer.svg?alt=media&token=e6899846-64d7-41c0-b3b8-169a1bed24e0"
  },
  {
    color : "#9C1AFF",
    text : "",
    icon : "https://firebasestorage.googleapis.com/v0/b/statsiege.appspot.com/o/icon%2Fteams.svg?alt=media&token=c5f8ddbd-c55e-4fde-9664-d5419219f2f5"
  },
  {
    color : "#7700FF",
    text : "About",
    icon : "https://firebasestorage.googleapis.com/v0/b/statsiege.appspot.com/o/icon%2Finfo.svg?alt=media&token=43a2b92b-1a55-4976-a636-798b24b108c2"
  },
  {
    color : "#4400FF",
    text : "",
    icon : "https://firebasestorage.googleapis.com/v0/b/statsiege.appspot.com/o/icon%2Fteams.svg?alt=media&token=c5f8ddbd-c55e-4fde-9664-d5419219f2f5"
  }
]
const MenuItem = ({ item }) => {
  return (
      <motion.li
            variants={listVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
      >
            <img className="icon-placeholder" alt={`${item.text} icon`} src={item.icon}/>
            <p className="text-placeholder">{item.text}</p>
      </motion.li>
  );
};

export const Navigation = () => (
  <motion.ul variants={listContainerVariants}>
    { menuItems.map( item => (
      <MenuItem item={item} key={item.color} />
    ))}
  </motion.ul>
);

