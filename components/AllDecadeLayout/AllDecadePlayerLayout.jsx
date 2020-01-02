import AllDecadeText from './AllDecadeText';

export default function AllDecadePlayerLayout(props){
     return(
          <>
               <section className="player-layout">
                    <div className="player-layout-text">
                         <AllDecadeText player={props.data.player}/>
                    </div>
                    <div className="player-layout-image">
                         <img alt={`${props.data.player.name} Picture`} data-src={props.data.player.img}/>
                    </div>
               </section>
               <style jsx>{`
                    .player-layout{
                         position: relative;
                         width: 100%;
                         height: 100%;
                         display:flex;
                         justify-content: center;
                         align-items: center;
                         overflow: hidden;
                    }
                    .player-layout-image {
                         position: absolute;
                         opacity: 0.35;
                         z-index: -10; 
                         ${props.data.style}
                    }
                    .player-layout-image img{
                         width: 100%;
                         height: 100%;
                    }
                    @media (min-width: 374px){
                         .player-layout-text{
                              margin-right: 13vw;
                         }
                    }
                    @media (min-width: 768px){
                         .player-layout{
                              height: 100vh;
                         }
                         .player-layout-text{
                              margin-right: 23vw;
                         }
                         .player-layout-image {
                              opacity: 1;
                              ${props.data.tabletStyle}
                         }
                    }
                    @media (min-width: 1024px){
                         .player-layout-image {
                              ${props.data.laptopStyle}
                         }
                    }
                    @media (min-width: 1440px){
                         .player-layout-text{
                              margin-right: 350px;
                         }
                         .player-layout-image {
                              ${props.data.desktopStyle}
                         }
                    }
               `}</style>
          </>
     );
}