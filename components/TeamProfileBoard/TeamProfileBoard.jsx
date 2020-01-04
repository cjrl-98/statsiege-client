import {useState, useEffect, useContext} from 'react';
import { Tabs, Avatar,Icon, Spin } from 'antd';
import { useRouter } from 'next/router';
import {LeagueStandingsContext} from '../../context/LeagueStandings.js';
import ProfileTab from './ProfileTab';
import TeamPlayerStatTab from '../TeamPlayerStatTab/TeamPlayerStatTab';
import HallOfFame from './HallOfFame'
import HistoryTab from './HistoryTab';
import TeamAdvanceStatTab from '../TeamAdvanceStatTab/TeamAdvanceStatTab';
import StatGlossary from '../StatGlossary/StatGlossary';
import {getTeamDetails} from '../../modules/getStats';
const { TabPane } = Tabs;

export default function TeamProfileBoard(){
     const [teamDetails, setTeamDetails] = useState(null);
     const [teamStats, setTeamStats] = useState(null);
     const router = useRouter();
     const leagueStandings = useContext(LeagueStandingsContext);

     useEffect( ()=>{
          if(router.query.id){
               getTeamDetails(router.query.id, setTeamDetails, setTeamStats);
          }
     },[router.query.id]);

     //find the specific team from context based on router params and pass it down 
     const team = leagueStandings ? leagueStandings.find( team => {
          return team.TeamID === parseInt(router.query.id)
     }) : null
     return(
          leagueStandings && teamDetails ?
          <>
               <div>
                    <div className="profile__team-banner main-color">
                         <div>
                              <Avatar size="large" alt={`${team.TeamName} icon`} src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${team.TeamID}.svg`} />
                              <span className="banner__name">{`${team.TeamCity} ${team.TeamName}`}</span>
                         </div>
                              <div>
                                   <a href={teamDetails.TeamSocialSites[0].WEBSITE_LINK} className="banner__social-icon" target="_blank" rel="noopener noreferrer"><Icon type="instagram"/></a>
                                   <a href={teamDetails.TeamSocialSites[1].WEBSITE_LINK} className="banner__social-icon" target="_blank" rel="noopener noreferrer"><Icon type="twitter"/></a>
                                   <a href={teamDetails.TeamSocialSites[2].WEBSITE_LINK} className="banner__social-icon" target="_blank" rel="noopener noreferrer"><Icon className="banner__icon" type="facebook"/></a>
                              </div>
                    </div>
                    <Tabs defaultActiveKey="1" size={"small"}>
                         <TabPane tab="Profile" key="1">
                              <ProfileTab teamDetails={teamDetails} teamStats={teamStats} team={team}/>
                         </TabPane>
                         <TabPane tab="Player Stats" key="2">
                              <div className="team-player-tab__container bordered">
                                   <TeamPlayerStatTab/>
                              </div>
                         </TabPane>
                         <TabPane tab="Advance Stats" key="3">
                              <div className="team-player-tab__container bordered">
                                   <TeamAdvanceStatTab/>
                              </div>
                         </TabPane>
                         <TabPane tab="History" key="4">
                              <div className="team-player-tab__container">
                                   <HistoryTab teamDetails={teamDetails}/>
                              </div>
                         </TabPane>
                         <TabPane tab="Hall of Fame" key="5">
                              <HallOfFame teamDetails={teamDetails.TeamHof}/>
                         </TabPane>
                         <TabPane tab="Stats Glossary" key="6">
                              <StatGlossary/>
                         </TabPane>
                    </Tabs>
               </div>
               <style jsx>{`
                    .profile__team-banner{
                         display: flex;
                         justify-content: space-between;
                         font-size : 24px;
                         font-weight: 900;
                         color: #ffffff;
                         padding: 8px 16px;
                    }
                    .banner__name{ 
                         font-size: 13px;
                         margin-left: 10px;
                    }
                    .banner__social-icon{
                         font-size: 13px;
                         color: #ffffff;
                         margin-right: 10px;
                    }
                    .team-player-tab__container{
                         margin: 16px;
                    }
                    @media (min-width: 768px) {
                         .banner__name, .banner__social-icon {
                              font-size: 20px;
                         }
                    }
               `}</style>
          </> : <Spin spinning={true} style={{border:"1px solid #1d1d1d", position: "absolute", top:"0",left: "0", width: "100%", height:"100%", display: "flex", justifyContent: "center", alignItems: "center" }}/>
     );
}