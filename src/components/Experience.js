import React from "react";
import "./experience.css";

const ExperiencePortfolio = () => {
  const experienceData = [
    {
      year: "July 2024 - December 2024",
      title: "Frontend Developer",
      description:
        "During my 6-month internship at EWX, I gained valuable hands-on experience in web development and programming. I worked extensively with HTML, CSS, and Bootstrap, building responsive and visually appealing user interfaces. I honed my JavaScript skills to add interactivity and functionality to web applications. Additionally, I explored C# programming, learning how to create efficient and scalable solutions. This internship allowed me to develop practical skills, work on real-world projects, and enhance my problem-solving abilities, preparing me for future challenges in the field of software development.",
    },
    {
      year: "January 2024 - June 2024",
      title: "Data Entry",
      description:
        "Successfully managed and organized large volumes of data, ensuring a 70% improvement in accuracy and efficiency in data entry processes. Prepared detailed reports on data quality and suggested actionable improvements for streamlining data management. Collaborated with team members to enhance workflows, maintain data integrity, and deliver timely solutions for data-related challenges.",
    },
  ];

  return (
    <section id="ExperiencePortfolio" className="experience-portfolio">
      <h2 className="portfolio-heading">Experience Timeline</h2>
      <div className="timeline-container">
        {experienceData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperiencePortfolio;

