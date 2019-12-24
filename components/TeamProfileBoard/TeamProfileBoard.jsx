import {useState, useEffect, useContext} from 'react';
import { useRouter } from 'next/router';
import nba from 'nba-api-client';
import {LeagueStandingsContext} from '../../context/LeagueStandings.js';
import ProfileTab from './ProfileTab';
import { Tabs, Avatar,Icon, Spin, Alert } from 'antd';
const { TabPane } = Tabs;

export default function TeamProfileBoard(){
     const [teamDetails, setTeamDetails] = useState(null);
     const [teamStats, setTeamStats] = useState(null);
     const router = useRouter();
     const leagueStandings = useContext(LeagueStandingsContext);

     useEffect( ()=>{
          if(router.query.id){
               nba.teamDetails({TeamID: parseInt(router.query.id)}).then(function(data){
                    setTeamDetails(data);
               })
               .catch( error => console.error(error))
               nba.leagueTeamGeneralStats({TeamID: parseInt(router.query.id), Season: "2019-20"}).then(function(data){
                    setTeamStats(data.LeagueDashTeamStats)
               })
               .catch( error => console.error(error))
          }
     },[router.query.id]);    

     //find the specific team from context based on router params and pass it down 
     const team = leagueStandings ? leagueStandings.find(obj => {
          return obj.TeamID === parseInt(router.query.id)
     }) : null

     return(
          leagueStandings && teamDetails ?
          <>
               <div>
                    <div className="profile__team-banner">
                         <div>
                              <Avatar size="large" src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${team.TeamID}.svg`} />
                              <span className="banner__name">{`${team.TeamCity} ${team.TeamName}`}</span>
                         </div>
                              <div>
                                   <a href={teamDetails.TeamSocialSites[0].WEBSITE_LINK} className="banner__social-icon"><Icon type="instagram"/></a>
                                   <a href={teamDetails.TeamSocialSites[1].WEBSITE_LINK} className="banner__social-icon"><Icon type="twitter"/></a>
                                   <a href={teamDetails.TeamSocialSites[2].WEBSITE_LINK} className="banner__social-icon"><Icon className="banner__icon" type="facebook"/></a>
                              </div>
                    </div>
                    <Tabs defaultActiveKey="1" size={"small"}>
                         <TabPane tab="Profile" key="1">
                              <ProfileTab teamDetails={teamDetails} teamStats={teamStats} team={team}/>
                         </TabPane>
                         <TabPane tab="Advance Stats" key="2">
                         </TabPane>
                         <TabPane tab="History" key="3">
                         </TabPane>
                         <TabPane tab="Hall of Fame" key="4">
                         </TabPane>
                    </Tabs>
               </div>
               <style jsx>{`
                    .profile__team-banner{
                         display: flex;
                         justify-content: space-between;
                         font-size : 24px;
                         font-weight: 900;
                         background-color: ${'#542583'};
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
                    @media (min-width: 768px) {
                         .banner__name, .banner__social-icon {
                              font-size: 20px;
                         }
                    }
               `}</style>
          </> : <Spin spinning={true} style={{border:"1px solid #1d1d1d", position: "absolute", top:"0",left: "0", width: "100%", height:"100%", display: "flex", justifyContent: "center", alignItems: "center" }}/>
     );
}