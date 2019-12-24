import {useState, useEffect} from 'react';
import nba from 'nba-api-client';
import { List, Avatar } from 'antd';

export default function ScheduleBoard(){
     const [data, setData] = useState(null);

     useEffect( ()=>{
          const options = {
               Season: '2019-20', 
          }
          nba.leagueStandings({...options}).then(function(data){
               console.log(data.Standings[0]);
               setData(Object.entries(data.Standings))
           })
     },[])
     
     const teams = data ? data.map( team => {
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
           data ? <List
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