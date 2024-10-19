import React, { useContext } from "react";
import { EmployeeListContext } from "../store/employee-context-store";

const EmpCard = ({ employee }) => {
  const { deleteEmployee } = useContext(EmployeeListContext);
  return (
    <div class="card emp-card m-4">
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        onClick={() => deleteEmployee(employee.id)}
      >
        Remove
      </span>
      <div className="card-header  text-bg-primary ">
        <b>{employee.id}</b>
      </div>
      <div class="card-body">
        <h5 class="card-title">{employee.firstName}</h5>
        <p class="card-text">
          Name:- {employee.firstName} {employee.lastName}
        </p>
        <p class="card-text">
          <i>{employee.emailId} </i>
        </p>
      </div>
    </div>
  );
};

export default EmpCard;
