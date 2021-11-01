import React from 'react';
import Separator from "../../common/Separator/Separator";
import { WorkData } from '../../Data/Works';
import './Work.css'
import WorkCard from './WorkCard';


function Work() {
    const data = WorkData;
    return (
        <div className="work">
            <Separator />
            <label className="section-title">Work</label>
            <div className="work-list">
                {data.map((item, index) => {
                    return (
                        <WorkCard key={index} item = {item} /> 
                    )
                })}
            </div>
        </div>
    )
}

export default Work
