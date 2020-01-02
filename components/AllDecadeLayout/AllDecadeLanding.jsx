import Burger from '../Burger/Burger';
export default function AllDecadeLanding(){
     return(
          <>
               <Burger/>
               <article className="all-decade__landing">
                    <div className="landing__intro-container">
                         <h1 className="landing__intro-title">NBA All-Decade 1st Team</h1>
                         <p className="landing__intro-paragraph">The decade has seen its share of highlights, stars and heartbreaks, and the game has changed since the last decade. 2010s featured plenty of memorable NBA teams and moments. Throughout those years, a few select players were consistently in the spotlight. From LeBron dominating the east for almost the entire decade, to Steph revolutionizing the way we play the game. Based on their overall impacts on the league, their statistical accomplishments, and their accolades earned along the way, these are Statsiege's top five players of the past decade.
                              <span className="landing__intro-alert">Scroll Down to see the the Team</span>
                         </p>
                    </div>
               </article>
          <style jsx>{`
              .all-decade__landing{
                    width: 100%;
                    position: relative;
                    display:flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
               }
               .landing__intro-container{
                    width: 80%;
                    z-index: 10;
               }
               .landing__intro-title{
                    font-size: 40px;
                    font-weight: 900;
                    margin-bottom: 16px;
               }
               .landing__intro-paragraph{
                    font-size: 13px;
                    line-height: 22px;
               }
               .landing__intro-alert {
                    display: block;
                    width: 100%;
                    font-size: 11px;
                    color: #FFFFFF;
                    border-radius: 25px;
                    padding: 8px 36px;
                    margin-top: 16px;
                    margin-left: auto;
                    background-color: #0246d8;
               }
               @media (min-width: 375px){
                    .landing__intro-title{
                         font-size: 33px;
                    }
                    .landing__intro-paragraph{
                         font-size: 13px;
                         line-height: 25px;
                    }
                    .landing__intro-alert {
                         font-size: 13px;
                    }
               }
               @media (min-width: 425px){
                    .landing__intro-alert {
                         width: fit-content;
                    }
               }
               @media (min-width: 768px){
                    .landing__intro-title{
                         font-size: 56px;
                    }
                    .landing__intro-paragraph{
                         font-size: 16px;
                    }
                    .landing__intro-alert {
                         margin-left: auto;
                    }
               }
               @media (min-width: 1024px){
                    .landing__intro-container{
                         width: 900px;
                    }
                    .landing__intro-paragraph{
                         font-size: 16px;
                    }
               }
               @media (min-width: 1440px){
                    .landing__intro-paragraph{
                         font-size: 18px;
                         line-height: 30px;
                    }
               }
               @media (min-width: 1920px){
               
               }
          `}</style>
          </>
     );
}