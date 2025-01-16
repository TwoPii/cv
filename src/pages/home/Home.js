import React from "react";
import './Home.css';
import WordsBall from "../../components/work-card/WordsBall";
import pdf from '../../assets/Resume_EN.pdf';

class Home extends React.Component {
    render() {
        return (
         <div className="home">
           <div className="left">
            <div className="greeting">
              <div className="hi">HI!</div>
              <div className="bar"></div>
            </div>

            <div className="presentation">
              <div className="text">
                <span>I'm Genís.</span>
                <span className="purple">Nice to e-meet you!</span>
              </div>
              <button className="resume" onClick={this.downloadPdf}>CHECK OUT MY RESUME</button>
            </div>
          </div>
          <div className="right">
            <WordsBall />
          </div>
        </div>
        );
    }

    downloadPdf() {
      window.open(pdf, '_blank');
    }
}

export default Home;