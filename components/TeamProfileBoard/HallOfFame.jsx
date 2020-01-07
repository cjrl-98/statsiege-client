import { Card } from 'antd';

export default function HallOfFame(props){
     const hofList = props.teamDetails ? 
          Object.values(props.teamDetails).map ( player => {
               return (
                    <Card 
                         key = {player.PLAYERID}
                         size="small" 
                         title={player.PLAYER} 
                         extra={<a href={`https://en.wikipedia.org/wiki/${player.PLAYER}`} target="_blank" rel="noopener noreferrer">More</a>} 
                         style={{width: "190px", margin: "8px"}}
                         headStyle={{fontSize: "16px", fontWeight: 500}}
                    >
                         <p>{`Position : ${player.POSITION}`}</p>
                         <p>{`Seasons with : ${player.SEASONSWITHTEAM}`}</p>
                         <p>{`Hall of Fame Induction : ${player.YEAR}`}</p>
                    </Card>
               )
          }) 
          : null;
          return(
               props.teamDetails ?
               <>
                    <div className="team-hof-board">
                         {hofList}
                    </div>
                    <style jsx>{`
                         .team-hof-board {
                              width: 100%;
                              display: flex;
                              flex-wrap: wrap;
                              margin: 8px 0;
                         }
                    `}</style>
               </> : null       
          );
}