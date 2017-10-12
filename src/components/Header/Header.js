import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-title">classapp</div>
                <div className="header-text">
                    Aprende 😄, enseña 🎁 y comparte ❤️ 
                </div>
            </div>
        );
    }
}

export default Header;