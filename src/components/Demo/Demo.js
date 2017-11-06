import React, { Component } from 'react';
import './Demo.css';
import { I18n, Trans } from 'react-i18next';

class Demo extends Component {
    render() {
        return (
            <I18n>
            {
              (t, { i18n }) => (
            <div className="Demo">
                <div className="page">
                    <div className="marvel-device nexus5">
                        <div className="top-bar"></div>
                        <div className="sleep"></div>
                        <div className="volume"></div>
                        <div className="camera"></div>
                        <div className="screen">
                            <div className="screen-container">
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
                                <div className="chat">
                                    <div className="chat-container">
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
                                        <div className="conversation">
                                            <div className="conversation-container">
                                                <div className="message received">
                                                    Welcome to ClassApp!!
                                                    <span className="metadata"><span className="time"></span></span>
                                                </div>
                                                <div className="message sent">
                                                    What's this?
                                                    <span className="metadata">
                                                        <span className="time"></span><span className="tick"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg></span>
                                                    </span>
                                                </div>

                                                <div className="message received">
                                                    This is classapp, a way to learn with short messages
                                                    <span className="metadata"><span className="time"></span></span>
                                                </div>


                                                <div className="message sent">
                                                    You cannot be serious
                                                    <span className="metadata">
                                                        <span className="time"></span><span className="tick"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg></span>
                                                    </span>
                                                </div>

                                                <div className="message received">
                                                    <span id="random">Well it's free</span>
                                                    <span className="metadata"><span className="time"></span></span>
                                                </div>
                                            </div>

                                            <form className="conversation-compose">
                                                <div className="emoji">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="smiley" x="3147" y="3209"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.153 11.603c.795 0 1.44-.88 1.44-1.962s-.645-1.96-1.44-1.96c-.795 0-1.44.88-1.44 1.96s.645 1.965 1.44 1.965zM5.95 12.965c-.027-.307-.132 5.218 6.062 5.55 6.066-.25 6.066-5.55 6.066-5.55-6.078 1.416-12.13 0-12.13 0zm11.362 1.108s-.67 1.96-5.05 1.96c-3.506 0-5.39-1.165-5.608-1.96 0 0 5.912 1.055 10.658 0zM11.804 1.01C5.61 1.01.978 6.034.978 12.23s4.826 10.76 11.02 10.76S23.02 18.424 23.02 12.23c0-6.197-5.02-11.22-11.216-11.22zM12 21.355c-5.273 0-9.38-3.886-9.38-9.16 0-5.272 3.94-9.547 9.214-9.547a9.548 9.548 0 0 1 9.548 9.548c0 5.272-4.11 9.16-9.382 9.16zm3.108-9.75c.795 0 1.44-.88 1.44-1.963s-.645-1.96-1.44-1.96c-.795 0-1.44.878-1.44 1.96s.645 1.963 1.44 1.963z" fill="#7d8489"/></svg>
                                                </div>
                                                <input className="input-msg" name="input" placeholder="Type a message" autocomplete="off" autofocus></input>
                                                <div className="photo">
                                                    <i className="zmdi zmdi-camera"></i>
                                                </div>
                                                <button className="send">
                                                    <div className="circle">
                                                        <i className="zmdi zmdi-mail-send"></i>
                                                    </div>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
        }
      </I18n>
        );
    }
}

export default Demo;