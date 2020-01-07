import {useContext} from 'react';
import { Spin, Tabs } from 'antd';
import {LeagueStandingsContext} from '../../context/LeagueStandings';
import ConferenceTabs from './ConferenceTabs';
const { TabPane } = Tabs;

export default function SeasonStandings(){
     const leagueStandings = useContext(LeagueStandingsContext);
     const western = leagueStandings ? leagueStandings.filter( team => team.Conference === "West" ) : null;
     const eastern = leagueStandings ? leagueStandings.filter( team => team.Conference === "East" ) : null;

     return(
          leagueStandings ? 
          <article className="season__standings">
               <h1 className="season-standings__title main-color">2019-20 Season Standings</h1>
               <div className="season-standings__table">
                    <Tabs defaultActiveKey="1">
                         <TabPane tab="Western Conference" key="1">
                              <ConferenceTabs data={western}/> 
                         </TabPane>
                         <TabPane tab="Eastern Conference" key="2">
                              <ConferenceTabs data={eastern}/> 
                         </TabPane>
                    </Tabs>
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
                         height: 785px;
                         overflow: auto;
                    }
                    @media (min-width: 768px){
                         .season-standings__table{
                              width: 400px;
                         }
                    }
               `}
               </style>
          </article>
          : <Spin spinning={true} style={{border:"1px solid #1d1d1d", position: "absolute", top:"0",left: "0", width: "100%", height:"100%", display: "flex", justifyContent: "center", alignItems: "center" }}/>
     );
}