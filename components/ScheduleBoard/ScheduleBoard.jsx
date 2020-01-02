import {useContext} from 'react';
import { List, Avatar } from 'antd';
import LeagueStandingsContext from '../../context/LeagueStandings';

export default function ScheduleBoard(){
     const leagueStandings = useContext(LeagueStandingsContext);
     
     const teams = leagueStandings ? leagueStandings.map( team => {
          const object = {
               id : team[1].TeamID,
               teamName : team[1].TeamName,
               conferenceRecord : team[1].ConferenceRecord,
               conference : team[1].Conference,
               record : team[1].Record,
               losses :  team[1].LOSSES,
               wins :  team[1].WINS,
               currentStreak : team[1].CurrentStreak
          };
          return object;
     }
     ) : null ;
     return(
          leagueStandings ? <List
               itemLayout="horizontal"
               dataSource={teams}
               renderItem={ (team,index) => (
               <List.Item>
               <p style={{margin: '0 8px 16px 8px', fontSize:'16px'}}>{index}</p>
               <List.Item.Meta
                    avatar={<Avatar src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${team.id}.svg`} />}
                    title={<a href="https://ant.design">{team.teamName}</a>}
                    description={`Wins : ${team.wins} | Losses: ${team.losses} | Current Streak : ${team.currentStreak}`}
               />
               </List.Item>
               )}
          /> : null
     );
}