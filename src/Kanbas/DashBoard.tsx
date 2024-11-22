import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { enroll, unenroll } from "./Enrollments/reducer";
import * as enrollmentsClient from "./Enrollments/client";

export default function Dashboard({
  allCourses,
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  allCourses: any[];
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";
  const isStudent = currentUser.role === "STUDENT";
  const [showEnrollments, setShowEnrollments] = useState(false);

  const isEnrolled = (courseId: string) =>
    courses.some((course: any) => course._id === courseId);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </>
      )}

      {isStudent && (
        <button
          type="button"
          className="btn btn-primary mb-3"
          onClick={() => setShowEnrollments(!showEnrollments)}
        >
          {showEnrollments
            ? "Show All Available Courses"
            : "Show Enrolled Courses"}
        </button>
      )}

      <h2 id="wd-dashboard-courses">
        {isFaculty
          ? `Published Courses (${courses.length})`
          : showEnrollments
          ? `Enrolled Courses (${courses.length})`
          : `Available Courses (${allCourses.length})`}
      </h2>
      <hr />

      <div className="row row-cols-1 row-cols-md-5 g-4">
        {isFaculty &&
          courses.map((course) => (
            <CourseCard
              key={course._id}
              course={course}
              currentUser={currentUser}
              isEnrolled={isEnrolled(course._id)}
              isStudent={isStudent}
              deleteCourse={deleteCourse}
              setCourse={setCourse}
            />
          ))}
        {isStudent &&
          (showEnrollments
            ? courses.map((course) => (
                <CourseCard
                  key={course._id}
                  course={course}
                  currentUser={currentUser}
                  isEnrolled={true}
                  isStudent={isStudent}
                  deleteCourse={deleteCourse}
                  setCourse={setCourse}
                />
              ))
            : allCourses.map((course) => (
                <CourseCard
                  key={course._id}
                  course={course}
                  currentUser={currentUser}
                  isEnrolled={isEnrolled(course._id)}
                  isStudent={isStudent}
                  deleteCourse={deleteCourse}
                  setCourse={setCourse}
                />
              )))}
      </div>
    </div>
  );
}

function CourseCard({
  course,
  currentUser,
  isEnrolled,
  isStudent,
  deleteCourse,
  setCourse,
}: {
  course: any;
  currentUser: any;
  isEnrolled: boolean;
  isStudent: boolean;
  deleteCourse: (courseId: string) => void;
  setCourse: (course: any) => void;
}) {
  const dispatch = useDispatch();
  const isFaculty = currentUser.role === "FACULTY";

  const createEnrollment = async () => {
    const newEnrollments = await enrollmentsClient.createEnrollment(
      course._id,
      currentUser._id
    );
    dispatch(enroll(newEnrollments));
  };

  const deleteEnrollment = async () => {
    const newEnrollments = await enrollmentsClient.deleteEnrollment(
      course._id,
      currentUser._id
    );
    dispatch(unenroll(newEnrollments));
  };

  return (
    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
      <div
        className="card rounded-3 overflow-hidden"
        style={{ height: "100%" }}
      >
        <Link
          to={`/Kanbas/Courses/${course._id}/Home`}
          className="wd-dashboard-course-link text-decoration-none text-dark"
        >
          <img
            src={`/images/courses/${course.image}`}
            width="100%"
            height={160}
          />
          <div
            className="card-body"
            style={{
              minHeight: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h5
              className="wd-dashboard-course-title card-title"
              style={{
                maxHeight: "80px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {course.name}
            </h5>
            <p
              className="wd-dashboard-course-description card-text"
              style={{ maxHeight: 100, overflow: "hidden" }}
            >
              {course.description}
            </p>
            <div className="button-container mt-auto">
              <button
                className={
                  isFaculty ? "btn btn-primary me-5" : "btn btn-primary"
                }
              >
                Go
              </button>
              {isEnrolled && isStudent && (
                <button
                  className="btn btn-danger ms-2"
                  onClick={(e) => {
                    e.preventDefault();
                    deleteEnrollment();
                    setTimeout(() => window.location.reload(), 100);
                  }}
                >
                  Unenroll
                </button>
              )}
              {!isEnrolled && isStudent && (
                <button
                  className="btn btn-success ms-2"
                  onClick={(e) => {
                    e.preventDefault();
                    createEnrollment();
                    setTimeout(() => window.location.reload(), 100);
                  }}
                >
                  Enroll
                </button>
              )}
              {isFaculty && (
                <>
                  <button
                    className="btn btn-warning ms-2"
                    onClick={(e) => {
                      e.preventDefault();
                      setCourse(course);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={(e) => {
                      e.preventDefault();
                      deleteCourse(course._id);
                    }}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
