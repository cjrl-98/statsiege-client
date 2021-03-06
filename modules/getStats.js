import axios from 'axios';

const season = '2019-20';

export const getPlayerClutchStats = (pointDif, clutchTime, perMode, id, setStateCallback) => {
     setStateCallback(null);
     axios.get(`https://strawberrystack.me/statsiege/teamPlayerClutch`, {
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
     axios.get(`https://strawberrystack.me/statsiege/leagueStandings`, {
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
     axios.get('https://strawberrystack.me/statsiege/teamHustleStats', {
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
     axios.get('https://strawberrystack.me/statsiege/teamPlayerGeneralStats', {
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
     axios.all([
          axios.get(`https://strawberrystack.me/statsiege/teamDetails?id=${id}`), 
          axios.get(`https://strawberrystack.me/statsiege/teamGeneralStats?id=${id}&season=2019-20`)
     ])
     .then(axios.spread(function (teamDetails, teamGeneralStats) {
          setStateCallback1(teamDetails.data);
          setStateCallback2(teamGeneralStats.data);
     }));
}
export const getPlayerShootingDefense = (id, setStateCallback, perMode, seasonParams) => {
     axios.get('https://strawberrystack.me/statsiege/teamPlayerShootingDefense', {
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