import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";

export default function TaskControlButtons() {
  return (
    <div className="float-start me-3">
      <BsGripVertical className="fs-4" />
      <MdOutlineAssignment className="fs-4 text-success"/>
    </div>
  );
}
