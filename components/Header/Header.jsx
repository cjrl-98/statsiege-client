import { BackTop } from 'antd';
import Link from 'next/link';
import Burger from "../Burger/Burger";

export default function Header () {
     return(
          <>
               <header className="header">
                    <div className="header__left">
                         <img className="header__logo" alt="statsiege logo" src="https://firebasestorage.googleapis.com/v0/b/statsiege.appspot.com/o/icon%2Fstatsiege-logo.png?alt=media&token=4f31148a-f662-4578-9815-8262b1f935fa"/>
                         <h1 className="header__logo-name">Statsiege</h1>
                    </div>
                    <nav className="header__nav">
                         <Link href="/teams"><a className="header__nav-links">Teams</a></Link>
                         {/* <Link><a className="header__nav-links" href="/players">Players</a></Link> */}
                         <Link href="/decade"><a className="header__nav-links">All-Decade</a></Link>
                    </nav>
                    <Burger/>
                    <BackTop>
                         <img alt="page up icon" src="https://firebasestorage.googleapis.com/v0/b/statsiege.appspot.com/o/icon%2Fpage-up-icon.svg?alt=media&token=ad4c1e77-814c-40c1-994d-ee81735afe56"/>
                    </BackTop>
               </header>
          <style jsx>{`
               .header{
                    width: 100%;
                    height: 70px;
                    background-color: #0246d8;
                    color: #FFFFFF;
                    z-index: 100;
                    position: fixed;
                    top: 0;
                    display: flex;
                    align-items: center;
               }
               .header__left{
                    display: flex;
                    align-items: center;
                    margin-left: 16px
               }
               .header__logo{
                    width: 32px;
                    margin-right: 8px;
               }
               .header__logo-name{
                    font-size: 20px;
                    font-weight: 900;
                    color: #FFFFFF;
                    margin: 0;
               }
               .header__nav{
                    display: none;
               }
               @media (min-width: 1024px){
                    .header__nav{
                         display: flex;
                         align-items: center;
                         border-left: 3px solid #FFFFFF;
                         margin-left: 16px;
                         height: 32px;
                    }
                    .header__nav-links{
                         margin-left: 16px;
                         font-weight: 700;
                         color: #FFFFFF;
                    }
               }    
          `}</style>
          </>
     );
}