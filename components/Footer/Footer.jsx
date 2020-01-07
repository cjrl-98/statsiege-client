import {Icon} from 'antd';
import Link from 'next/link';
export default function Footer(){
     return(
          <>
               <footer className="footer">
                    <section className="footer__wrapper">
                         <article>
                              <div className="footer__left">
                                   <img className="footer__logo" alt="statsiege logo" src="https://firebasestorage.googleapis.com/v0/b/statsiege.appspot.com/o/icon%2Fstatsiege-logo.png?alt=media&token=55689b1b-f4b6-4fda-b0c6-fc8c847f8101"/>
                                   <h1 className="footer__logo-name">Statsiege</h1>
                                   <a href="https://github.com/cjrl-98" target="_blank" rel="noopener">
                                        <Icon type="github" style={{ marginTop: "5px", marginLeft: "16px", fontSize: "18px", color: "#FFFFFF"}}/>
                                   </a>
                                   <a href="https://www.linkedin.com/in/christian-lagasca-5a1625186" target="_blank" rel="noopener">
                                        <Icon type="linkedin" style={{ marginTop: "5px", marginLeft: "16px", fontSize: "18px", color: "#FFFFFF"}}/>
                                   </a>
                                   <a href="https://dribbble.com/cjrl_" target="_blank" rel="noopener">
                                        <Icon type="dribbble" style={{ marginTop: "5px", marginLeft: "16px", fontSize: "18px", color: "#FFFFFF"}}/>
                                   </a>
                              </div>
                              <p className="footer__text">Statsiege is a web app project that allows users to track their favourite NBA team throughout the season</p>
                         </article>
                         <article className="footer__article">
                              <h2 className="footer__h2">Statsiege</h2>
                              <Link href="/teams"><a className="footer__link-item">Teams</a></Link>
                              <p className="footer__link-item" style={{textDecoration: "line-through"}}>Players</p>
                              <Link href="/decade"><a className="footer__link-item">All Decade Team</a></Link>
                              <p className="footer__link-item" style={{textDecoration: "line-through"}}>Stats Glossary</p>
                              <p className="footer__link-item" style={{textDecoration: "line-through"}}>About</p>
                         </article>
                         <article className="footer__article">
                              <h2 className="footer__h2">Project Progress</h2>
                              <p className="footer__text">The project is still on going and features are continuously being released.<br/>For feature suggestions or to report bugs please send an email<br/>Follow the projects progress at GitHub!</p>
                              <div>
                                   <a href="https://github.com/cjrl-98/statsiege-client" target="_blank" rel="noopener">
                                        <Icon type="github" style={{ marginTop: "5px", fontSize: "18px", color: "#FFFFFF"}}/>
                                   </a>
                                   <a href="mailto:cjrl998@icloud.com">
                                        <Icon type="mail" style={{ marginLeft:"16px", marginTop: "5px", fontSize: "18px", color: "#FFFFFF"}}/>
                                   </a>
                              </div>
                         </article>
                    </section>
               </footer>

               <style jsx>{`
                    .footer{
                         width: 100%;
                         background-color: #000000;
                         padding: 24px 16px;
                         color: #FFFFFF;
                    }
                    .footer__wrapper{
                         display: flex;
                         flex-direction: column;
                         max-width: 1440px;
                         margin: 0 auto;
                    }
                    .footer__left{
                         display: flex;
                         align-items: center;
                    }
                    .footer__logo{
                         width: 32px;
                         margin-right: 8px;
                    }
                    .footer__logo-name{
                         font-size: 20px;
                         font-weight: 900;
                         margin: 0;
                         color: #FFFFFF;
                         padding-right: 16px;
                         border-right: 2px solid white;
                    }
                    .footer__article{
                         margin-top: 36px;
                    }
                    .footer__text{
                         width: 275px;
                         margin-top: 16px;
                    }
                    .footer__h2{
                         color: #FFFFFF;
                         font-size: 16px;
                         font-weight: 700;
                    }
                    .footer__link-item{
                         width: fit-content;
                         color: #FFFFFF;
                         margin-bottom: 5px;
                         border-bottom: 1px solid #000000;
                    }
                    .footer__link-item:hover{
                         border-bottom: 1px solid #FFFFFF;
                    }
                    @media (min-width: 768px){
                         .footer__wrapper{
                              flex-direction: row;
                         }
                         .footer__article{
                              margin-top: 0;
                              margin-left: 36px;
                         }
                    }
                    @media (min-width: 1440px){
                         .footer__bio{
                              width: 295px;
                         }
                         .footer__article{
                              margin-left: 64px;
                         }
                    }
               `}</style>
          </>
     );
}