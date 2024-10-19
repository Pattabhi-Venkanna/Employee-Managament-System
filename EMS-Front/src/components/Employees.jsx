import React, { useContext } from "react";
import { EmployeeListContext } from "../store/employee-context-store";

const Employees = ({ emp }) => {
  const { deleteEmployee } = useContext(EmployeeListContext);
  const editEmployee = (emp) => {
    console.log(emp);
  };
  return (
    <tr className="text-center">
      <td>{emp.firstName}</td>
      <td>{emp.lastName}</td>
      <td>{emp.emailId}</td>
    </tr>
  );
};

export default Employees;
