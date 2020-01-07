import {Card, Descriptions} from 'antd';
import {StatGlossaryData} from './StatGlossaryData'
export default function StatGlossary(){
     const StatCardList = StatGlossaryData.map( stat =>{
          return (
               <Card key={stat.acronym} bordered={false}>
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

