import SeasonStandings from '../SeasonStandings/SeasonStandings';
import TeamProfileBoard from '../TeamProfileBoard/TeamProfileBoard';

export default function TeamProfileLayout(){
     return(
          <>
          <section className="stats-section">
               <article className="stats-section__team-profile">
                    <TeamProfileBoard/>
               </article>
               <article className="stats-section__season-standings">
                    <SeasonStandings/>
               </article>
          </section>
          <style jsx>{`
               .stats-section {
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    margin-bottom: 48px;
                    margin-top: 70px;
               }
               article {
                    position: relative;
                    min-width: 350px;
                    min-height: 350px;
               }
               .stats-section__season-standings{
                    height:850px;
               }
               @media (min-width: 1024px){
                    .stats-section {
                         flex-direction: row;
                         margin-top: 106px;
                    }
                    article {
                         border: 2px solid #323232;
                    }
                    .stats-section__team-profile{
                         max-width: 650px;
                    }
                    .stats-section__season-standings{
                         margin-left: 16px;
                    }
               }
               @media (min-width: 1440px){
                    .stats-section__team-profile{
                         width: 850px;
                         max-width: 850px;
                    }
               }
          `}</style>
          </>
     );
}