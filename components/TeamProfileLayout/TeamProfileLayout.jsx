import SeasonStandings from '../SeasonStandings/SeasonStandings';
import TeamProfileBoard from '../TeamProfileBoard/TeamProfileBoard';
import Footer from '../Footer/Footer';
export default function TeamProfileLayout(){
     return(
          <>
          <div className="body__container">
               <section className="stats-section">
                    <article className="stats-section__article stats-section__team-profile">
                         <TeamProfileBoard/>
                    </article>
                    <article className="stats-section__article stats-section__season-standings">
                         <SeasonStandings/>
                    </article>
               </section>
               <Footer/>
          </div>
          <style jsx>{`
               .body__container{
                    display: flex;
                    height: 100vh;
                    flex-direction: column;
                    justify-content: space-between;
               }
               .stats-section {
                    min-height: fit-content;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    margin-bottom: 48px;
                    margin-top: 70px;
               }
               .stats-section__article {
                    position: relative;
                    min-width: 350px;
               }
               .stats-section__season-standings{
                    position: relative;
                    height:850px;
               }
               @media (min-width: 1024px){
                    .stats-section {
                         flex-direction: row;
                         margin-top: 106px;
                    }
                    .stats-section__article {
                         border: 2px solid rgba(32, 32, 32, 0.1);
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