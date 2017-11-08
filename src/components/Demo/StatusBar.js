import React, { Component } from 'react';
import './Demo.css';
import { I18n, Trans } from 'react-i18next';

class StatusBar extends Component {
    render() {
        return (
            <I18n>
            {
              (t, { i18n }) => (
                                    <div className="status-bar">
                                    <div className="time"></div>
                                    <div className="battery">
                                        <i className="zmdi zmdi-battery"></i>
                                    </div>
                                    <div className="network">
                                        <i className="zmdi zmdi-network"></i>
                                    </div>
                                    <div className="wifi">
                                        <i className="zmdi zmdi-wifi-alt-2"></i>
                                    </div>
                                    <div className="star">
                                        <i className="zmdi zmdi-star"></i>
                                    </div>
                                </div>
                                        )
                                    }
                                  </I18n>
                                    );
                                }
                            }
export default StatusBar;