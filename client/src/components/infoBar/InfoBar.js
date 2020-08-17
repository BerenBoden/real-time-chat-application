import React from 'react';
import './InfoBar.scss';
import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

const InfoBar = ({room}) => (
    <div className="chat-container">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online img" />
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/"><img src={closeIcon} alt="close the chat"/></a>
        </div>
    </div>
)


export default InfoBar;