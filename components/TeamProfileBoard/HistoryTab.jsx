import { Card, Descriptions, Icon, Popover, Tag } from 'antd';

export default function HistoryTab(props){
     const {TeamHistory, TeamAwardsChampionships,TeamAwardsConf,TeamAwardsDiv,TeamRetired} = props.teamDetails;
     const historyList = TeamHistory.NICKNAME ? 
          <Descriptions 
               title={TeamHistory.CITY} 
               key={`${TeamHistory.CITY}-${TeamHistory.TEAM_ID}`}
               bordered
               size="small"
               column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
               style={{marginBottom: "24px"}}
               >
               <Descriptions.Item label="Nickname">{TeamHistory.NICKNAME}</Descriptions.Item>
               <Descriptions.Item label="City">{TeamHistory.CITY}</Descriptions.Item>
               <Descriptions.Item label="Year Founded">{TeamHistory.YEARFOUNDED}</Descriptions.Item>
               <Descriptions.Item label="Year Active Till">{TeamHistory.YEARACTIVETILL}</Descriptions.Item>
          </Descriptions>
          :
          Object.values(TeamHistory).map( item => {
               return (
                    <Descriptions 
                         title={item.CITY} 
                         key={`${item.CITY}-${item.TEAM_ID}`}
                         bordered
                         size="small"
                         column={{ sm: 2, xs: 1 }}
                         style={{marginBottom: "24px"}}
                         >
                         <Descriptions.Item label="Nickname">{item.NICKNAME}</Descriptions.Item>
                         <Descriptions.Item label="City">{item.CITY}</Descriptions.Item>
                         <Descriptions.Item label="Year Founded">{item.YEARFOUNDED}</Descriptions.Item>
                         <Descriptions.Item label="Year Active Till">{item.YEARACTIVETILL}</Descriptions.Item>
                    </Descriptions>
               );
          })
          const championshipsList = Object.values(TeamAwardsChampionships).map( championship => {
               const content = (
                    <span><a href={`https://en.wikipedia.org/wiki/${championship.YEARAWARDED}_NBA_Finals`} target="_blank" rel="noopener noreferrer">{`vs ${championship.OPPOSITETEAM} `} <Icon type="link"/> </a></span>
               );
               return(
                    <Popover content={content} key={championship.YEARAWARDED} trigger="click">
                         <Tag style={{margin: "4px"}}>{championship.YEARAWARDED}</Tag>
                    </Popover>
               );
          } );

          const conferenceTitleList = Object.values(TeamAwardsConf).map( conferenceTitle => {
               const content = (
                    <a href={`https://en.wikipedia.org/wiki/${conferenceTitle.YEARAWARDED}_NBA_playoffs`} target="_blank" rel="noopener noreferrer">More Info <Icon type="link"/></a>
               );
               return(
                    <Popover content={content} key={conferenceTitle.YEARAWARDED} trigger="click">
                         <Tag style={{margin: "4px"}}>{conferenceTitle.YEARAWARDED}</Tag>
                    </Popover>
               );
          } );

          const divisionTitleList = Object.values(TeamAwardsDiv).map( divisionTitle => <Tag style={{margin: "4px"}} key={divisionTitle.YEARAWARDED}>{divisionTitle.YEARAWARDED}</Tag> );

          const retiredPlayerList = TeamRetired ? 
          Object.values(TeamRetired).map ( player => {
               return (
                    <Card 
                         key = {player.PLAYERID}
                         size="small" 
                         title={player.PLAYER} 
                         extra={<a href={`https://en.wikipedia.org/wiki/${player.PLAYER}`} target="_blank" rel="noopener noreferrer">More</a>} 
                         style={{width: "180px", margin: "8px"}}
                         headStyle={{fontSize: "16px", fontWeight: 500}}
                    >
                         <p>{`Position : ${player.POSITION}`}</p>
                         <p>{`Jersey: ${player.JERSEY !== " " ? player.JERSEY : "N/A" }`}</p>
                         <p>{`Seasons with : ${player.SEASONSWITHTEAM}`}</p>
                         <p>{`Retired : ${player.YEAR}`}</p>
                    </Card>
               )
          }) 
          : null ;

          const accomplishmentsTitle =  <span>Accomplishments {<Tag style={{marginLeft: "4px", fontWeight: "300"}}>Click each tag for info and links</Tag>}</span>
          
          return(
               props.teamDetails ?
               <>
                    {historyList}
                    <Descriptions 
                         title={accomplishmentsTitle}
                         bordered
                         size="middle"
                         layout={"vertical"}
                         style={{marginBottom: "24px"}}
                         column={{ sm: 1, xs: 1 }}
                         >
                         {championshipsList.length > 0 ? <Descriptions.Item label={`Championships ( ${championshipsList.length} )`}>{championshipsList}</Descriptions.Item> : null}
                         {conferenceTitleList.length > 0 ? <Descriptions.Item label={`Conference Titles ( ${conferenceTitleList.length} )`}>{conferenceTitleList}</Descriptions.Item> : null}
                         {divisionTitleList.length > 0 ? <Descriptions.Item label={`Division Titles ( ${divisionTitleList.length} )`}>{divisionTitleList}</Descriptions.Item> : null}
                    </Descriptions>
                    <h1 className="team-retired__title">Players Retired</h1>
                    <div className="team-retired__container">
                         {retiredPlayerList}
                    </div>
                    <style jsx>{`
                         .team-retired__title{
                              font-size: 18px;
                              font-weight: 700;
                              margin-bottom: 16px;
                         }
                         .team-retired__container {
                              width: 100%;
                              display: flex;
                              flex-wrap: wrap;
                         }
                    `}</style>
               </> : null       
          );
}
