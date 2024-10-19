import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { EmployeeListContext } from "../store/employee-context-store";

const Emps = ({ emp }) => {
  const { setUser } = useContext(EmployeeListContext);
  return (
    <tr>
      <td> {emp.id} </td>
      <td> {emp.firstName} </td>
      <td> {emp.lastName} </td>
      <td> {emp.emailId} </td>
      <td>
        <Link
          to="/edit-Emp"
          className="btn btn-primary"
          onClick={() => setUser(emp)}
        >
          Edit
        </Link>
      </td>
    </tr>
  );
};

export default Emps;
