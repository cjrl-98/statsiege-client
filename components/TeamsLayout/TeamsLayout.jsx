import {useContext} from 'react';
import {LeagueStandingsContext} from '../../context/LeagueStandings';
import Header from '../Header/Header';
import TeamsList from './TeamsList';

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
                    <section className="team__container">
                         <div className="team__conference--bordered">
                              <h2 className="team__conference-title">Western Conference</h2>
                              <article className="team__conference">
                                   <TeamsList teams={pacific} division="Pacific"/>
                                   <TeamsList teams={northwest} division="Northwest"/>
                                   <TeamsList teams={southwest} division="Southwest"/>
                              </article>
                         </div>
                         <div className="team__conference--bordered">
                              <h2 className="team__conference-title">Eastern Conference</h2>
                              <article className="team__conference">
                                   <TeamsList teams={atlantic} division="Atlantic"/>
                                   <TeamsList teams={central} division="Central"/>
                                   <TeamsList teams={southeast} division="Southeast"/>
                              </article>
                         </div>
                    </section>
               </main>

               <style jsx>{`
                    .team-main{
                         display: flex;
                         flex-direction: column;
                         align-items: center;
                         margin-top: 80px;
                    }
                    .team__container{
                         max-width: 1920px;
                         padding:0 16px;
                         margin-top: 24px;
                    }
                    .team__conference--bordered{
                         border: 2px solid #323232;
                         border-radius: 25px;
                         padding: 24px;
                         margin: 24px 0;
                    }
                    .team__conference-title{
                         font-size: 24px;
                         font-weight: 900;
                    }
                    .team__conference{
                         display: flex;
                         flex-direction: column;
                         margin-bottom: 24px;
                    }
                    @media (min-width: 768px){
                         .team__container{
                              padding:0 24px;
                         }
                         .team__conference{
                              flex-direction: row;
                              flex-wrap: wrap;
                         }
                    }
               `}</style>
          </>
     );
}