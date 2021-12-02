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
        <div class="col-lg-4 col-md-6 logic mb_30">
            <div class="blog-box">
                <div class="blog-img">
                    <img src={img1} alt="img1" class="img-fluid" />
                </div>
                <div class="blog-details">
                    <span class="blog-date mr_5">
                        <span>Start: {startDate}</span>
                        <span> End: {endDate}</span>
                    </span>
                    <div class="blog-title">
                        <h3 class="mt_15 mb_15">
                            <a href="#">{title}</a>
                        </h3>
                        <p>{description1.substring(0, 150)}....</p>
                        <div class="arrow mt_5 text-right">
                            <span onClick={HandleProjectDetails}>
                                <i class="fal fa-long-arrow-right"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;
