import SeasonStandings from '../SeasonStandings/SeasonStandings';
import TeamProfileBoard from '../TeamProfileBoard/TeamProfileBoard';

export default function TeamLayout(props){
     return(
          <>
               <section className="layout">
                    <div className="layout__container">
                         <article className="layout__article layout__article--left">
                                   <TeamProfileBoard />
                         </article>
                         <article className="layout__article layout__article--right">
                              <h1 className="layout__article--standings-title">2019-20 Season Standings</h1>
                              <div className="layout__article__content">
                                   <SeasonStandings/>
                              </div>
                         </article>
                    </div>
               </section>
               <style jsx>{`
                    .layout {
                         width: 100%;
                         display: flex;
                         flex-direction: coloumn;
                         justify-content: center;
                    }
                    .layout__container {
                         width: 100%;
                         display:flex;
                         flex-direction : column;
                         margin: 16px;
                         justify-content: center;
                    }

                    .layout__article{
                         position: relative;
                         width: 100%;
                    }
                    
                    .layout__article--left{
                         min-height: 400px;
                         border: 1px solid #1d1d1d;
                    }

                    .layout__article__content{
                         overflow: auto;
                         max-height: 400px;
                         border: 1px solid #1d1d1d;
                    }

                    .layout__article--standings-title{
                         font-size : 24px;
                         font-weight: 900;
                         background-color: ${'#542583'};
                         color: #ffffff;
                         padding: 8px 16px;
                         margin: 0;
                    }

                    @media (min-width: 768px) {
                         .layout__container {
                              flex-direction: row;
                              margin: 24px;
                         }
                         .layout__article--left{
                              width: 60%;
                         }
                         .layout__article--right{
                              width: 40%;
                              overflow: auto;
                              margin-left: 16px;
                         }
                    }
                    @media (min-width: 1024px) {
                         
                    }
               `}</style>
        </>
     );
}