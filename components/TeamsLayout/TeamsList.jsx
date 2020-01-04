import Link from 'next/link';
import { List, Avatar, Icon } from 'antd';

export default function TeamsList({teams, division}){

     const linkWrapper = (children, TeamID) => {
          return(
               <Link href="/dashboard/[id]" as={`/dashboard/${TeamID}`} key={TeamID}>
                    <a style={{color: '#0246d8'}}>
                        {children}
                    </a>
               </Link>
          );
     }
     
     const avatar = TeamID => <Avatar size={48} src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${TeamID}.svg`} />;

     return(
          <>   { teams ? 
                    <List
                         header = {<h2 style={{fontSize: 16, fontWeight: 700}}>{division}</h2>}
                         itemLayout="horizontal"
                         style={{minWidth: 288, margin: '16px'}}
                         dataSource={teams}
                         renderItem={team => (
                              <List.Item>
                              <List.Item.Meta
                                   avatar={linkWrapper(avatar(team.TeamID), team.TeamID)}
                                   title={<span style={{fontWeight: 700}}>{team.TeamName}</span>}
                                   description={<span>{linkWrapper("Stats", team.TeamID)} <Icon type="link"/> | Record : {team.Record}</span>}
                              />
                              </List.Item>
                         )}
               /> : null }
          </>
     );
}
