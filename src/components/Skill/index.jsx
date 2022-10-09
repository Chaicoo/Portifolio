import React from "react";
import SkillStyle from "./skillStyle";

const Skill = (props) => {
  return (
    <SkillStyle>
      <div className="skill">
        <p className="skillTitle">{props.title}</p>
        <div className="skillIcon">{props.icon}</div>
      </div>
    </SkillStyle>
  );
};

export default Skill;
