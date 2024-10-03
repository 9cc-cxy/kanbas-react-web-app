import { RxCross2 } from "react-icons/rx";
import { MdOutlineCalendarMonth } from "react-icons/md";
import AssignmentsSaveButtons from "./Assignment/AssignmentsSaveButtons";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label className="fs-6" htmlFor="wd-name">
        Assignment Name
      </label>
      <input
        type="name"
        className="form-control"
        id="wd-name"
        placeholder="A1"
      />
      <br />
      <textarea
        className="form-control "
        id="wd-description"
        placeholder={`\nThe assignment is available online \n
Submit a link to the landing page of your Web application running on
Netlify.\n
The landing page should include the following: \n
• Your full name and section
• Links to each of the lab assignments
• Link to the Kanbas application
• Links to all relevant source code repositories \n
The Kanbas application should include a link to navigate back to the landing page.`}
        rows={15}
      ></textarea>
      <br />
      <div className="form-group row">
        <label htmlFor="wd-points" className="col-sm-2 col-form-label text-end">
          Points
        </label>
        <div className="col-sm-10">
          <input
            type="points"
            className="form-control"
            id="wd-points"
            placeholder="100"
          />
        </div>
      </div>
      <br />
      <div className="form-group row">
        <label htmlFor="wd-group" className="col-sm-2 col-form-label text-end">
          Assignment Group
        </label>
        <div className="col-sm-10">
          <select className="form-select" id="wd-group">
            <option selected>ASSIGNMENTS</option>
          </select>
        </div>
      </div>
      <br />
      <div className="form-group row">
        <label
          htmlFor="wd-display-grade-as"
          className="col-sm-2 col-form-label text-end"
        >
          Display Grade as
        </label>
        <div className="col-sm-10">
          <select className="form-select" id="wd-display-grade-as">
            <option selected>Percentage</option>
          </select>
        </div>
      </div>
      <br />
      <div className="form-group row align-items-start">
        <label
          htmlFor="wd-submission-type"
          className="col-sm-2 col-form-label text-end d-none d-md-block"
        >
          Submission Type
        </label>
        <div className="col-sm-10">
          <div className="border border-secondary p-2">
            <select className="form-select" id="wd-submission-type">
              <option selected>Online</option>
            </select>
            <br />
            <div>
              <label>
                <strong>Online Entry Options</strong>
              </label>
              <br />
              <br />
              <div className="d-flex justify-content-start">
                <input type="checkbox" id="wd-text-entry" />
                <label className="ms-3" htmlFor="wd-text-entry">
                  Text Entry
                </label>
              </div>
              <br />
              <div className="d-flex justify-content-start">
                <input type="checkbox" id="wd-website-url" />
                <label className="ms-3" htmlFor="wd-website-url">
                  Website URL
                </label>
              </div>
              <br />
              <div className="d-flex justify-content-start">
                <input type="checkbox" id="wd-media-recordings" />
                <label className="ms-3" htmlFor="wd-media-recordings">
                  Media Recordings
                </label>
              </div>
              <br />
              <div className="d-flex justify-content-start">
                <input type="checkbox" id="wd-student-annotation" />
                <label className="ms-3" htmlFor="wd-student-annotation">
                  Student Annotation
                </label>
              </div>
              <br />
              <div className="d-flex justify-content-start">
                <input type="checkbox" id="wd-file-upload" />
                <label className="ms-3" htmlFor="wd-file-upload">
                  File Uploads
                </label>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="form-group row align-items-start">
        <label
          htmlFor="wd-assign-to"
          className="col-sm-2 col-form-label text-end d-none d-md-block"
        >
          Assign
        </label>
        <div className="col-sm-10">
          <div className="border border-secondary p-2">
            <div className="justify-content-start">
              <label htmlFor="wd-assign-to">
                <strong>Assign to</strong>
              </label>
            </div>
            <div className="border border-secondary p-2">
              <div
                className="d-flex justify-content-between align-items-center"
                style={{
                  backgroundColor: "#F0F0F0",
                  width: "130px",
                  height: "40px",
                  borderRadius: "5px",
                }}
              >
                <p className="m-3">Everyone</p>
                <div className="m-2">
                  <RxCross2 />
                </div>
              </div>
            </div>
            <br />
            <div className="d-flex flex-column">
              <label htmlFor="wd-due-date">
                <strong>Due</strong>
              </label>
              <div className="d-flex">
                <input type="date" className="form-control date-input" />
                <div className="input-group-append">
                  <span
                    className="input-group-text d-flex justify-content-center"
                    id="wd-due-date"
                    style={{ height: "40px", width: "60px" }}
                  >
                    <MdOutlineCalendarMonth />
                  </span>
                </div>
              </div>
            </div>
            <br />
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column me-3 w-50">
                <label htmlFor="wd-available-from">
                  <strong>Available from</strong>
                </label>
                <div className="d-flex">
                  <input type="date" className="form-control date-input" />
                  <div className="input-group-append">
                    <span
                      className="input-group-text d-flex justify-content-center align-items-center"
                      id="wd-available-from"
                      style={{ height: "40px", width: "60px" }}
                    >
                      <MdOutlineCalendarMonth />
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column w-50">
                <label htmlFor="wd-available-until">
                  <strong>Until</strong>
                </label>
                <div className="d-flex">
                  <input type="date" className="form-control date-input" />
                  <div className="input-group-append">
                    <span
                      className="input-group-text d-flex justify-content-center align-items-center"
                      id="wd-available-until"
                      style={{ height: "40px", width: "60px" }}
                    >
                      <MdOutlineCalendarMonth />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
          <br /><br /><br />
        </div>
        <hr />
        <AssignmentsSaveButtons />
      </div>
    </div>
  );
}
