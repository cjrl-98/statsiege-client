import {useState, useEffect, createContext} from 'react';
import nba from 'nba-api-client';

export const LeagueStandingsContext = createContext();

export const LeagueStandingsProvider = props => {
     const [leagueStandings, setLeagueStandings] = useState(null);

     useEffect( ()=>{
          const options = {
               Season: '2019-20', 
          }
          nba.leagueStandings({...options}).then(function(response){
               const data = Object.entries(response.Standings).map( item => item[1] )
               setLeagueStandings(data);
           })
     },[]);
     
     return (
          <LeagueStandingsContext.Provider value={leagueStandings}>
               {props.children}
          </LeagueStandingsContext.Provider>
     );
}