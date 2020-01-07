import { Avatar, Icon, List, Skeleton } from 'antd';
import Link from 'next/link';

export default function TeamsList({teams, division}){

     const linkWrapper = (children, TeamID) => {
          return(
               <Link prefetch={false} href="/dashboard/[id]" as={`/dashboard/${TeamID}`} key={TeamID}>
                    <a style={{color: '#0246d8'}}>
                        {children}
                    </a>
               </Link>
          );
     }
     
     const avatar = TeamID => <Avatar size={48} src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${TeamID}.svg`} />;

     return(
          <> 
               <List
                    header = {<h2 style={{fontSize: 16, fontWeight: 700}}>{division}</h2>}
                    itemLayout="horizontal"
                    style={{minWidth: 288, margin: '16px'}}
                    dataSource={teams ? teams : ['','','','','']}
                    renderItem={team => (
                         <List.Item>
                              <Skeleton loading={teams ? false : true} avatar active>
                                   <List.Item.Meta
                                        avatar={linkWrapper(avatar(team.TeamID), team.TeamID)}
                                        title={<span>{team.TeamName}</span>}
                                        description={<span>{linkWrapper("Stats", team.TeamID)} <Icon type="link"/> | Record : {team.Record}</span>}
                                   />
                              </Skeleton>
                         </List.Item>
                    )}
               />
          </>
     );
}
