import {useContext} from 'react';
import Link from 'next/link'
import {LeagueStandingsContext} from '../../context/LeagueStandings';
import { List, Avatar, Spin } from 'antd';

export default function SeasonStandings(){
     const leagueStandings = useContext(LeagueStandingsContext);
     return(
          leagueStandings ? 
          <article>
               <h1 className="season-standings__title main-color">2019-20 Season Standings</h1>
               <div className="season-standings__table">
                    <List
                         itemLayout="horizontal"
                         dataSource={leagueStandings}
                         renderItem={ (team,index) => (
                         <List.Item>
                         <p style={{margin: ' 0 8px auto 8px', fontSize:'20px'}}>{index + 1}</p>
                         <List.Item.Meta
                              avatar={<Avatar src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${team.TeamID}.svg`} />}
                              title={<Link href={`/dashboard/${team.TeamID}`} prefetch={false}><a>{team.TeamName}</a></Link>}
                              description={`Wins : ${team.WINS} | Losses: ${team.LOSSES} | Current Streak : ${team.CurrentStreak}`}
                         />
                         </List.Item>
                         )}
                    /> 
               </div>

               <style jsx>{`
                    .season-standings__title{
                         font-size : 20px;
                         font-weight: 900;
                         color: #ffffff;
                         padding: 13px 16px;
                         margin: 0;
                    }
                    .season-standings__table{
                         height:800px;
                         overflow: auto;
                    }
                    @media (min-width: 768px) {
                         .season-standings__table{
                              height:800px;
                         }
                    }
               `}
               </style>
          </article>
          : <Spin spinning={true} style={{border:"1px solid #1d1d1d", position: "absolute", top:"0",left: "0", width: "100%", height:"100%", display: "flex", justifyContent: "center", alignItems: "center" }}/>
     );
}