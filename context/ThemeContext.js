import { useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/router';
import themeData from './themeData';

export const ThemeContext = createContext();

export const ThemeProvider = props => {
     const [theme, setTheme] = useState("#E03A3E");
     const router = useRouter();

     useEffect(()=>{
          if(router.query.id){
               const team = themeData.find( team => team.TeamID === parseInt(router.query.id));
               setTheme(team.mainColor);
          }
     },[router.query.id]);

     return(
          <ThemeContext.Provider value={theme}>
               {props.children}
          </ThemeContext.Provider>
     )
}