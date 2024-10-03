import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControls from "./AssignmentsControls";
import AssignmentsTabButtons from "./AssignmentsTabButtons";
import { IoMdArrowDropdown } from "react-icons/io";
import TaskControlButtons from "./TaskControlButtons";

export default function Assignments() {
  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill">
        <div id="wd-assignments" className="me-4 ms-5">
          <AssignmentControls />
          <br />
          <br />
          <br />
          <br />
          <ul id="wd-assignment-list" className="list-group rounded-0">
            <li className="wd-assignment-list list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-assignments-title p-4 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                <IoMdArrowDropdown className="me-2 fs-3" />
                ASSIGNMENTS <AssignmentsTabButtons />
              </div>
              <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <TaskControlButtons />
                  <div>
                    <h4 className="mb-0">
                      <strong>
                        <a
                          className="wd-assignment-link text-dark"
                          href="#/Kanbas/Courses/1234/Assignments/123"
                          style={{ textDecoration: "none" }}
                        >
                          A1
                        </a>
                      </strong>
                    </h4>
                    <p className="mb-0">
                      <span className="text-danger">Multiple Modules</span> |
                      <span className="text-muted">
                        <strong> Not available until</strong> May 6 at 12:00am
                      </span>{" "}
                      |
                      <br />
                      <span className="text-muted">
                        <strong>Due</strong> May 13 at 11:59pm
                      </span>{" "}
                      |<span className="text-muted"> 100 pts</span>
                    </p>
                  </div>
                </div>
                <LessonControlButtons />
              </li>
              <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <TaskControlButtons />
                  <div>
                    <h4 className="mb-0">
                      <strong>
                        <a
                          className="wd-assignment-link text-dark"
                          href="#/Kanbas/Courses/1234/Assignments/123"
                          style={{ textDecoration: "none" }}
                        >
                          A2
                        </a>
                      </strong>
                    </h4>
                    <p className="mb-0">
                      <span className="text-danger">Multiple Modules</span> |
                      <span className="text-muted">
                        <strong> Not available until</strong> May 13 at 12:00am
                      </span>{" "}
                      |
                      <br />
                      <span className="text-muted">
                        <strong>Due</strong> May 20 at 11:59pm
                      </span>{" "}
                      |<span className="text-muted"> 100 pts</span>
                    </p>
                  </div>
                </div>
                <LessonControlButtons />
              </li>
              <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <TaskControlButtons />
                  <div>
                    <h4 className="mb-0">
                      <strong>
                        <a
                          className="wd-assignment-link text-dark"
                          href="#/Kanbas/Courses/1234/Assignments/123"
                          style={{ textDecoration: "none" }}
                        >
                          A3
                        </a>
                      </strong>
                    </h4>
                    <p className="mb-0">
                      <span className="text-danger">Multiple Modules</span> |
                      <span className="text-muted">
                        <strong> Not available until</strong> May 20 at 12:00am
                      </span>{" "}
                      |
                      <br />
                      <span className="text-muted">
                        <strong>Due</strong> May 27 at 11:59pm
                      </span>{" "}
                      |<span className="text-muted"> 100 pts</span>
                    </p>
                  </div>
                </div>
                <LessonControlButtons />
              </li>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
