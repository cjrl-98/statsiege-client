import ReactFullpage from '@fullpage/react-fullpage';

import AllDecadePlayerLayout from './AllDecadePlayerLayout';
import AllDecadeLanding from './AllDecadeLanding';
import DecadeData from './DecadeData.js';

export default function AllDecadeLayout(){

    const handlePageUp = () => {
      fullpage_api.moveTo(1);
    }

    return (
      <>
        <ReactFullpage
          navigation
          navigationPosition = 'x'
          navigationTooltips = {['Home','Lebron James', 'Stephen Curry', 'James Harden', 'Russell Westbrook', 'Kevin Durant']}
          continuousVertical = {true}
          render={ api =>
              <ReactFullpage.Wrapper>
                  <div key="landing-page" className="section section__landing-page">
                    <AllDecadeLanding/>
                  </div>
                  <div key="lebron-james" className="section">
                    <AllDecadePlayerLayout data={DecadeData[0]}/>
                  </div>
                  <div key="stephen-curry" className="section">
                    <AllDecadePlayerLayout data={DecadeData[1]}/>
                  </div>
                  <div key="james-harden" className="section">
                    <AllDecadePlayerLayout data={DecadeData[2]}/>
                  </div>
                  <div key="russell-westbrook" className="section">
                    <AllDecadePlayerLayout data={DecadeData[3]}/>
                  </div>
                  <div key="Kevin Durant" className="section">
                    <AllDecadePlayerLayout data={DecadeData[4]}/>
                  </div>
              </ReactFullpage.Wrapper>
          }
        />
        <img onClick={handlePageUp} className="page-up-btn" alt="page up icon" src="https://firebasestorage.googleapis.com/v0/b/statsiege.appspot.com/o/icon%2Fpage-up-icon.svg?alt=media&token=ad4c1e77-814c-40c1-994d-ee81735afe56"/>
        <style jsx>{`
          :global(.fp-tooltip){
            font-size: 13px !important;
            background-color: rgb(0, 0, 0) !important;
            margin-left: 16px !important;
            padding: 3px 14px !important;
            border-radius: 10px !important;
          }
          .page-up-btn{
            z-index: 100000;
            position: fixed;
            bottom: 25px;
            right: 25px;
            width: 32px;
            height: 32px;
          }
        `}</style>
      </>
    );
}