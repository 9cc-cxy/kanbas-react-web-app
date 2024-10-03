import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div className="row row-cols-1 row-cols-md-5 g-4">
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1234/Home"
            >
              <img src="images/react.png" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1234 React JS
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/2345/Home"
            >
              <img src="images/sql.png" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">CS2345</h5>
                <p className="wd-dashboard-course-title card-text">
                  Database Management
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/3456/Home"
            >
              <img src="images/algo.png" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">CS3456</h5>
                <p className="wd-dashboard-course-title card-text">
                  Algorithms
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1000/Home"
            >
              <img src="images/ai.png" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">CS1000</h5>
                <p className="wd-dashboard-course-title card-text">
                  Artificial Intelligence
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/5299/Home"
            >
              <img src="images/ml.png" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">CS5299</h5>
                <p className="wd-dashboard-course-title card-text">
                  Introduction to Machine Learning
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/5004/Home"
            >
              <img src="images/oop.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">CS5004</h5>
                <p className="wd-dashboard-course-title card-text">
                  Object-Oriented Programming
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/5690/Home"
            >
              <img src="images/security.jpg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">CS5690</h5>
                <p className="wd-dashboard-course-title card-text">
                  Cybersecurity
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/5001/Home"
            >
              <img src="images/python.png" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">CS5001</h5>
                <p className="wd-dashboard-course-title card-text">
                  Introduction to Programming
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
