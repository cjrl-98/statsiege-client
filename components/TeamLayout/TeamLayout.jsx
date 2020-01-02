import SeasonStandings from '../SeasonStandings/SeasonStandings';
import TeamProfileBoard from '../TeamProfileBoard/TeamProfileBoard';

export default function TeamLayout(){
     return(
          <>
          <section className="stats-section">
               <article className="stats-section__team-profile">
                    <TeamProfileBoard/>
               </article>
               <article className="stats-section__team-profile">
                    <SeasonStandings/>
               </article>
          </section>
          <style jsx>{`
               article {
                    position: relative;
                    min-height: 650px;
               }
          `}</style>
          </>
     );
}