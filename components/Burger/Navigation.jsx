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
       zIndex: 999,
       transition: {
         y: { stiffness: 1000, velocity: -100 }
       }
     },
     closed: {
       y: 50,
       opacity: 0,
       zIndex: -9999999,
       transition: {
         y: { stiffness: 1000 }
       }
     }
   };

const handleLink = (e) => e.preventDefault();

const MenuItem = ({ item, isOpen }) => {
  return (
    item.link ? 
    <Link href={item.link}>
      <a onClick={(e)=>{
          isOpen ? null : handleLink(e)
        }}> 
        <motion.li variants={listVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>     
          <img className="icon-placeholder" alt={`${item.text} icon`} src={item.icon}/>
          <p className="text-placeholder">{item.text}</p>
        </motion.li>
      </a>
    </Link> :
    <motion.li onClick={ () => isOpen ? item.callback() : null } variants={listVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>      
      <img className="icon-placeholder" alt={`${item.text} icon`} src={item.icon}/>
      <p className="text-placeholder">{item.text}</p>
    </motion.li>
  );
};

export function Navigation({isOpen, toggleGlossary}){
  const menuItems = [
    {
      text : "Teams",
      link : "/teams",
      icon : "https://firebasestorage.googleapis.com/v0/b/statsiege.appspot.com/o/icon%2Fteam.svg?alt=media&token=b8b811a0-8df1-4a75-aa71-19b69d0568d8"
    },
    // {
    //   text : "Players",
    //   link : "/players",
    //   icon : "https://firebasestorage.googleapis.com/v0/b/statsiege.appspot.com/o/icon%2Fplayer.svg?alt=media&token=e6899846-64d7-41c0-b3b8-169a1bed24e0"
    // },
    {
      text : "2010s All Decade",
      link : "/decade",
      icon : "https://firebasestorage.googleapis.com/v0/b/statsiege.appspot.com/o/icon%2Fdecade.svg?alt=media&token=82fd3987-01b5-4365-863c-3778253e61dd"
    },
    {
      text : "Stats Glossary",
      link : null,
      icon : "https://firebasestorage.googleapis.com/v0/b/statsiege.appspot.com/o/icon%2Fglossary.svg?alt=media&token=dd8ba16f-dfff-4718-a390-b3094e6502d7",
      callback: toggleGlossary
    },
    // {
    //   text : "About",
    //   link : "/about",
    //   icon : "https://firebasestorage.googleapis.com/v0/b/statsiege.appspot.com/o/icon%2Finfo.svg?alt=media&token=43a2b92b-1a55-4976-a636-798b24b108c2"
    // },
  ]
  return (
    <motion.ul variants={listContainerVariants}>
      { menuItems.map( item => (
        <MenuItem item={item} key={item.text} isOpen={isOpen} />
      ))}
    </motion.ul>
  );
}
