import React from 'react'
import Navigationbar from './Navigationbar'


const AddStudent = () => {
  return (
    <div>
        <Navigationbar />

      <div className="container mt-5">

        <div className="page-box">

          <h2 className="page-heading">Add Student</h2>

          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

              <div className="row g-3">

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label className="form-label">Admission Number</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label className="form-label">Date of Birth</label>
                  <input type="date" className="form-control" />
                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label className="form-label">Gender</label>
                  <select className="form-select">
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label className="form-label">Class/Grade</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label className="form-label">Section</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label className="form-label">Parent/Guardian Name</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label className="form-label">Contact Number</label>
                  <input type="tel" className="form-control" />
                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" />
                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label className="form-label">Address</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-12 text-center mt-3">
                  <button className="btn btn-primary px-5">Submit</button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default AddStudent