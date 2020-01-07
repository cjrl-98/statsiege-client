import { List, Avatar } from 'antd';
import Link from 'next/link'

export default function ConferenceTabs(props){
     return(
          <List
               style={{position: 'relative'}}
               itemLayout="horizontal"
               size="small"
               dataSource={props.data}
               pagination={{ pageSize: 10, style: {marginRight: 24} }}
               renderItem={ team => (
                    <List.Item>
                         <p style={{margin: '0 8px auto 8px', fontSize:'20px'}}>{ team.PlayoffRank }</p>
                         <List.Item.Meta
                              avatar={<Avatar alt={`${team.TeamName} icon`} src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${team.TeamID}.svg`} />}
                              title={<Link href={`/dashboard/${team.TeamID}`} prefetch={false}><a>{team.TeamName}</a></Link>}
                              description={`Wins : ${team.WINS} | Losses: ${team.LOSSES} | Current Streak : ${team.CurrentStreak}`}
                         />
                    </List.Item>
               )}
          />
     );
}