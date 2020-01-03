import {useContext} from 'react';
import Head from 'next/head';
import TeamLayout from '../../components/TeamLayout/TeamLayout';
import {ThemeContext} from '../../context/ThemeContext';
import Header from '../../components/Header/Header';

export default function Dashboard (){
  const theme = useContext(ThemeContext);
  return(
    <div>
      <Head>
          <title>Statsiege - Basketball Stats</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="robots" content="index, follow"/>
          <meta charset="utf-8"/>
          <meta name="description" content="NBA Statistics and Team Profile for Teams"/>
          <meta name="theme-color" content={theme}/>
          <meta http-equiv="cache-control" content="cache"/>
      </Head>
      <Header/>
      <TeamLayout/>
      <noscript>Your browser does not support JavaScript!</noscript>
      <style jsx global>{`
        .main-color{
          background-color: ${theme};
          color: #FFFFFF;
        }
        .bordered{
          border: 1px solid #e8e8e8;
        }
      `}</style>
    </div>
  );
}
