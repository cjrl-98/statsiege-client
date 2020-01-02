import {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import {getPlayerGeneralStats} from '../../modules/getStats';
import PlayerStatTable from '../PlayerStatTable/PlayerStatTable';

export default function TeamProfileBoard(){
     const [teamPlayerStatsData, setTeamPlayerStatsData] = useState(null);
     const router = useRouter();

     useEffect( ()=>{
          if(router.query.id){
               getPlayerGeneralStats(router.query.id, setTeamPlayerStatsData);
          }         
     },[router.query.id]);

     return(
          <>   
               <PlayerStatTable tableTitle={"Player Stats Per Game"} TeamId={router.query.id} data={teamPlayerStatsData}/>
               <style jsx>{`
                    .team-player-board {
                         width: 100%;
                    }
                    .team-player-board__title{
                         font-size : 20px;
                         font-weight: 900;
                         color: #ffffff;
                         padding: 13px 16px;
                         background-color: #1d1d1d;
                         margin: 0;
                    }
               `}</style>
          </>
     );
}