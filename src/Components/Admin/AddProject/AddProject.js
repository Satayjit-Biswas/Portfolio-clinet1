import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddProject.css";

const AddProject = () => {
    const [addProject, setAddProject] = useState({
        title: "",
        img1: "",
        description1: "",
        img2: "",
        description2: "",
        img3: "",
        description3: "",
        startDate: "",
        endDate: "",
        tag: "",
        liveLink: "",
        clientCodeLink: "",
        serverCodeLink: "",
    });
    //handle input
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setAddProject((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };
    const submitProject = (e) => {
        e.preventDefault();
        fetch("https://gentle-atoll-95490.herokuapp.com/Project", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addProject),
        }).then((res) => {
            setAddProject({
                title: "",
                img1: "",
                description1: "",
                img2: "",
                description2: "",
                img3: "",
                description3: "",
                startDate: "",
                endDate: "",
                tag: "",
                liveLink: "",
                clientCodeLink: "",
                serverCodeLink: "",
            });
            toast.success("Add Your Project");
        });
    };
    return (
        <div>
            <div className="page_header">
                <h2>Add Your Project</h2>
            </div>
            <div className="addproject_area">
                <div className="container">
                    <div className="addproject_form">
                        <form onSubmit={submitProject}>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                >
                                    Project title
                                </label>
                                <input
                                    onChange={InputEvent}
                                    name="title"
                                    value={addProject.title}
                                    required
                                    type="text"
                                    className="form-control"
                                    id="handleReview"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                >
                                    Project Img1 Link
                                </label>
                                <input
                                    onChange={InputEvent}
                                    name="img1"
                                    value={addProject.img1}
                                    required
                                    type="text"
                                    className="form-control"
                                    id="handleReview"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputPassword1"
                                    className="form-label"
                                >
                                    Project description1
                                </label>
                                <textarea
                                    type="text"
                                    onChange={InputEvent}
                                    name="description1"
                                    value={addProject.description1}
                                    required
                                    className="form-control"
                                    id="handleReviewText"
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                >
                                    Project Img2 Link
                                </label>
                                <input
                                    onChange={InputEvent}
                                    name="img2"
                                    value={addProject.img2}
                                    required
                                    type="text"
                                    className="form-control"
                                    id="handleReview"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputPassword1"
                                    className="form-label"
                                >
                                    Project description2
                                </label>
                                <textarea
                                    type="text"
                                    onChange={InputEvent}
                                    name="description2"
                                    value={addProject.description2}
                                    required
                                    className="form-control"
                                    id="handleReviewText"
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                >
                                    Project Img3 Link
                                </label>
                                <input
                                    onChange={InputEvent}
                                    name="img3"
                                    value={addProject.img3}
                                    required
                                    type="text"
                                    className="form-control"
                                    id="handleReview"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputPassword1"
                                    className="form-label"
                                >
                                    Project description 3
                                </label>
                                <textarea
                                    type="text"
                                    onChange={InputEvent}
                                    name="description3"
                                    value={addProject.description3}
                                    required
                                    className="form-control"
                                    id="handleReviewText"
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                >
                                    Project start date
                                </label>
                                <input
                                    onChange={InputEvent}
                                    name="startDate"
                                    value={addProject.startDate}
                                    required
                                    type="date"
                                    className="form-control"
                                    id="handleReview"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                >
                                    Project end date
                                </label>
                                <input
                                    onChange={InputEvent}
                                    name="endDate"
                                    value={addProject.endDate}
                                    required
                                    type="date"
                                    className="form-control"
                                    id="handleReview"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                >
                                    Project tag
                                </label>
                                <input
                                    onChange={InputEvent}
                                    name="tag"
                                    value={addProject.tag}
                                    required
                                    type="text"
                                    className="form-control"
                                    id="handleReview"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                >
                                    Project Live Link
                                </label>
                                <input
                                    onChange={InputEvent}
                                    name="liveLink"
                                    value={addProject.liveLink}
                                    required
                                    type="text"
                                    className="form-control"
                                    id="handleReview"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                >
                                    Project Client Code Link
                                </label>
                                <input
                                    onChange={InputEvent}
                                    name="clientCodeLink"
                                    value={addProject.clientCodeLink}
                                    required
                                    type="text"
                                    className="form-control"
                                    id="handleReview"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                >
                                    Project Server Code Link
                                </label>
                                <input
                                    onChange={InputEvent}
                                    name="serverCodeLink"
                                    value={addProject.serverCodeLink}
                                    required
                                    type="text"
                                    className="form-control"
                                    id="handleReview"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn_custom">
                                    Add project
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddProject;
