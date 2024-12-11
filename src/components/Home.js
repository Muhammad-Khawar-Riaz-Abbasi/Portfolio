import React from "react";
import "./Home.css";
import profile from "../assets/profile3.jpeg"; // Replace with the actual path to your profile picture

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        {/* Profile Picture */}
        <div className="profile-container">
          <img src={profile} alt="Profile" className="profile-pic" />
        </div>

        {/* Text Content */}
        <div className="text-container">
          <h1 className="typewriter">Frontend Developer</h1>
          <p className="animated-text">
            Creating modern and powerful web solutions with performance and scalability in mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;



