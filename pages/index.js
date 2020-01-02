import Head from 'next/head';
import TeamLayout from '../components/TeamLayout/TeamLayout';

export default function index (){
  return(
    <div>
      <Head>
          <title>Statness</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <style jsx global>{`
        body { 
          font-family:  'Montserrat', sans-serif;
        }
      `}</style>
    </div>
  );
}
