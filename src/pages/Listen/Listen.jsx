import React from "react";
import "./Listen.css";
import HomeLayout from "../../layouts/HomeLayout/HomeLayout";
import HAN from "../../assets/jpg/hanuman-stand.jpg";
import ChalisaPlay from "../../components/ChalisaPlay/ChalisaPlay";
const Listen = () => {
  return (
    <HomeLayout>
      <div className="">
        <div className="text-center my-5">
          <h1 className="listen-title">Listen The Hanuman Chalisa</h1>
        </div>
        <div className="text-center play-div">
          <ChalisaPlay />
        </div>
        <div className="text-center my-5 mx-auto listen-image-div">
          <img src={HAN} alt="hanuman" className="listen-han-image" />
        </div>
      </div>
    </HomeLayout>
  );
};

export default Listen;
