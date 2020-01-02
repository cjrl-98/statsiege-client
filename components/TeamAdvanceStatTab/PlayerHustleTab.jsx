import {Table} from 'antd';

export default function PlayerHustleTab(props){
     const HustleStatsPlayer =  props.teamPlayerHustleStats;
     const addDefaultSrc = (e) => {
          e.target.src = `https://cdn.nba.net/assets/logos/teams/secondary/web/${props.teamId}.svg`;
     }
     const hustleStatsPlayerList = HustleStatsPlayer ? HustleStatsPlayer.map( player => {
          player.playerProfile = (
               <p key={player.PLAYER_ID} style={{ width: "150px",marginBottom: 0,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}>
                    <img
                         style={{ borderRadius:"50%" ,width: "40px", marginRight: "8px"}} 
                         src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.PLAYER_ID}.png`} 
                         onError={addDefaultSrc}
                    />
                    {player.PLAYER_NAME}
               </p>
          );
          return player
     } ) : null
     const columns = [
          {
               width: 150,
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
               width: 75,
               title: 'AGE',
               dataIndex: 'AGE',
               sorter: (a, b) => a.AGE - b.AGE,
          },
          {
               width: 75,
               title: 'GP',
               dataIndex: 'G',
               sorter: (a, b) => a.G - b.G,
          },
          {
               width: 75,
               title: 'MIN',
               dataIndex: 'MIN',
               sorter: (a, b) => a.MIN - b.MIN,
          },
          {
               width: 150,
               title: 'CONTESTED SHOTS',
               dataIndex: 'CONTESTED_SHOTS',
               sorter: (a, b) => a.CONTESTED_SHOTS - b.CONTESTED_SHOTS,
          },
          {
               width: 150,
               title: 'CONTESTED 2PT',
               dataIndex: 'CONTESTED_SHOTS_2PT',
               sorter: (a, b) => a.CONTESTED_SHOTS_2PT - b.CONTESTED_SHOTS_2PT,
          },
          {
               width: 150,
               title: 'CONTESTED 3PT',
               dataIndex: 'CONTESTED_SHOTS_3PT',
               sorter: (a, b) => a.CONTESTED_SHOTS_3PT - b.CONTESTED_SHOTS_3PT
          },
          {
               width: 150,
               title: 'DEFLECTIONS',
               dataIndex: 'DEFLECTIONS',
               sorter: (a, b) => a.DEFLECTIONS - b.DEFLECTIONS
          },
          {
               width: 150,
               title: 'CHARGES DRAWN',
               dataIndex: 'CHARGES_DRAWN',
               sorter: (a, b) => a.CHARGES_DRAWN - b.CHARGES_DRAWN
          },
          {
               width: 150,
               title: 'SCREEN ASSISTS',
               dataIndex: 'SCREEN_ASSISTS',
               sorter: (a, b) => a.SCREEN_ASSISTS - b.SCREEN_ASSISTS
          },
          {
               width: 150,
               title: 'SCREEN AST PTS',
               dataIndex: 'SCREEN_AST_PTS',
               sorter: (a, b) => a.SCREEN_AST_PTS - b.SCREEN_AST_PTS
          },
          {
               width: 220,
               title: 'LOOSE BALLS RECOVERED',
               dataIndex: 'LOOSE_BALLS_RECOVERED',
               sorter: (a, b) => a.LOOSE_BALLS_RECOVERED - b.LOOSE_BALLS_RECOVERED
          },
          {
               width: 220,
               title: 'OFF LOOSE BALLS RECOVERED',
               dataIndex: 'OFF_LOOSE_BALLS_RECOVERED',
               sorter: (a, b) => a.OFF_LOOSE_BALLS_RECOVERED - b.OFF_LOOSE_BALLS_RECOVERED
          },
          {
               width: 220,
               title: 'DEF LOOSE BALLS RECOVERED',
               dataIndex: 'DEF_LOOSE_BALLS_RECOVERED',
               key: 'DEF_LOOSE_BALLS_RECOVERED',
               sorter: (a, b) => a.DEF_LOOSE_BALLS_RECOVERED - b.DEF_LOOSE_BALLS_RECOVERED
          },
          {
               width: 150,
               title: 'BOXOUTS',
               dataIndex: 'BOX_OUTS',
               sorter: (a, b) => a.BOX_OUTS - b.BOX_OUTS
          },
          {
               width: 150,
               title: 'OFF BOXOUTS',
               dataIndex: 'OFF_BOXOUTS',
               sorter: (a, b) => a.OFF_BOXOUTS - b.OFF_BOXOUTS
          },
          {
               width: 150,
               title: 'DEF BOXOUTS',
               dataIndex: 'DEF_BOXOUTS',
               sorter: (a, b) => a.DEF_BOXOUTS - b.DEF_BOXOUTS
          },
          {
               width: 150,
               title: 'OFF BOXOUTS %',
               dataIndex: 'PCT_BOX_OUTS_OFF',
               sorter: (a, b) => a.PCT_BOX_OUTS_OFF - b.PCT_BOX_OUTS_OFF
          },
          {
               width: 150,
               title: 'DEF BOXOUTS %',
               dataIndex: 'PCT_BOX_OUTS_DEF',
               sorter: (a, b) => a.PCT_BOX_OUTS_DEF - b.PCT_BOX_OUTS_DEF
          },
     ];

     return(
          <>   
               <Table size={"middle"}  rowKey="PLAYER_ID" columns={columns} dataSource={hustleStatsPlayerList} scroll={{ x: true }} pagination={false} loading={HustleStatsPlayer ? false : true}/>
          </>
     );
}