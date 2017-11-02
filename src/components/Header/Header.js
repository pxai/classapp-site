import React, { Component } from 'react';
import './Header.css';
import { I18n, Trans } from 'react-i18next';

class Header extends Component {
    render() {
        return (
            <I18n>
            {
              (t, { i18n }) => (
            <div className="header">
                <div className="header-title">classapp</div>
                <div className="header-text">
                {t('subtitle')} 
                </div>
            </div>
        )
        }
      </I18n>
        );
    }
}

export default Header;