import {useState, useEffect, createContext} from 'react';
import { getLeagueStandings } from '../modules/getStats';

export const LeagueStandingsContext = createContext();

export const LeagueStandingsProvider = props => {
     const [leagueStandings, setLeagueStandings] = useState(null);

     useEffect(()=>{
          getLeagueStandings(setLeagueStandings)
     },[]);  
     
     return (
          <LeagueStandingsContext.Provider value={leagueStandings}>
          {props.children}
          </LeagueStandingsContext.Provider>
     );
}