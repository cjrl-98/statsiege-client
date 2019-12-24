import {useState, useEffect} from 'react';

import {Menu} from 'antd';
import nba from 'nba-api-client';

export default function Header(){
     const [data, setData] = useState(null);

     useEffect( ()=>{
          const options = {
               Season: '2019-20', 
          }
          nba.leagueStandings({...options}).then(function(data){
               console.log(data)
           })
     },[])

     return(
          <>
               <p></p>
          </>
     );
}