import React from 'react';
import Separator from '../../common/Separator/Separator';
import { SkillsData } from '../../Data/Skills';
import SkillCard from "./SkillCard";
import './Skill.css'

function Skill() {
    const data = SkillsData;
    return (
        <div className="skills">
            <Separator />
            <label className="section-title">Skills</label>
            <div className="skills-container">
                {data.map((item, index) => {
                    return (
                        <div key={index} className="skills-section">
                            <label className="skills-section-title">{item.type}</label>
                            <div className="skills-list">
                                {item.list.map((skill, index) => {
                                    return (
                                        <SkillCard key={index} skill = {skill} />
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skill
