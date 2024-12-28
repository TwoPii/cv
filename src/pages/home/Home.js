import React from "react";
import './Home.css';

class Home extends React.Component {
    render() {
        return (
         <div>
            <div className="greeting">
              <div className="hi">HI!</div>
              <div className="bar"></div>
            </div>

            <div className="presentation">
              <div className="text">
                <span>I'm Genís.</span>
                <span className="purple">Nice to e-meet you!</span>
              </div>
              <button className="resume">CHECK OUT MY RESUME</button>
            </div>
        </div>
        );
    }
}

export default Home;