import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";

function Notifications() {
  return (
    <div className="Notifications">
    <p>Here is the list of notifications</p>
      <button
        style={{ fontWeight: "bold", color: "#3a3a3a", background: "none", border: "none", fontSize: "15px", position: "absolute", right: "2px", top: "2px", cursor: "pointer" }}
        aria-label='Close'
        onClick={console.log('Close button has been clicked')}
      >
        <img src={closeIcon} alt="closeIcon" width="12px"/>
      </button>
        
        <ul>
          <li data="default">New course available</li>
          <li data="urgent" style={{ color: 'red' }}>New resume available</li>
          <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
        </ul>
    </div>
  );
}

export default Notifications;
