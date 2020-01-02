import {Table} from 'antd';
import PlayerAvatar from '../PlayerAvatarName/PlayerAvatar';

export default function PlayerStatTable(props){
     
     const dataList = props.data ? props.data.map( player => {
          player.playerProfile = <PlayerAvatar TeamId={props.TeamId} PLAYER_ID={player.PLAYER_ID} PLAYER_NAME={player.PLAYER_NAME}/>
          return player
     } ) : null

     const columns = [
          {
               width: 120,
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
               title: 'GP',
               dataIndex: 'GP',
               sorter: (a, b) => a.GP - b.GP,
          },
          {
               title: 'MIN',
               dataIndex: 'MIN',
               sorter: (a, b) => a.MIN - b.MIN,
          },
          {
               title: 'W',
               dataIndex: 'W',
               sorter: (a, b) => a.W - b.W,
          },
          {
               title: 'L',
               dataIndex: 'L',
               sorter: (a, b) => a.L - b.L,
          },
          {
               title: 'WIN%',
               dataIndex: 'W_PCT',
               sorter: (a, b) => a.W_PCT - b.W_PCT,
          },
          {
               title: 'PTS',
               dataIndex: 'PTS',
               sorter: (a, b) => a.PTS - b.PTS,
               defaultSortOrder: 'descend',
          },
          {
               title: 'AST',
               dataIndex: 'AST',
               sorter: (a, b) => a.AST - b.AST,
          },
          {
               title: 'REB',
               dataIndex: 'REB',
               sorter: (a, b) => a.REB - b.REB,
          },
          {
               width: 95,
               title: 'PM + / -',
               dataIndex: 'PLUS_MINUS',
               sorter: (a, b) => a.PLUS_MINUS - b.PLUS_MINUS,
          },
          {
               title: 'FG%',
               dataIndex: 'FG_PCT',
               sorter: (a, b) => a.FG_PCT - b.FG_PCT,
          },
          {
               title: 'FGA',
               dataIndex: 'FGA',
               sorter: (a, b) => a.FGA - b.FGA,
          },
          {
               title: 'FGM',
               dataIndex: 'FGM',
               sorter: (a, b) => a.FGM - b.FGM,
          },
          {
               title: '3P%',
               dataIndex: 'FG3_PCT',
               sorter: (a, b) => a.FG3_PCT - b.FG3_PCT,
          },
          {
               title: '3PA',
               dataIndex: 'FG3A',
               sorter: (a, b) => a.FG3A - b.FG3A,
          },
          {
               title: '3PM',
               dataIndex: 'FG3M',
               sorter: (a, b) => a.FG3M - b.FG3M,
          },
          {
               title: 'FT%',
               dataIndex: 'FT_PCT',
               sorter: (a, b) => a.FT_PCT - b.FT_PCT,
          },
          {
               title: 'FTA',
               dataIndex: 'FTA',
               sorter: (a, b) => a.FTA - b.FTA,
          },
          {
               title: 'FTM',
               dataIndex: 'FTM',
               sorter: (a, b) => a.FTM - b.FTM,
          },
          {
               title: 'OREB',
               dataIndex: 'OREB',
               sorter: (a, b) => a.OREB - b.OREB,
          },
          {
               title: 'DREB',
               dataIndex: 'DREB',
               sorter: (a, b) => a.DREB - b.DREB,
          },
          {
               title: 'STL',
               dataIndex: 'STL',
               sorter: (a, b) => a.STL - b.STL,
          },
          {
               title: 'BLK',
               dataIndex: 'BLK',
               sorter: (a, b) => a.BLK - b.BLK,
          },
          {
               title: 'PFD',
               dataIndex: 'PFD',
               sorter: (a, b) => a.PFD - b.PFD,
          },
          {
               title: 'PF',
               dataIndex: 'PF',
               sorter: (a, b) => a.PF - b.PF,
          },
          {
               title: 'TOV',
               dataIndex: 'TOV',
               sorter: (a, b) => a.TOV - b.TOV,
          },
     ];

     return(
          <>   
               <div className="team-player-board">
                    {props.tableTitle ? <h1 className="team-player-board__title">{props.tableTitle}</h1> : null}
                    <Table rowKey="PLAYER_ID"  size={"middle"} columns={columns} dataSource={dataList} scroll={{ x: true }} pagination={false} loading={dataList ? false : true}/>
               </div>
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