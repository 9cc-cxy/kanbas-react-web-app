import { FaPlus } from "react-icons/fa";

export default function AssignmentsControls() {
  return (
    <div id="wd-assignment-controls" className="text-nowrap">
      <button
        id="wd-add-module-btn"
        className="btn btn-lg btn-danger me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
      <button
        id="wd-add-module-btn"
        className="btn btn-lg btn-secondary me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>
      <input
        className="form-control me-sm-5 float-end"
        type="search"
        placeholder="&#xF002; Search..."
        style={{ fontFamily: "Arial, FontAwesome", height : "50px", width : "300px"}}
      />
    </div>
  );
}
