import React from "react";
import "./Home.css";
import profile from "../assets/profile3.jpeg"; // Make sure this path is correct

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
          <h1 className="typewriter-effect">Networking Engineer | Frontend Developer</h1>
          <p className="typewriter-effect delay">
            Computer Science graduate with experience in networking, cloud computing, IT systems, and frontend development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;




