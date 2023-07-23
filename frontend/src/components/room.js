import React, { useEffect } from "react";
import AgoraRTC from "agora-rtc-sdk";
import "./room.css";

const Room = () => {
  useEffect(() => {
    // AgoraRTC.js logic
    AgoraRTC.init();

    return () => {
      <h1>Hello</h1>;
    };
  }, []);

  return (
    <main>
      <section id="room-name-wrapper">
        <p>
          Room Name: <span id="room-name"></span>
        </p>
      </section>

      <section id="video-streams"></section>

      <section id="controls-wrapper">
        <div className="icon-wrapper">
          <img
            className="control-icon"
            id="mic-btn"
            src="/static/images/microphone.svg"
            alt="Microphone Button"
          />
        </div>

        <div className="icon-wrapper">
          <img
            className="control-icon"
            id="camera-btn"
            src="/static/images/video.svg"
            alt="Camera Button"
          />
        </div>

        <div className="icon-wrapper">
          <img
            className="control-icon"
            id="leave-btn"
            src="/static/images/leave.svg"
            alt="Leave Button"
          />
        </div>
      </section>
    </main>
  );
};

export default Room;
