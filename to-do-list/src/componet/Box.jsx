import React from "react";
import { MdOutlineDoneOutline, MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

export default function TodoBox({ text, onDelete, onEdit }) {
  return (
    <div className="todo-box">
      <h3>{text}</h3>
      <div className="icons">
        <MdOutlineDoneOutline className="done" />
        <CiEdit className="edit" onClick={onEdit} />
        <MdDelete className="delete" onClick={onDelete} />
        <FaArrowRight className="arrow" />
      </div>
    </div>
  );
}
