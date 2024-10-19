import React, { useContext } from "react";
import { EmployeeListContext } from "../store/employee-context-store";
import Emps from "./Emps";

const EmpList = () => {
  const { employees } = useContext(EmployeeListContext);
  return (
    <div className="container p-2">
      <table className="table m-3">
        <thead>
          <tr>
            <th scope="col">Employee Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <Emps emp={emp} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmpList;
