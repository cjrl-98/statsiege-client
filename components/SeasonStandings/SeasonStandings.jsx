import {useContext} from 'react';
import Link from 'next/link'
import {LeagueStandingsContext} from '../../context/LeagueStandings';
import { List, Avatar, Spin } from 'antd';

export default function SeasonStandings(){
     const leagueStandings = useContext(LeagueStandingsContext);
     
     const teams = leagueStandings ? leagueStandings.map( team => {
          const object = {
               id : team.TeamID,
               teamName : team.TeamName,
               conferenceRecord : team.ConferenceRecord,
               conference : team.Conference,
               record : team.Record,
               losses :  team.LOSSES,
               wins :  team.WINS,
               currentStreak : team.CurrentStreak
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
               <p style={{margin: ' 0 8px auto 8px', fontSize:'20px'}}>{index + 1}</p>
               <List.Item.Meta
                    avatar={<Avatar src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${team.id}.svg`} />}
                    title={<Link href={`/dashboard/${team.id}`}><a>{team.teamName}</a></Link>}
                    description={`Wins : ${team.wins} | Losses: ${team.losses} | Current Streak : ${team.currentStreak}`}
               />
               </List.Item>
               )}
          /> : <Spin spinning={true} style={{position: "absolute", top:"0",left: "0", width: "100%", height:"100%", display: "flex", justifyContent: "center", alignItems: "center" }}/>
     );
}