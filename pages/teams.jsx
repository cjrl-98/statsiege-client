import {useContext} from 'react';
import Head from 'next/head';
import TeamsLayout from '../components/TeamsLayout/TeamsLayout';
import {ThemeContext} from '../context/ThemeContext';
import Header from '../components/Header/Header';

export default function Dashboard (){
  const [theme] = useContext(ThemeContext);
  return(
    <div>
       <Head>
          <title>Statsiege - NBA Teams</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="robots" content="index, follow"/>
          <meta charSet="utf-8"/>
          <meta name="description" content={`NBA Team Statistics`}/>
          <meta name="theme-color" content={theme}/>
          <meta httpEquiv="cache-control" content="cache"/>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,900&display=swap" rel="stylesheet"></link>
      </Head>
      <Header/>
      <TeamsLayout/>
      <noscript>Your browser does not support JavaScript!</noscript>
      <style jsx global>{`
        .main-color{
          background-color: ${theme};
          border: none;
          color: #FFFFFF;
        }
        .bordered{
          border: 1px solid #e8e8e8;
        }
      `}</style>
    </div>
  );
}
