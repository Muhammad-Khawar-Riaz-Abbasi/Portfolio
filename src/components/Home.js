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
          <h1 className="typewriter">Networking Engineer | Frontend Developer | Computer Science Graduate</h1>
          <p className="animated-text">
            Computer Science graduate with experience in networking, cloud computing, IT systems, and frontend development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;



