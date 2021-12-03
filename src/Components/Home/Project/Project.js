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
        <div className="project-area" id="project">
            <div className="container">
                <div className="project">
                    <div className="service-text">
                        <h4 className="text-center">
                            <span className="text-wrapper">My Project</span>
                        </h4>
                    </div>
                    {loading ? (
                        <div className="d-flex aline-items-center justify-content-center mb_60">
                            <div
                                className="spinner-border text-warning"
                                role="status"
                            >
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <div className="row popup-section mt_40">
                            {project.map((data) => (
                                <SingleProject
                                    key={data._id}
                                    project={data}
                                ></SingleProject>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Project;
