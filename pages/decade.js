import {useContext} from 'react';
import Head from 'next/head';
import AllDecadeLayout from '../components/AllDecadeLayout/AllDecadeLayout';
import {ThemeContext} from '../context/ThemeContext';

export default function Dashboard (){
  const theme = useContext(ThemeContext);
  return(
    <div>
      <Head>
          <title>Statsiege - All Decade Team</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="robots" content="index, follow"/>
          <meta charSet="utf-8"/>
          <meta name="description" content="NBA All Decade Team"/>
          <meta name="theme-color" content={theme}/>
          <meta httpEquiv="cache-control" content="cache"/>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,900&display=swap" rel="stylesheet"></link>
      </Head>
      <AllDecadeLayout/>
      <noscript>Your browser does not support JavaScript!</noscript>
      <style jsx global>{`
        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed, 
        figure, figcaption, footer, header, hgroup, 
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font-family: 'Montserrat', sans-serif;
          vertical-align: baseline;
        }
        /* HTML5 display-role reset for older browsers */
        article, aside, details, figcaption, figure, 
        footer, header, hgroup, menu, nav, section {
          display: block;
        }
        body {
          line-height: 1;
        }
        ol, ul, li {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        blockquote, q {
          quotes: none;
        }
        blockquote:before, blockquote:after,
        q:before, q:after {
          content: '';
          content: none;
        }
        table {
          border-collapse: collapse;
        }
        *, *::before, *::after{
          box-sizing: border-box;
        }
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
