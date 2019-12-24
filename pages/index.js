import Head from 'next/head';
import TeamLayout from '../components/TeamLayout/TeamLayout';

export default function index (){
  return(
    <div>
      <Head>
          <title>Statness</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700,900&display=swap" rel="stylesheet"></link>
      </Head>
      <TeamLayout/>
      <style jsx global>{`
        body { 
          font-family:  'Montserrat', sans-serif;
        }
      `}</style>
    </div>
  );
}
