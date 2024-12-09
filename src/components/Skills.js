import React from 'react';
import './skills.css'; // Custom styles

const skills = [
  { name: '.NET', experience: '6 Months Experience' },
  { name: 'CSS/HTML', experience: '2 Years Experience' },
  { name: 'Javascript', experience: '1.5 Years Experience' },
  { name: 'Bootstrap', experience: '2 Years Experience' },
  { name: 'AJAX', experience: '1.5 Years Experience' },
  { name: 'JSON', experience: '1.5 Years Experience' }
];

const Skills = () => {
  return (
    <section id="SkillsComponent" className="skills-section"> {/* Add id="SkillsComponent" */}
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className={`skill-card ${index === 4 ? 'big-card' : ''}`}>
            <h3>{skill.name}</h3>
            <p>{skill.experience}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

