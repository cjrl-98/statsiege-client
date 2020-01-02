export default function PlayerAvatar(props){
     const addDefaultSrc = (e) => {
          e.target.src = `https://cdn.nba.net/assets/logos/teams/secondary/web/${props.TeamId}.svg`;
     }

     return(
          <>
               <p style={{ width: "150px",marginBottom: 0,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}>
                    <img
                         style={{ borderRadius:"50%" ,width: "40px", marginRight: "8px"}} 
                         src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${props.PLAYER_ID}.png`} 
                         onError={addDefaultSrc}
                         alt={props.PLAYER_NAME}
                    />
                    {props.PLAYER_NAME}
               </p>
          </>
     )
}