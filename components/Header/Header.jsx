import Link from 'next/link';
import Burger from "../Burger/Burger";

export default function Header () {
     return(
          <>
               <header className="header">
                    <div className="header__left">
                         <img className="header__logo" src="https://firebasestorage.googleapis.com/v0/b/statsiege.appspot.com/o/icon%2Fstatsiege-logo.png?alt=media&token=4f31148a-f662-4578-9815-8262b1f935fa"/>
                         <h1 className="header__logo-name">Statsiege</h1>
                    </div>
                    <nav className="header__nav">
                         <Link><a className="header__nav-links" href="/">Teams</a></Link>
                         <Link><a className="header__nav-links" href="/">Players</a></Link>
                         <Link><a className="header__nav-links" href="/decade">All-Decade</a></Link>
                    </nav>
               </header>
               <Burger/>
          <style jsx>{`
               .header{
                    width: 100%;
                    height: 80px;
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
               }
               .header__nav{
                    display: none;
               }
               @media (min-width: 1024px){
                    .header__nav{
                         display: flex;
                         align-items: center;
                         border-left: 3px solid #323232;
                         margin-left: 16px;
                         height: 32px;
                    }
                    .header__nav-links{
                         margin-left: 16px;
                         font-weight: 700;
                         color: #000000;
                    }
               }    
          `}</style>
          </>
     );
}