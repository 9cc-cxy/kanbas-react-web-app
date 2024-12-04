import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import CourseCard from "./CourseCard";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling,
  setEnrolling,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";
  const isStudent = currentUser.role === "STUDENT";
  const enrollments = useSelector(
    (state: any) => state.enrollmentsReducer.enrollments
  );

  const isEnrolled = (courseId: string) =>
    enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard{" "}
        <button
          onClick={() => setEnrolling(!enrolling)}
          className="float-end btn btn-primary"
        >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
      </h1>
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

      <h2 id="wd-dashboard-courses">
        {isFaculty
          ? `Published `
          : !enrolling
          ? `Enrolled `
          : `Available ` + `Courses (${courses.length})`}
      </h2>
      <hr />

      <div className="row row-cols-1 row-cols-md-5 g-4">
        {courses.map((course) => (
          <CourseCard
            key={course._id}
            course={course}
            currentUser={currentUser}
            isEnrolled={isEnrolled(course._id)}
            isStudent={isStudent}
            deleteCourse={deleteCourse}
            setCourse={setCourse}
            enrolling={enrolling}
          />
        ))}
      </div>
    </div>
  );
}
