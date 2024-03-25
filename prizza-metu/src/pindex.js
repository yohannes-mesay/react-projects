import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
const skillData = [
  {
    skillName: "React",
    level: "intermediate",
    color: "blue",
  },
  {
    skillName: "Java",
    level: "intermediate",
    color: "yellow",
  },
  {
    skillName: "HTML + CSS",
    level: "pro",
    color: "orange",
  },
  {
    skillName: "JavaScript",
    level: "pro",
    color: "orangeyellow",
  },
  {
    skillName: "c++",
    level: "pro",
    color: "violet",
  },
];
function App() {
  const skills = skillData;
  return (
    <div className="container">
      <Avater />
      <Intro />
      {skills.map((skil) => (
        <Skill skillObj={skil} />
      ))}
    </div>
  );
}
function Avater() {
  return (
    <div className="avater">
      <img src="pizzas/margherita.jpg" alt="avater"></img>
    </div>
  );
}
function Intro() {
  return (
    <div className="intro">
      <h1>Yohannes Mesay</h1>
      <p>
        Proffesional full stack web developer lorem ipsumProffesional full stack
        web developer lorem ipsumProffesional full stack web developer lorem
        ipsum
      </p>
    </div>
  );
}
// function SkillList({skillObj}) {
//   return (
//     <div className="skilllist">
//       <Skill name={skillObj.name} color="blue" />
//       <Skill name={skillObj.name} color="red" />
//       <Skill name={skillObj.name} color="yellow" />
//       <Skill name={skillObj.name} color="orange" />
//       <Skill name={skillObj.name} color="violet" />
//     </div>
//   );
// }
function Skill({ skillObj }) {
  return (
    <div
      className="skill skilllist"
      style={{ backgroundColor: skillObj.color }}
    >
      <span>
        {skillObj.skillName}
         {skillObj.level === "pro" && "💪"}
        {skillObj.level === "intermediate" && "⭐"}
        {skillObj.level === "beginner" && "👍"}
      </span>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);