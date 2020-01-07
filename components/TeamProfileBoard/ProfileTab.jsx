import { Alert, Card, Col, Descriptions, Icon,  Popover,  Row, Statistic } from 'antd';

export default function ProfileTab(props){
     const { team, teamDetails,teamStats} = props;

     const championshipsList = Object.values(teamDetails.TeamAwardsChampionships).map(item=>{
          const content = (
               <div>
                 <p><a href={`https://en.wikipedia.org/wiki/${item.YEARAWARDED}_NBA_Finals`} target="_blank" rel="noopener noreferrer">{item.YEARAWARDED} <Icon type="link"/> </a></p>
                 <p>{`vs ${item.OPPOSITETEAM}`}</p>
               </div>
             );
          return (
               <Popover content={content} key={item.YEARAWARDED} trigger="click">
                    <img style={{margin: "5px 4px", marginBottom: "5px", width: "11px"}} src="https://firebasestorage.googleapis.com/v0/b/statsiege.appspot.com/o/icon%2Fnba-championship-trophy.gif?alt=media&token=78684fcf-b721-4e8f-b029-930cb7f432a4" alt="nba-championship-throphy"/>
               </Popover>
          )          
     })
     return(
          teamStats  && teamDetails && team ?
          <>
               <div style={{ background: '#FFFFFF', margin: '15px 15px 0 15px', fontSize: "10px" }}>
                    <Descriptions
                    size = "small"
                    bordered
                    column={{xs:1,sm:2}}
                    >
                         <Descriptions.Item style={{fontSize:"10px"}} label="Head Coach">{teamDetails.TeamBackground.HEADCOACH}</Descriptions.Item>
                         <Descriptions.Item label="General Manager">{teamDetails.TeamBackground.GENERALMANAGER}</Descriptions.Item>
                         <Descriptions.Item label="Conference">{`${team.Conference} - Ranked (${team.PlayoffRank})`}</Descriptions.Item>
                         <Descriptions.Item label="Division">{`${team.Division} - Ranked (${team.DivisionRank})`}</Descriptions.Item>
                         {(championshipsList.length !== 0) ?
                         <Descriptions.Item label={`Championships  (${championshipsList.length})`}>
                              {championshipsList}
                              <Alert message="Click the throphy for more info" type="info" />
                         </Descriptions.Item> : null}
                    </Descriptions>
               </div>
               <div style={{ background: '#FFFFFF', margin: '15px 15px 0 15px' }}>
                    <h1 className="profile-tab__table-title">Season Record</h1>
                    <Row gutter={16}>
                         <Col span={12}>
                              <Card>
                                   <Statistic
                                        title="Current Record"
                                        value={`${team.WINS}W - ${team.LOSSES}L`}
                                        precision={1}
                                        valueStyle={{fontSize: "16px"}}
                                   />
                              </Card> 
                         </Col>
                         <Col span={12}>
                              <Card>
                                   <Statistic
                                        title="Current Streak"
                                        value={team.strCurrentStreak}
                                        precision={1}
                                        valueStyle={{fontSize: "16px"}}
                                   />
                              </Card> 
                         </Col>
                    </Row>
               </div>
               <div style={{ background: '#FFFFFF', margin: '15px 15px 0 15px' }}>
                    <Row gutter={16}>
                         <Col span={12}>
                              <Card>
                                   <Statistic
                                        title="Home Record"
                                        value={team.HOME}
                                        precision={1}
                                        valueStyle={{fontSize: "16px"}}
                                   />
                              </Card> 
                         </Col>
                         <Col span={12}>
                              <Card>
                                   <Statistic
                                        title="Away Record"
                                        value={team.ROAD}
                                        precision={1}
                                        valueStyle={{fontSize: "16px"}}
                                   />
                              </Card> 
                         </Col>
                    </Row>
               </div>
               <div style={{ background: '#FFFFFF', margin: '15px 15px 0 15px' }}>
                    <h1 className="profile-tab__table-title">2019-20 Season Stats Per Game</h1>
                    <Row gutter={16}>
                         <Col span={12}>
                              <Card>
                                   <Statistic
                                        title="Points"
                                        value={teamStats.PTS}
                                        precision={1}
                                        valueStyle={{fontSize: "16px"}}
                                   />
                              </Card> 
                         </Col>
                         <Col span={12}>
                              <Card>
                                   <Statistic
                                        title="Field Goals"
                                        value={teamStats.FG_PCT}
                                        precision={1}
                                        suffix="%"
                                        valueStyle={{fontSize: "16px"}}
                                   />
                              </Card> 
                         </Col>
                    </Row>
               </div>
               <div style={{ background: '#FFFFFF', padding: '15px' }}>
                    <Row gutter={16}>
                         <Col span={12}>
                              <Card>
                                   <Statistic
                                        title="Assists"
                                        value={teamStats.AST}
                                        precision={1}
                                        valueStyle={{fontSize: "16px"}}
                                   />
                              </Card> 
                         </Col>
                         <Col span={12}>
                              <Card>
                                   <Statistic
                                        title="Rebounds"
                                        value={teamStats.REB}
                                        precision={1}
                                        valueStyle={{fontSize: "16px"}}
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
                    .profile-tab__table-title{
                         font-size: 18px;
                         font-weight: 700;
                         margin-bottom: 16px;
                    }
               `}</style>
          </> : null       
     );
}