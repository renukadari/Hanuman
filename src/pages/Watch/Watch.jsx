import React from "react";
import "./Watch.css";
import HomeLayout from "../../layouts/HomeLayout/HomeLayout";

const videos = [
  "https://www.youtube.com/embed/BblraEtrFLI",
  "https://www.youtube.com/embed/nC-Fq1vvLfA",
  "https://www.youtube.com/embed/8JhdiDiZMNE?si=o-B09mWrUtzHS0k9",
  "https://www.youtube.com/embed/zicLVr0fy6k",
  "https://www.youtube.com/embed/gN4FJbn4zt0",
  "https://www.youtube.com/embed/v2VHVitMS4o",
  "https://www.youtube.com/embed/6XcSQL9lbjo",
  "https://www.youtube.com/embed/H7rJ2EIyZYU?si=Cv5Xf3gS8hmSoFht"
];

const Watch = () => {
  return (
    <HomeLayout>
      <div className="d-flex gap-5 flex-column align-items-center justify-center m-5 watch-bg">
        {videos.map((video, index) => (
          <div key={index} className="video-container">
            <iframe
              width="866"
              height="487"
              src={video}
              title={`Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </HomeLayout>
  );
};

export default Watch;
