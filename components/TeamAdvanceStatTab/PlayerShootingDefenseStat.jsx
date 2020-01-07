import {useState, useEffect} from 'react';
import {Table} from 'antd';
import { getPlayerShootingDefense } from '../../modules/getStats';
import PlayerAvatar from '../PlayerAvatarName/PlayerAvatar';

export default function PlayerHustleTab(props){
     const [playerShootingDefense, setPlayerShootingDefense] = useState(null);

     useEffect( ()=>{
          getPlayerShootingDefense(props.teamId, setPlayerShootingDefense, 'PerGame' );
     },[props.teamId]);  
     
     const playerShootingDefenseList = playerShootingDefense ? playerShootingDefense.map( player => {
          player.playerProfile = <PlayerAvatar TeamId={props.TeamId} PLAYER_ID={player.PLAYER_ID} PLAYER_NAME={player.PLAYER_NAME}/>
          return player
     } ) : null

     const columns = [
          {
               title: 'Player',
               dataIndex: 'playerProfile',
               sorter: (a, b) => {
                    if(a.PLAYER_NAME < a.PLAYER_NAME) { return -1; }
                    if(a.PLAYER_NAME > b.PLAYER_NAME) { return 1; }
                    return 0;
                },
               fixed: true
          },
          {
               title: 'PLAYER POSITION',
               dataIndex: 'PLAYER_POSITION',
               sorter: (a, b) => a.PLAYER_POSITION - b.PLAYER_POSITION,
          },
          {
               title: 'AGE',
               dataIndex: 'AGE',
               sorter: (a, b) => a.AGE - b.AGE,
          },
          {
               title: 'GP',
               dataIndex: 'GP',
               sorter: (a, b) => a.GP - b.GP,
          },
          {
               title: 'DEFENDED FGM',
               dataIndex: 'D_FGM',
               sorter: (a, b) => a.D_FGM - b.D_FGM,
          },
          {
               title: 'DEFENDED FGA',
               dataIndex: 'D_FGA',
               sorter: (a, b) => a.D_FGA - b.D_FGA,
          },
          {
               title: 'DEFENDED FG%',
               dataIndex: 'D_FG_PCT',
               sorter: (a, b) => a.D_FG_PCT - b.D_FG_PCT,
          },
          {
               title: 'PM + / -',
               dataIndex: 'PCT_PLUSMINUS',
               sorter: (a, b) => a.PCT_PLUSMINUS - b.PCT_PLUSMINUS,
          },
          {
               title: 'DFG%',
               dataIndex: 'NORMAL_FG_PCT',
               sorter: (a, b) => a.NORMAL_FG_PCT - b.NORMAL_FG_PCT,
          },
     ];

     return(
          <>   
               <Table size={"middle"}  rowKey="PLAYER_NAME" columns={columns} dataSource={playerShootingDefenseList} scroll={{ x: true }} pagination={false} loading={playerShootingDefense ? false : true}/>
          </>
     );
}