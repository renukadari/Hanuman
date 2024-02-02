import React from "react";
import "./Home.css";
import HomeLayout from "../../layouts/HomeLayout/HomeLayout";
import AboutHanuman from "../../components/AboutHanuman/AboutHanuman";

const Home = () => {
  return (
    <div id="home">
      <HomeLayout>
        <AboutHanuman />
      </HomeLayout>
    </div>
  );
};

export default Home;
