import Link from 'next/link';

export default function AllDecadeLayout({player}){
     return(
          <>
               <article className="all-decade__text">
                    <div className="all-decade__title">
                         <h2 className="all-decade__team">
                              <span></span>
                              {player.team}
                         </h2>
                         <h1 className="all-decade__player">{player.name}</h1>
                    </div>
                         <p className="all-decade__bio">{player.bio}</p>
                    <div className="all-decade__btn-container">
                         <Link href={"/dashboard/[id]"} as={`/dashboard/${player.TeamID}`}>
                              <a>
                                   <button className="all-decade__btn all-decade__btn--view">View Team</button>
                              </a>
                         </Link>
                         <a href={player.wikipedia} target="_blank" rel="noopener noreferrer">
                              <button className="all-decade__btn all-decade__btn--read-more">Read More</button>
                         </a>
                    </div>
                    <div className="all-decade__stat-container">
                         <div className="all-decade__stat">
                              <p className="all-decade__stat_label">POINTS PER GAME</p>
                              <p className="all-decade__stat_data">{player.ppg}</p>
                         </div>
                         <div className="all-decade__stat">
                              <p className="all-decade__stat_label">ASSISTS PER GAME</p>
                              <p className="all-decade__stat_data">{player.apg}</p>
                         </div>
                         <div className="all-decade__stat">
                              <p className="all-decade__stat_label">REBOUNDS PER GAME</p>
                              <p className="all-decade__stat_data">{player.rpg}</p>
                         </div>
                    </div>
                    <div className="all-decade__awards--container">
                         <div className="all-decade__award">
                              <div className="all-decade__award-icon">
                                   <img alt="mvp-icon" src="https://firebasestorage.googleapis.com/v0/b/statsiege.appspot.com/o/icon%2Fmvp.svg?alt=media&token=46c9001c-5248-41b2-b07c-053f587fa0a2"/>
                              </div>
                              <div className="all-decade__award-label">
                                   <p>{player.mvp[0]} MVP</p>
                                   <p>{player.mvp[1]}</p>
                              </div>
                         </div>
                         <div className="all-decade__award">
                              <div className="all-decade__award-icon">
                                   <img alt="all-nba-icon" src="https://firebasestorage.googleapis.com/v0/b/statsiege.appspot.com/o/icon%2Fall-nba.svg?alt=media&token=11d81b82-e40f-43f1-b426-83311f293ac5"/>
                              </div>
                              <div className="all-decade__award-label">
                                   <p>{player.allNba[0]} ALL NBA 1st Team</p>
                                   <p>{player.allNba[1]}</p>
                              </div>
                         </div>
                         {player.scoring ?
                         <div className="all-decade__award">
                              <div className="all-decade__award-icon">
                                   <img alt="all-nba-icon" src="https://firebasestorage.googleapis.com/v0/b/statsiege.appspot.com/o/icon%2Fscoring.svg?alt=media&token=5ef2ee98-58a7-4207-890d-b1bba9964019"/>
                              </div>
                              <div className="all-decade__award-label">
                                   <p>{player.scoring[0]} NBA scoring champion</p>
                                   <p>{player.scoring[1]}</p>
                              </div>
                         </div>
                         : null }
                         {player.championship ?
                              <div className="all-decade__award">
                                   <div className="all-decade__award-icon">
                                        <img alt="all-nba-icon" src="https://firebasestorage.googleapis.com/v0/b/statsiege.appspot.com/o/icon%2Fchampion.svg?alt=media&token=f59dec06-878f-474a-a0cf-d3558056a280"/>
                                   </div>
                                   <div className="all-decade__award-label">
                                        <p>{player.championship[0]} NBA Champion</p>
                                        <p>{player.championship[1]}</p>
                                   </div>
                              </div>
                         : null }
                    </div>
               </article>

               <style jsx>{`
                    .all-decade__text{
                         color: #000000;
                    }
                    .all-decade__title{
                         font-weight: 900;
                    }
                    .all-decade__team{
                         display: flex;
                         align-items: center;
                         font-size: 8px;
                         margin-left: 8px
                    }
                    .all-decade__title span{
                         display: inline-block;
                         width: 16px; 
                         height: 3px; 
                         background-color: ${player.color[1]};
                         margin-right: 8px;
                    }
                    .all-decade__player{
                         font-size: 28px;
                         font-weight: 900;
                         margin-top: 8px;
                         width: 260px;
                    }
                    .all-decade__bio{
                         font-size: 10px;
                         line-height: 17px;
                         width: 260px;
                         margin-top: 16px;
                    }
                    .all-decade__btn-container{
                         margin-top: 16px;
                    }
                    .all-decade__btn{
                         width: 105px;
                         height: 20px;
                         clip-path: polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%);
                         font-size: 6px;
                         color: #FFFFFF;
                         font-weight: 900;
                         border: none;
                    }
                    .all-decade__btn--view{
                         color: #FFFFFF;
                         background-color: ${player.color[0]};
                    }
                    .all-decade__btn--read-more{
                         background-color: ${player.color[1]};
                    }
                    .all-decade__stat-container{
                         width: 100%;
                         display:flex;
                         justify-content: space-between;
                         margin-top: 16px;
                    }
                    .all-decade__stat{
                         display: flex;
                         justify-content: center;
                         align-items: center;
                         flex-direction: column;
                         width: 81px;
                         height: 55px;
                         border: 3px solid #000000;
                         border-radius: 10px;
                    }
                    .all-decade__stat_label{
                         width: 100%;
                         text-align: center;
                         font-size: 7px;
                         margin-bottom: 7px;
                         font-weight: 700;
                         white-space: nowrap;
                         overflow: hidden;
                         text-overflow: ellipsis;
                    }
                    .all-decade__stat_data{
                         font-size: 16px;
                         font-weight: 900;
                    }
                    .all-decade__awards--container{
                         margin-top: 24px;
                    }
                    .all-decade__award{
                         display: flex;
                         align-items: center;
                         width: 190px;
                         margin-bottom: 18px;
                    }
                    .all-decade__award-icon{
                         display: flex;
                         align-items: center;
                         justify-content: center;
                         width: 46px;
                         height: 33px;
                    }
                    .all-decade__award-icon img{
                         height: 100%;
                    }
                    .all-decade__award-label{
                         font-size: 10px;
                         margin-left: 8px;
                         line-height: 14px;
                    }
                    .all-decade__award-label p:nth-child(1){
                         font-weight: 700;
                    }
                    @media (min-width: 768px){
                         .all-decade__title span{
                              width: 32px; 
                              height: 5px; 
                              margin-right: 14px;
                         }
                         .all-decade__team{
                              font-size: 16px;
                              margin-left: 24px;
                         }
                         .all-decade__player{
                              font-size: 56px;
                              margin-top: 16px;
                              width: 450px;
                         }
                         .all-decade__bio{
                              font-size: 13px;
                              line-height: 22px;
                              width: 430px;
                              margin-top: 24px;
                         }
                         .all-decade__btn-container{
                              margin-top: 24px;
                         }
                         .all-decade__btn{
                              width: 210px;
                              height: 33px;
                              font-size: 10px;
                         }
                         .all-decade__stat-container{
                              width: 520px;
                              margin-top: 24px;
                         }
                         .all-decade__stat{
                              width: 155px;
                              height: 105px;
                              border-radius: 16px;
                              border: 5px solid #000000;
                         }
                         .all-decade__stat_label{
                              font-size: 10px;
                         }
                         .all-decade__stat_data{
                              font-size: 33px;
                         }
                         .all-decade__awards--container{
                              margin-top: 24px;
                              margin-left: 24px
                         }
                         .all-decade__award{
                              width: 300px;
                         }
                         .all-decade__award-icon{
                              height: 42px;
                         }
                         .all-decade__award-label{
                              font-size: 13px;
                              margin-left: 24px;
                              line-height: 22px;
                         }
                    }
                    @media (min-width: 1024px){
                         .all-decade__bio{
                              width: 580px;
                         }
                    }
                    @media (min-width: 1440px){
                         .all-decade__bio{
                              font-size: 13px;
                              line-height: 22px;
                         }
                    }
                    @media (min-width: 1920px){
                         .all-decade__bio{
                              font-size: 16px;
                              line-height: 25px;
                         }
                    }
               `}</style>
          </>
     );
}