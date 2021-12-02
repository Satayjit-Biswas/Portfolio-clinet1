import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ProjectDetails.css";

const ProjectDetails = () => {
    const [GetProject, setGetProject] = useState({});
    const [loading, setloading] = useState(true);
    const { _id } = useParams();
    useEffect(() => {
        fetch(`https://gentle-atoll-95490.herokuapp.com/project/${_id}`)
            .then((res) => res.json())
            .then((data) => {
                setGetProject(data);
                setloading(false);
            });
    }, [_id]);
    console.log(GetProject);
    const {
        title,
        img1,
        img2,
        img3,
        description1,
        description2,
        description3,
        startDate,
        endDate,
        tag,
        liveLink,
        clientCodeLink,
        serverCodeLink,
    } = GetProject;
    return (
        <div>
            <div className="page_header">
                <h2>Welcome My Project</h2>
            </div>
            <div className="container">
                {loading ? (
                    <div className="d-flex aline-items-center justify-content-center mb_60">
                        <div class="spinner-border text-warning" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div className="details_box">
                        <div className="text-center mb_40">
                            <h3>{title}</h3>
                        </div>
                        <img src={img1} alt="" className="img-fluid" />
                        <div className="date">
                            <div>Project Start Date : {startDate}</div>
                            <div>Project End Date : {endDate}</div>
                        </div>
                        <h5 className="pb_5">
                            Which has been used in the project :
                        </h5>
                        <h5 className="pb_15">{tag}</h5>
                        <p className="pb_15">{description1}</p>
                        <img src={img2} alt="" className="img-fluid" />
                        <p className="pb_15">{description2}</p>
                        <img src={img3} alt="" className="img-fluid" />
                        <p className="pb_15">{description3}</p>
                        <h5 className="pb_15">
                            Project Live Link :{" "}
                            <a target="_blank" href={liveLink}>
                                {liveLink}
                            </a>
                        </h5>
                        <h5 className="pb_15">
                            Project Client Link :{" "}
                            <a target="_blank" href={clientCodeLink}>
                                {clientCodeLink}
                            </a>
                        </h5>
                        <h5 className="pb_15">
                            Project Server Link :{" "}
                            <a target="_blank" href={serverCodeLink}>
                                {serverCodeLink}
                            </a>
                        </h5>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectDetails;
