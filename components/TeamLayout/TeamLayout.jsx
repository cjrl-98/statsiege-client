import SeasonStandings from '../SeasonStandings/SeasonStandings';
import TeamProfileBoard from '../TeamProfileBoard/TeamProfileBoard';
import TeamPlayerBoard from '../TeamPlayerBoard/TeamPlayerBoard';

export default function TeamLayout(props){
     return(
          <>
          <section className="stats-section">
               <div className="grid-container">
                    <div className="top-container">
                         <div className="team-profile-container bordered-container">
                              <TeamProfileBoard />
                         </div>
                         <div className="season-standings-container  bordered-container">
                              <SeasonStandings/>
                         </div>
                    </div>
                    <div className="team-player-profile-container bordered-container">
                         <TeamPlayerBoard/>
                    </div>
               </div>
          </section>
               
          <style jsx>{`
               .stats-section{
                    width: 100%;
                    margin: 0 auto;
               }
               
               .bordered-container{
                    min-height: 680px;
                    position: relative;
                    border: 1px solid #1d1d1d; 
               }

               .season-standings-container{
                    margin: 16px;
               }

               .team-player-profile-container{
                    width: 100%;
               }

               @media (min-width: 768px) {
                    .stats-section{
                         padding: 24px;
                    }
                    .grid-container {
                         display: grid;
                         grid-template-columns: 1fr;
                         grid-template-rows: 1fr 1fr;
                         grid-template-areas: "top-container" "team-player-profile-container";
                    }
                    
                    .top-container {
                         display: grid;
                         grid-template-columns: 70% 30%;
                         grid-template-rows: 1fr;
                         grid-template-areas: "team-profile-container season-standings-container";
                         grid-area: top-container;
                         margin-bottom: 16px;
                    }
     
                    .season-standings-container {
                         grid-area: season-standings-container;
                         margin: 0;
                    }
                    
                    .team-profile-container {
                         grid-area: team-profile-container;
                         margin-right: 16px;
                    }
                    
                    .team-player-profile-container {
                         grid-area: team-player-profile-container;
                    }
     
                    .layout__article__content{
                         height:800px;
                         overflow: auto;
                    }
               }
               @media (min-width: 1440px) {
                    .stats-section{
                         max-width: 1440px;
                    }
               }
          `}</style>
          </>
     );
}