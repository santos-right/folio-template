import React from 'react';
import { ProjectData } from "../../Data/Projects";
import ProjectCard from './ProjectCard';
import Separator from "../../common/Separator/Separator";
import './Project.css'

function Project() {
    const data = ProjectData;
    return (
        <div className="projects">
            <Separator />
            <label className="section-title">Projects</label>
            <div>
                {data.map((project, index) => {
                    return (
                        <ProjectCard key={index} project = {project} />
                    );
                })}
            </div>
        </div>
    )
}

export default Project
