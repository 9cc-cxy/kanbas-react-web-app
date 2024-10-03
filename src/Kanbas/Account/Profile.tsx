import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input
        id="wd-username"
        placeholder="alice"
        className="form-control mb-2"
      />
      <input
        id="wd-password"
        placeholder="123"
        className="form-control mb-2"
      />
      <input
        id="wd-first-name"
        placeholder="Alice"
        className="form-control mb-2"
      />
      <input
        id="wd-last-name"
        placeholder="Wonderland"
        className="form-control mb-2"
      />
      <input
        id="wd-date-of-birth"
        type="date"
        placeholder="Wonderland"
        className="form-control mb-2"
      />
      <input
        id="wd-email"
        placeholder="alice@wonderland.com"
        className="form-control mb-2"
      />
      <input
        id="wd-user"
        placeholder="User"
        className="form-control mb-2"
      />
      <Link
        id="wd-signin-btn"
        to="/Kanbas/Dashboard"
        className="btn btn-danger w-100"
      >
        Signout
      </Link>
    </div>
  );
}
