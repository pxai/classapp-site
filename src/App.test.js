import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import detectBrowserLanguage from 'detect-browser-language'
import './App.css';
import { I18n, Trans } from 'react-i18next';
import Demo from './components/Demo/Demo';
import Header from './components/Header/Header';
import SubHeader from './components/SubHeader/SubHeader'
import AppBar from 'material-ui/AppBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
