import {useState, useEffect} from 'react';
import {Card} from 'antd';
import axios from 'axios';
import moment from 'moment';

export default function(){
     const [schedule, setSchedule] = useState(null);

     useEffect(()=>{
          axios.get(`https://www.balldontlie.io/api/v1/games`, {
               params: {
                    start_date: moment().subtract(1,'day').format('YYYY-MM-DD'),
                    end_date: moment().add(1,'day').format('YYYY-MM-DD'),
               }
          })
          .then(function(response){
               const data = response.data.data;
               const dataSort = data.sort( (a,b) => {
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);
                    return dateA - dateB;
               })
               setSchedule(dataSort);
          })
          .catch(error => console.error(error));
     },[]);

     const test = game => {
          const date = moment(game.date).format('MMM D');
          return (
               <Card style={{ minWidth: 160, marginRight: "16px"}} bodyStyle={{padding: "8px 14px"}} key={game.id}> 
                    <p className="game__card--status">
                         <span className="game__card--time">{game.time === "     " ? date : game.time}</span>
                         <span className="game__card--status">{game.status}</span>
                    </p>
                    <article className="game__card">
                         <div className="game__team">
                              <p className="game__team-name">  
                                   <img className="game__team-logo" src={`https://stats.nba.com/media/img/teams/logos/${game.home_team.abbreviation}_logo.svg`} alt={`${game.home_team.full_name} icon`}/>
                                   <span>{game.home_team.abbreviation}</span>
                              </p>
                              <p className="game__score">{game.home_team_score}</p>
                         </div>
                         <div className="game__team">
                              <p className="game__team-name">  
                                   <img className="game__team-logo" src={`https://stats.nba.com/media/img/teams/logos/${game.visitor_team.abbreviation}_logo.svg`} alt={`${game.visitor_team.full_name} icon`}/>
                                   <span>{game.visitor_team.abbreviation}</span>
                              </p>
                              <p className="game__score">{game.visitor_team_score}</p>
                         </div>
                    </article>
               </Card>
          )
     }  

     return(
          <>   
               <article className="games__container bordered">
                    <div className="game__filter">
                    </div>
                    <div className="game__card-container">
                         {schedule ? schedule.map( game =>  test(game) ) : null}
                    </div>
               </article>
               

               <style jsx>{`
                    .games__container{
                         width: 100%;
                         height: 130px;
                         padding: 14px;
                         max-width: 1440px;
                         overflow-x: auto;
                         margin: 0 auto;
                    }
                    .games__container::-webkit-scrollbar {
                         display: none;
                    }
                       /* Hide scrollbar for IE and Edge */
                    .games__container {
                         -ms-overflow-style: none;
                    }
                    .game__card-container{
                         width: 100%;
                         display: flex;
                    }
                    :global(.game__card--status){
                         font-weight: 900;
                         display: flex;
                         justify-content: space-between;
                         margin-bottom: 4px;
                    }
                    :global(.game__card--date){
                         font-weight: 900;
                         margin: 0 0 0 69px;
                    }
                    :global(.game__card--time){
                         font-weight: 700;
                         color: rgba(2,70,216,1);
                         margin-left: 4px;
                    }
                    :global(.game__team){
                         display: flex;
                         justify-content: space-between;
                    }
                    :global(.game__team-name){
                         display:flex;
                         align-items: center;
                         margin-bottom: 4px;
                    }
                    :global(.game__team-logo){
                         width: 24px;
                         height: 24px;
                         margin-right: 6px;
                    }
                    :global(.game__score){
                         font-weight: 700;
                         padding-top: 3px;
                         margin: 0;
                    }
               `}</style>
          </>
     );
}