import React, { useState } from "react";
import Navigationbar from "./Navigationbar";
import "./Student.css";

const ViewStudent = () => {

    const [data, changeData] = useState([
        {
            name: "Aarav Sharma",
            avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Aarav",
            course: "Grade 10-A",
            admn: "ADM-2026-001",
            phone: 9876543210
        },
        {
            name: "Zara Patel",
            avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Zara",
            course: "Grade 12-B",
            admn: "ADM-2026-002",
            phone: 9876543211
        },
        {
            name: "Vivaan Iyer",
            avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Vivaan",
            course: "Grade 9-C",
            admn: "ADM-2026-003",
            phone: 9876543212
        },
        {
            name: "Ananya Reddy",
            avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Ananya",
            course: "Grade 11-A",
            admn: "ADM-2026-004",
            phone: 9876543213
        },
        {
            name: "Kabir Singh",
            avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Kabir",
            course: "Grade 10-B",
            admn: "ADM-2026-005",
            phone: 9876543214
        }
    ]);


    return (
        <div>
            <Navigationbar />

            <div className="container">
                <h1 className="page-heading mt-4 text-center">
                    STUDENT DIRECTORY
                </h1>

                <div className="row mt-4">

                    {
                        data.map((value, index) => {

                            return (
                                <div 
                                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
                                key={index}
                            >
                                <div className="card shadow id-card">
                            
                                    <div className="card-body text-center p-3">
                            
                                        <img
                                            src={value.avatar}
                                            className="rounded-circle profile-img"
                                            alt={value.name}
                                        />
                            
                                        <h6 className="card-title mt-3 mb-2">
                                            {value.name}
                                        </h6>
                            
                                        <p className="card-text mb-1 small">
                                            Admission No: {value.admn}
                                        </p>
                            
                                        <p className="card-text mb-1 small">
                                            <strong>{value.course}</strong>
                                        </p>
                            
                                        <p className="card-text small">
                                            Phone: {value.phone}
                                        </p>
                            
                                        <button className="btn btn-primary btn-sm w-100">
                                            View Details
                                        </button>
                            
                                    </div>
                            
                                </div>
                            </div>
                            )

                        })
                    }

                </div>

            </div>

        </div>
    );
};

export default ViewStudent;