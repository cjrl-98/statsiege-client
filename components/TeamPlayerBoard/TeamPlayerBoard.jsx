import {useState, useEffect, useContext} from 'react';
import { useRouter } from 'next/router';
import {Table,Avatar} from 'antd';
import nba from 'nba-api-client';
import {LeagueStandingsContext} from '../../context/LeagueStandings.js';

export default function TeamProfileBoard(){
     const [teamPlayerStatsData, setTeamPlayerStatsData] = useState(null);
     const router = useRouter();
     const leagueStandings = useContext(LeagueStandingsContext);

     useEffect( ()=>{
          if(router.query.id){
               nba.teamPlayerStats({TeamID: parseInt(router.query.id), Season: "2019-20"}).then(function(data){
                    setTeamPlayerStatsData(data.PlayersSeasonTotals)
               })
               .catch( error => console.error(error))
          }
     },[router.query.id]);    

     const imageExists = (image_url) => {
          var http = new XMLHttpRequest();
          http.open('HEAD', image_url, false);
          http.send();
          return http.status != 403;
      };

     const teamPlayerStatsList = teamPlayerStatsData ?  Object.values(teamPlayerStatsData).map( player => {

          const avatar = imageExists(`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/${router.query.id}/2018/260x190/${player.PLAYER_ID}.png`) ? 
               <Avatar size="small" src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/${router.query.id}/2018/260x190/${player.PLAYER_ID}.png`} style={{marginRight:"6px"}}/>
                    : 
               <Avatar size="small" src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${router.query.id}.svg`} style={{marginRight:"6px"}}/>;

          const playerProfile = <span style={{textOverflow:"elliopsis",whiteSpace:"nowrap",overflow:"hidden"}}>{avatar}{player.PLAYER_NAME}</span>;

          return {
               key : player.PLAYER_ID,
               PLAYER_ID :  player.PLAYER_ID ,
               PLAYER_NAME : player.PLAYER_NAME ,
               playerProfile : playerProfile,
               GP : player.GP ,
               MIN : player.MIN ,
               FG_PCT : player.FG_PCT ,
               FT_PCT : player.FT_PCT,
               FG3_PCT : player.FG3_PCT ,
               OREB : player.OREB ,
               DREB : player.DREB ,
               REB : player.REB ,
               AST : player.AST ,
               TOV : player.TOV ,
               STL : player.STL ,
               BLK : player.BLK ,
               PTS : player.PTS ,
               PLUS_MINUS : player.PLUS_MINUS
          }
     }) : null;

     const columns = [
          {
               width: 200,
               title: 'Player',
               dataIndex: 'playerProfile',
               sorter: (a, b) => a.PLAYER_NAME.length - b.PLAYER_NAME.length,
               fixed: 'left'
          },
          {
               width: 100,
               title: 'GP',
               dataIndex: 'GP',
               sorter: (a, b) => a.GP - b.GP,
          },
          {
               width: 100,
               title: 'MPG',
               dataIndex: 'MIN',
               sorter: (a, b) => a.MIN - b.MIN,
          },
          {
               width: 100,
               title: 'PTS',
               dataIndex: 'PTS',
               sorter: (a, b) => a.PTS - b.PTS,
               defaultSortOrder: 'descend',
          },
          {
               width: 100,
               title: 'AST',
               dataIndex: 'AST',
               sorter: (a, b) => a.AST - b.AST,
          },
          {
               width: 100,
               title: 'REB',
               dataIndex: 'REB',
               sorter: (a, b) => a.REB - b.REB,
          },
          {
               width: 100,
               title: 'PM + / -',
               dataIndex: 'PLUS_MINUS',
               sorter: (a, b) => a.PLUS_MINUS - b.PLUS_MINUS,
          },
          {
               width: 100,
               title: 'FG%',
               dataIndex: 'FG_PCT',
               sorter: (a, b) => a.FG_PCT - b.FG_PCT,
          },
          {
               width: 100,
               title: '3PT%',
               dataIndex: 'FG3_PCT',
               sorter: (a, b) => a.FG3_PCT - b.FG3_PCT,
          },
          {
               width: 100,
               title: 'FT%',
               dataIndex: 'FT_PCT',
               sorter: (a, b) => a.FT_PCT - b.FT_PCT,
          },
          {
               width: 100,
               title: 'OREB',
               dataIndex: 'OREB',
               sorter: (a, b) => a.OREB - b.OREB,
          },
          {
               width: 100,
               title: 'DREB',
               dataIndex: 'DREB',
               sorter: (a, b) => a.DREB - b.DREB,
          },
          {
               width: 100,
               title: 'STL',
               dataIndex: 'STL',
               sorter: (a, b) => a.STL - b.STL,
          },
          {
               width: 100,
               title: 'BLK',
               dataIndex: 'BLK',
               sorter: (a, b) => a.BLK - b.BLK,
          },
          {
               width: 100,
               title: 'TOV',
               dataIndex: 'TOV',
               sorter: (a, b) => a.TOV - b.TOV,
          },
     ];

     //find the specific team from context based on router params and pass it down 
     const team = leagueStandings ? leagueStandings.find(obj => {
          return obj.TeamID === parseInt(router.query.id)
     }) : null;

     return(
          leagueStandings ?
          <>   
               <div className="team-player-board">
                    <h1 className="team-player-board__title">Player Stats Per Game</h1>
                    <Table size={"middle"} columns={columns} dataSource={teamPlayerStatsList} scroll={{ x: true }} pagination={false} loading={teamPlayerStatsData ? false : true}/>
               </div>
               <style jsx>{`
                    .team-player-board {
                         width: 100%;
                    }
                    .team-player-board__title{
                         font-size : 20px;
                         font-weight: 900;
                         background-color: ${'#542583'};
                         color: #ffffff;
                         padding: 13px 16px;
                         margin: 0;
                    }
               `}</style>
          </> : null
     );
}