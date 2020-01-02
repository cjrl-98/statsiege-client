import axios from 'axios';

const season = '2019-20';

export const getPlayerClutchStats = (pointDif, clutchTime, perMode, id, setStateCallback) => {
     setStateCallback(null);
     axios.get(`http://localhost:5000/statsiege/teamPlayerClutchSplits`, {
          params: {
               season: season,
               id: id,
               pointDiff: pointDif,
               clutchTime: clutchTime,
               perMode: perMode
          }
     })
     .then(function(response){
          setStateCallback(response.data);
     })
     .catch(error => console.error(error));
}

export const getLeagueStandings = (setStateCallback) => {
     axios.get(`http://localhost:5000/statsiege/leagueStandings`, {
          params: {
               season: season,
          }
     })
     .then(function(response){
          setStateCallback(response.data);
     })
     .catch(error => console.error(error));
}

export const getPlayerHustleStats = (id, setStateCallback) => {
     axios.get('http://localhost:5000/statsiege/teamHustleStats', {
          params: {
               id: id,
               season: season,
          }
     })
     .then(function(response){
          setStateCallback(response.data);
     })
     .catch(error => console.error(error));
}

export const getPlayerGeneralStats = (id, setStateCallback) => {
     axios.get('http://localhost:5000/statsiege/teamPlayerGeneralStats', {
          params: {
               id: id,
               season: season,
          }
     })
     .then(function(response){
          setStateCallback(response.data);
     })
     .catch(error => console.error(error));
}

export const getTeamDetails = (id, setStateCallback1, setStateCallback2 ) => {
     console.time("getTeamDetails : ")
     axios.all([
          axios.get(`http://localhost:5000/statsiege/teamDetails?id=${id}`), 
          axios.get(`http://localhost:5000/statsiege/teamGeneralStats?id=${id}&season=2019-20`)
     ])
     .then(axios.spread(function (teamDetails, teamGeneralStats) {
          setStateCallback1(teamDetails.data);
          setStateCallback2(teamGeneralStats.data);
          console.timeEnd("getTeamDetails : ")
     }));
}
export const getPlayerShootingDefense = (id, setStateCallback, perMode, seasonParams) => {
     axios.get('http://localhost:5000/statsiege/teamPlayerShootingDefense', {
          params: {
               id: id,
               season: seasonParams ? seasonParams : season,
               perMode: perMode
          }
     })
     .then(function(response){
          setStateCallback(response.data);
     })
     .catch(error => console.error(error));
}