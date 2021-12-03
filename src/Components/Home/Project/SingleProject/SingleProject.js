import React from "react";
import { useHistory } from "react-router";

const SingleProject = (props) => {
    console.log(props.project);
    const { _id, title, img1, description1, startDate, endDate } =
        props.project;
    const history = useHistory();
    const HandleProjectDetails = () => {
        history.push(`/productdetails/${_id}`);
    };
    return (
        <div className="col-lg-4 col-md-6 logic mb_30">
            <div className="blog-box">
                <div className="blog-img">
                    <img src={img1} alt="img1" className="img-fluid" />
                </div>
                <div className="blog-details">
                    <span className="blog-date mr_5">
                        <span>Start: {startDate}</span>
                        <span> End: {endDate}</span>
                    </span>
                    <div className="blog-title">
                        <h3 className="mt_15 mb_15">
                            <a href="#" onClick={HandleProjectDetails}>{title}</a>
                        </h3>
                        <p>{description1.substring(0, 150)}....</p>
                        <div className="arrow mt_5 text-right">
                            <span onClick={HandleProjectDetails}>
                                <i className="fal fa-long-arrow-right"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;
