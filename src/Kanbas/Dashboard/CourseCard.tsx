import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { enroll, unenroll } from "../Enrollments/reducer";

export default function CourseCard({
  course,
  currentUser,
  isEnrolled,
  isStudent,
  deleteCourse,
  setCourse,
  enrolling,
}: {
  course: any;
  currentUser: any;
  isEnrolled: boolean;
  isStudent: boolean;
  deleteCourse: (courseId: string) => void;
  setCourse: (course: any) => void;
  enrolling: boolean;
}) {
  const dispatch = useDispatch();
  const isFaculty = currentUser.role === "FACULTY";

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
              {enrolling && (
                <button
                  className={`btn ${
                    course.enrolled ? "btn-danger" : "btn-success"
                  } float-end`}
                >
                  {course.enrolled ? "Unenroll" : "Enroll"}
                </button>
              )}
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
                    dispatch(
                      unenroll({ user: currentUser._id, course: course._id })
                    );
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
                    dispatch(
                      enroll({ user: currentUser._id, course: course._id })
                    );
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
