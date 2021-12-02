import React, { useEffect, useState } from "react";
import "./Project.css";
import SingleProject from "./SingleProject/SingleProject";

const Project = () => {
    const [project, setproject] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        fetch("https://gentle-atoll-95490.herokuapp.com/project")
            .then((res) => res.json())
            .then((data) => {
                setproject(data);
                setloading(false);
            });
    }, []);
    return (
        <div class="project-area" id="project">
            <div class="container">
                <div class="project">
                    <div class="service-text">
                        <h4 class="text-center">
                            <span class="text-wrapper">My Project</span>
                        </h4>
                    </div>
                    {loading ? (
                        <div className="d-flex aline-items-center justify-content-center mb_60">
                            <div
                                class="spinner-border text-warning"
                                role="status"
                            >
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <div class="row popup-section mt_40">
                            {project.map((data) => (
                                <SingleProject project={data}></SingleProject>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Project;
