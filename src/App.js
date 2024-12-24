import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: "welcome"};
  }

  render() {
    return (
      <div className="container">
        <div className="header-bar">
          <div className="left">
            <span className="name">Genís Bosch</span>
            <span className="role">Software Developer</span>
          </div>
          <div className="right">
            <span onClick={() => this.selectTab("welcome")} className={this.state.selected === 'welcome' ? 'tab selected' : 'tab'}>Welcome</span>
            <span onClick={() => this.selectTab("work")} className={this.state.selected === 'work' ? 'tab selected' : 'tab'}>Work</span>
            <span onClick={() => this.selectTab("resume")} className={this.state.selected === 'resume' ? 'tab selected' : 'tab'}>Resume</span>
            <span onClick={() => this.selectTab("about")} className={this.state.selected === 'about' ? 'tab selected' : 'tab'}>About</span>
          </div>
        </div>

        {/* WELCOME */}
        {this.state.selected === "welcome" && 
          <div className="greeting">
            <div className="hi">HI!</div>
            <div className="bar"></div>
          </div>
        }
        {this.state.selected === "welcome" &&
          <div className="presentation">
            <div className="text">
              <span>I'm Genís.</span>
              <span className="purple">Nice to e-meet you!</span>
            </div>
            <button className="resume">CHECK OUT MY RESUME</button>
          </div>
        }

        {/* WORK */}
        {this.state.selected === "work" &&
          <div>Work Tab</div>
        }

        {/* RESUME */}
        {this.state.selected === "resume" &&
          <div>Resume Tab</div>
        }

        {/* About */}
        {this.state.selected === "about" &&
          <div>About Tab</div>
        }
      </div>
    );
}

selectTab(tab) {
  this.setState({
    selected: tab
  })
}
}

export default App;
