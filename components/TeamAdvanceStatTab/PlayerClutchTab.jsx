import {useState, useEffect} from 'react';
import { Button, Dropdown, Icon, Select, Tag } from 'antd';
import { getPlayerClutchStats } from '../../modules/getStats';
import PlayerStatTable from '../PlayerStatTable/PlayerStatTable';

const { Option } = Select;

export default function PlayerClutchTab(props){
     const [clutchStatData, setClutchStatData] = useState(null);
     const [pointDif, setPointDif] = useState('5');
     const [clutchTime, setClutchTime] = useState('Last 5 Minutes');
     const [perMode, setPerMode] = useState('PerGame')

     useEffect( ()=>{
          getPlayerClutchStats(pointDif, clutchTime, perMode, props.teamId, setClutchStatData);
     },[props.teamId]);  
    
     const menu = (
          <>
               <Select style={{ width: 150, margin: "8px" }} placeholder="Per Mode" onChange={ value => setPerMode(value)}>
                    <Option value="Totals">Totals</Option>
                    <Option value="PerGame">Per Game</Option>
                    <Option value="Per36">Per 36 Minutes</Option>
                    <Option value="Per40">Per 40 Minutes</Option>
                    <Option value="Per48">Per 48 Minute</Option>
                    <Option value="PerPlay">Per 1 Play</Option>
                    <Option value="PerPossession">Per Possession</Option>
                    <Option value="Per100Possessions">Per 100 Possessions</Option>
                    <Option value="MinutesPer">Per Minute</Option>
               </Select>
               <Select style={{ width: 150, margin: "8px" }} placeholder="Point Difference" onChange={ value => setPointDif(value)}>
                    <Option value="5">5 Point Diff or Less</Option>
                    <Option value="4">4 Point Diff or Less</Option>
                    <Option value="3">3 Point Diff or Less</Option>
                    <Option value="2">2 Point Diff or Less</Option>
                    <Option value="1">1 Point Diff</Option>
               </Select>
               <Select style={{ width: 150, margin: "8px" }} placeholder="Clutch Time" onChange={ value => setClutchTime(value)}>
                    <Option value="Last 5 Minutes">Last 5 Minutes</Option>
                    <Option value="Last 4 Minutes">Last 4 Minutes</Option>
                    <Option value="Last 3 Minutes">Last 3 Minutes</Option>
                    <Option value="Last 2 Minutes">Last 2 Minutes</Option>
                    <Option value="Last 1 Minute">Last 1 Minute</Option>
                    <Option value="Last 30 Seconds">Last 30 Seconds</Option>
                    <Option value="Last 10 Seconds">Last 10 Seconds</Option>
               </Select>
          </>
        );
     return(
          <>   
               <div className="player-clutch__filter-buttons">
                    <Dropdown trigger={["click"]} overlay={menu} overlayClassName="player-clutch__filter-options main-color">
                         <Button>Options <Icon type="down" /></Button>
                    </Dropdown>
                    <Button
                         className="player-clutch__filter-submit main-color"
                         type="primary"
                         icon="filter"
                         loading={ clutchStatData? false : true }
                         onClick={ () => getPlayerClutchStats(pointDif, clutchTime, perMode, props.teamId, setClutchStatData) }
                    >
                         Filter
                    </Button>
               </div> 
               <div className="player-clutch__filter-tags">
                         <Tag className="player-clutch__filter-tag main-color">Stat Filters</Tag>
                         <span className="player-clutch__filter-colon">:</span>
                         <Tag className="player-clutch__filter-tag">{perMode}</Tag>
                         <Tag className="player-clutch__filter-tag">{clutchTime}</Tag>
                         <Tag className="player-clutch__filter-tag">{`${pointDif} ${pointDif === '1' ? 'Point Diff' : 'Point Diff or Less'}`}</Tag>
               </div>
               <PlayerStatTable TeamId={props.teamId} data={clutchStatData}/>
               <style jsx>{`
                    .player-clutch__filter-buttons{
                         width: 100%;
                         display: flex;
                         justify-content: flex-end;
                         padding: 10px 10px 5px 0px;
                    }
                    :global(.player-clutch__filter-submit){
                         margin-left: 8px;
                         border: none;
                    }
                    .player-clutch__filter-tags{
                         width: fit-content;
                         display: flex;
                         align-items: center;
                         flex-wrap: wrap;
                         padding: 5px 10px 10px 10px;
                    }
                    :global(.player-clutch__filter-tag){
                         margin: 3px;
                    }
                    .player-clutch__filter-colon{
                         font-weight: 24px;
                         font-weight: 900;
                         margin: 0 4px;
                    }
                    :global(.player-clutch__filter-options){
                         width: 170px;
                         border-radius: 5px;
                    }
                    
               `}</style>
          </>
     );
}