import {useEffect, useState} from 'react';
import { Tabs } from 'antd';
import { useRouter } from 'next/router';
import {getPlayerHustleStats} from '../../modules/getStats';
import PlayerClutchTab from './PlayerClutchTab';
import PlayerHustleTab from './PlayerHustleTab';
import PlayerShootingDefenseStat from './PlayerShootingDefenseStat'

const { TabPane } = Tabs;

export default function TeamAdvanceStatTab(){
     const [teamPlayerHustleStats, setTeamPlayerHustleStats] = useState(null);
     const router = useRouter();

     useEffect( ()=>{
          if(router.query.id){
               getPlayerHustleStats(router.query.id,setTeamPlayerHustleStats);
          }         
     },[router.query.id]);  

     return(
          <>   
               <div className="team-advanced-stats-">
                    <h1 className="team-advanced-stats-__title">Advanced Stats</h1>
                    <Tabs defaultActiveKey="1">
                         <TabPane tab="Players Hustle" key="1">
                              <PlayerHustleTab teamPlayerHustleStats={teamPlayerHustleStats} teamId={router.query.id}/>
                         </TabPane>
                         <TabPane tab="Player Clutch" key="2">
                              <PlayerClutchTab teamId={router.query.id}/>
                         </TabPane>
                         <TabPane tab="Player Shooting Defense" key="3">
                              <PlayerShootingDefenseStat teamId={router.query.id}/>
                         </TabPane>
                    </Tabs>
               </div>
               <style jsx global>{`
                    .team-advanced-stats- {
                         width: 100%;
                    }
                    .team-advanced-stats-__title{
                         font-size : 20px;
                         font-weight: 900;
                         color: #ffffff;
                         padding: 13px 16px;
                         background-color: #1d1d1d;
                         margin: 0;
                    }
                    :global(.ant-tabs-bar, .ant-tabs-top-bar){
                         margin-bottom: 0 !important;
                    }
               `}</style>
          </>
     );
}