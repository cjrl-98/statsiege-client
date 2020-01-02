import {Card, Descriptions} from 'antd';
import {StatGlossaryData} from './StatGlossaryData'
export default function StatGlossary(){
     const statSort = StatGlossaryData.sort( (a,b) => {
          if(a.acronym < b.acronym) { return -1; }
          if(a.acronym > b.firstname) { return 1; }
          return 0;
     });
     const StatCardList = statSort.map( stat =>{
          return (
               <Card key={stat.acronym}>
                    <Descriptions title={stat.acronym} bordered column={1}>
                         <Descriptions.Item label="Name">{stat.name}</Descriptions.Item>
                         <Descriptions.Item label="Definition">{stat.definition}</Descriptions.Item>
                    </Descriptions>
               </Card>
          );
     })
     return(
          <>
               {StatCardList}
          </>
     )
}

