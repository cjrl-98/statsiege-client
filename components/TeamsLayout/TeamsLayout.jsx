import {useContext} from 'react';
import {LeagueStandingsContext} from '../../context/LeagueStandings';
import Header from '../Header/Header';
import LiveGames from '../LiveGames/LiveGames';
import TeamsList from './TeamsList';
import Footer from "../Footer/Footer";
export default function TeamsLayout(){
     const leagueStandings = useContext(LeagueStandingsContext);

     const getDivision = filter => {
          return leagueStandings ? leagueStandings.filter( team => team.Division === filter ) : null ;
     }

     const atlantic = getDivision("Atlantic");
     const central = getDivision("Central");
     const southeast = getDivision("Southeast");

     const pacific = getDivision("Pacific");
     const northwest = getDivision("Northwest");
     const southwest = getDivision("Southwest");

     return(
          <>
               <Header/>
               <main className="team-main">
                    <div style={{width: "100%"}}>
                         <LiveGames/>
                    </div>
                    <section className="team__container">
                         <h1 className="teams-main_title">NBA TEAMS</h1>
                         <div className="team__conference--wrapper">
                              <h2 className="team__conference-title">Western Conference</h2>
                              <article className="team__conference">
                                   <TeamsList teams={pacific} division="Pacific"/>
                                   <TeamsList teams={northwest} division="Northwest"/>
                                   <TeamsList teams={southwest} division="Southwest"/>
                              </article>
                         </div>
                         <div className="team__conference--wrapper">
                              <h2 className="team__conference-title">Eastern Conference</h2>
                              <article className="team__conference">
                                   <TeamsList teams={atlantic} division="Atlantic"/>
                                   <TeamsList teams={central} division="Central"/>
                                   <TeamsList teams={southeast} division="Southeast"/>
                              </article>
                         </div>
                    </section>
               </main>
               <Footer/>
               <style jsx>{`
                    .team-main{
                         display: flex;
                         flex-direction: column;
                         align-items: center;
                         margin-top: 70px;
                    }
                    .team__container{
                         max-width: 1920px;
                         border: 2px solid #323232;
                    }
                    .teams-main_title{
                         font-size: 44px;
                         font-weight: 900;
                         padding: 25px;
                         background-color: #000000;
                         color: #FFFFFF;
                         margin-bottom: 24px;
                    }
                    .team__conference--wrapper{
                         padding: 16px 16px 16px 16px;
                    }
                    .team__conference-title{
                         font-size: 24px;
                         font-weight: 900;
                    }
                    .team__conference{
                         display: flex;
                         flex-direction: column;
                    }
                    @media (min-width: 768px){
                         .team__container{
                              margin-top: 24px;
                              margin-bottom: 70px;

                         }
                         .team__conference{
                              flex-direction: row;
                              flex-wrap: wrap;
                              width: 650px;
                         }
                         .team__conference--wrapper{
                              padding: 24px 24px 0 24px;
                         }
                    }
                    @media (min-width: 1024px){
                         .team__conference{
                              flex-direction: row;
                              flex-wrap: wrap;
                              width: 980px;
                         }
                         .team__conference--wrapper{
                              padding: 24px;
                         }
                    }
               `}</style>
          </>
     );
}