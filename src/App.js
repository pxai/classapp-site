import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import detectBrowserLanguage from 'detect-browser-language'
import './App.css';
import { I18n, Trans } from 'react-i18next';
import Demo from './components/Demo/Demo';
import Header from './components/Header/Header';
import SubHeader from './components/SubHeader/SubHeader'
import AppBar from 'material-ui/AppBar';

class App extends Component {
    state = {
        appbar: appBarStyle
    }

    showBar = () => {
        let rect = ReactDOM.findDOMNode(this)
            .getBoundingClientRect();
            appBarStyle.display = (rect.y < -10)?'block':'none';
            this.setState({appbar: appBarStyle});
        console.log("Scrolling...", appBarStyle, rect);
    }

    componentDidMount(){
       window.addEventListener('scroll', this.showBar);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.showBar);
    }

  render() {
    return (
        <I18n>
        {
          (t, { i18n }) => (
      <div className="App">
          <AppBar style={this.state.appbar} titleStyle={titleStyle} title="classapp" />
            <Header />
          <Demo classTitle="ClassApp Demo" />
            <SubHeader />
        <p className="App-intro">
            {detectBrowserLanguage()}
            {t('coming-soon')}
        </p>

      </div>
    )
        }
      </I18n>
    );
  }
}

let appBarStyle = {
    display: 'none',
    backgroundColor: '#333',
    position: 'fixed'
};

let titleStyle = {
    color: 'white',
    float: 'left',
    fontFamily: 'Pacifico'
}

export default App;
