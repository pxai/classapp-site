import React, { Component } from 'react';
import './Demo.css';
import { I18n } from 'react-i18next';

class UserBar extends Component {
    render() {
        return (
            <I18n>
            {
              (t, { i18n }) => (
                <div className="user-bar">
                    <div className="back">
                        <i className="zmdi zmdi-arrow-left"></i>
                    </div>
                    <div className="avatar">
                        <img src="https://avatars2.githubusercontent.com/u/1235511" alt="Avatar" />
                    </div>
                    <div className="name">
                        <span>{this.props.classTitle}</span>
                        <span className="status">online</span>
                    </div>
                    <div className="actions more">
                        <i className="zmdi zmdi-more-vert"></i>
                    </div>
                    <div className="actions attachment">
                        <i className="zmdi zmdi-attachment-alt"></i>
                    </div>
                    <div className="actions">
                        <i className="zmdi zmdi-phone"></i>
                    </div>
                </div>
        )
    }
  </I18n>
    );
}
}

export default UserBar;