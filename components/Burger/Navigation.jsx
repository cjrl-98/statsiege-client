import * as React from "react";
import { motion } from "framer-motion";
import Link from 'next/link'

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
    text : "Teams",
    link : "",
    icon : "https://firebasestorage.googleapis.com/v0/b/statsiege.appspot.com/o/icon%2Fteam.svg?alt=media&token=b8b811a0-8df1-4a75-aa71-19b69d0568d8"
  },
  {
    text : "Players",
    link : "",
    icon : "https://firebasestorage.googleapis.com/v0/b/statsiege.appspot.com/o/icon%2Fplayer.svg?alt=media&token=e6899846-64d7-41c0-b3b8-169a1bed24e0"
  },
  {
    text : "2010s All Decade",
    link : "http://localhost:3000/decade",
    icon : "https://firebasestorage.googleapis.com/v0/b/statsiege.appspot.com/o/icon%2Fdecade.svg?alt=media&token=82fd3987-01b5-4365-863c-3778253e61dd"
  },
  {
    text : "Stats Glossary",
    link : "",
    icon : "https://firebasestorage.googleapis.com/v0/b/statsiege.appspot.com/o/icon%2Fglossary.svg?alt=media&token=dd8ba16f-dfff-4718-a390-b3094e6502d7"
  },
  {
    text : "About",
    link : "",
    icon : "https://firebasestorage.googleapis.com/v0/b/statsiege.appspot.com/o/icon%2Finfo.svg?alt=media&token=43a2b92b-1a55-4976-a636-798b24b108c2"
  },

]
const MenuItem = ({ item }) => {
  return (
    <Link href="/decade">
      <a>
        <motion.li
              variants={listVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
        >     
          <img className="icon-placeholder" alt={`${item.text} icon`} src={item.icon}/>
          <p className="text-placeholder">{item.text}</p>
        </motion.li>
      </a>
    </Link>
  );
};

export const Navigation = () => (
  <motion.ul variants={listContainerVariants}>
    { menuItems.map( item => (
      <MenuItem item={item} key={item.text} />
    ))}
  </motion.ul>
);

