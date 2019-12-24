import { Popover, Card, Statistic, Row, Col, Descriptions, Alert  } from 'antd';

export default function ProfileTab(props){
     const { team, teamDetails,teamStats} = props;
     console.log(teamStats);
     console.log(team)

     const noOfChampionships = Object.keys(teamDetails.TeamAwardsChampionships);
     const championships = noOfChampionships.map(item=>{
          const content = (
               <div>
                 <p>{teamDetails.TeamAwardsChampionships[item].YEARAWARDED}</p>
                 <p>{`vs ${teamDetails.TeamAwardsChampionships[item].OPPOSITETEAM}`}</p>
               </div>
             );
          return (
               <Popover content={content} key={item + teamDetails.TeamAwardsChampionships[item].YEARAWARDED} trigger="click">
                    <img style={{margin: "5px 4px", marginBottom: "5px", width: "11px"}} src="/nba-championship-trophy.jpg" alt="nba-championship-throphy"/>
               </Popover>
          )          
     })

     const valueStyle = {
          fontSize: "16px"
     }
          return(
               teamStats  && teamDetails && team?
               <>
                    <div style={{ background: '#FFFFFF', margin: '30px 30px 0 30px', fontSize: "10px" }}>
                         <Descriptions
                         size = "small"
                         bordered
                         column={{ sm: 2, xs: 1 }}
                         >
                              <Descriptions.Item style={{fontSize:"10px"}} label="Head Coach">{teamDetails.TeamBackground.HEADCOACH}</Descriptions.Item>
                              <Descriptions.Item label="General Manager">{teamDetails.TeamBackground.GENERALMANAGER}</Descriptions.Item>
                              <Descriptions.Item label="Conference">{`${team.Conference} - Ranked ( ${team.PlayoffRank} )`}</Descriptions.Item>
                              <Descriptions.Item label="Division">{`${team.Division} - Ranked ( ${team.DivisionRank} )`}</Descriptions.Item>
                              {(championships.length !== 0) ?
                              <Descriptions.Item label={`Championships  (${championships.length})`}>
                                   {championships}
                                   <Alert message="Click the throphy for more info" type="info" />
                              </Descriptions.Item> : null}
                         </Descriptions>
                    </div>
                    <div style={{ background: '#FFFFFF', margin: '30px 30px 0 30px' }}>
                         <h1 style={{marginBottom: "20px",fontWeight: "700", fontSize:"24px"}}>2019-20 Season Stats Per Game</h1>
                         <Row gutter={16}>
                              <Col span={12}>
                                   <Card>
                                        <Statistic
                                             title="Current Record"
                                             value={`${teamStats.W}W - ${teamStats.L}L`}
                                             precision={1}
                                             valueStyle={valueStyle}
                                        />
                                   </Card> 
                              </Col>
                              <Col span={12}>
                                   <Card>
                                        <Statistic
                                             title="Field Goals"
                                             value={teamStats.FG_PCT * 100}
                                             precision={1}
                                             suffix="%"
                                             valueStyle={valueStyle}
                                        />
                                   </Card> 
                              </Col>
                         </Row>
                    </div>
                    <div style={{ background: '#FFFFFF', margin: '30px 30px 0 30px' }}>
                         <h1 style={{marginBottom: "20px",fontWeight: "700", fontSize:"24px"}}>2019-20 Season Stats Per Game</h1>
                         <Row gutter={16}>
                              <Col span={12}>
                                   <Card>
                                        <Statistic
                                             title="Points"
                                             value={teamStats.PTS}
                                             precision={1}
                                             valueStyle={valueStyle}
                                        />
                                   </Card> 
                              </Col>
                              <Col span={12}>
                                   <Card>
                                        <Statistic
                                             title="Field Goals"
                                             value={teamStats.FG_PCT * 100}
                                             precision={1}
                                             suffix="%"
                                             valueStyle={valueStyle}
                                        />
                                   </Card> 
                              </Col>
                         </Row>
                    </div>
                    <div style={{ background: '#FFFFFF', padding: '30px' }}>
                         <Row gutter={16}>
                              <Col span={12}>
                                   <Card>
                                        <Statistic
                                             title="Assists"
                                             value={teamStats.AST}
                                             precision={1}
                                             valueStyle={valueStyle}
                                        />
                                   </Card> 
                              </Col>
                              <Col span={12}>
                                   <Card>
                                        <Statistic
                                             title="Rebounds"
                                             value={teamStats.REB}
                                             precision={1}
                                             valueStyle={valueStyle}
                                        />
                                   </Card> 
                              </Col>
                         </Row>
                    </div>
                    <style jsx>{`
                         .regular-season-stats{
                              margin-bottom: 20px;
                              font-weight: 700;
                              font-size: 24px;
                         }
                    `}</style>
               </> : null       
          );
}