import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import AssignmentDeleteDialogue from "./AssignmentDeleteDialogue";
import { deleteAssignment } from "./reducer";
import { useState } from "react";

export default function AssignmentControlButtons({
  assignmentId,
}: {
  assignmentId: string;
}) {

  const [deleteTargetId, setDeleteTargetId] = useState("");
  const handleDeleteClick = () => {
    setDeleteTargetId(assignmentId);
    console.log(deleteTargetId);
  };

  return (
    <div className="float-end">
      <FaTrash
        className="me-3"
        data-bs-toggle="modal"
        data-bs-target="#wd-add-module-dialog"
        onClick={handleDeleteClick}
      />
      <GreenCheckmark />
      <IoEllipsisVertical/>
      {deleteTargetId !== "" && (
        <AssignmentDeleteDialogue
          dialogueTitle={`Delete Assignment ${deleteTargetId}?`}
          assignmentId={deleteTargetId}
          deleteAssignment={deleteAssignment}
        />
      )}
    </div>
  );
}
