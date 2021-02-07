import React from 'react';
import { projects } from '../../assets/projects';
import ProjectItem from '../ProjectItem';

const Projects = () => {
    return (
        <div>
            {projects.map((item, index) => (
                <ProjectItem key={index} item={item} />
            ))}
        </div>
    );
};

export default Projects;
