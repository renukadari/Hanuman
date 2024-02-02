import React from "react";
import "./AboutHanuman.css";
import HcAboutHanuman from "../../content/aboutHanuman";

const AboutHanuman = () => {
  return (
    <div className="hc-about-hanuman-div">
      <div className="container">
        <div className="row mx-0">
          <div className="col-md-8 col-12 ">{/* First div content */}</div>
          <div className="col-md-4 mt-5 col-12 no-gutter">
            <h1 className="mb-5 text-center hc-abh-title">About Hanuman</h1>
            <p>{HcAboutHanuman.HCAHP1}</p>
            <p>{HcAboutHanuman.HCAHP2}</p>
            <p>{HcAboutHanuman.HCAHP3}</p>
            <p>{HcAboutHanuman.HCAHP4}</p>
            <p>{HcAboutHanuman.HCAHP5}</p>
            <p>{HcAboutHanuman.HCAHP6}</p>
            <p className="">{HcAboutHanuman.HCAHP7}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHanuman;
