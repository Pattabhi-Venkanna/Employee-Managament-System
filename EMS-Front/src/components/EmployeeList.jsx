import React, { useContext, useState } from "react";
import { EmployeeListContext } from "../store/employee-context-store";
import NoData from "./NoData";
import Employees from "./Employees";

const EmployeeList = () => {
  const { employees } = useContext(EmployeeListContext);

  return (
    <div className="container">
      {employees.length === 0 ? (
        <NoData />
      ) : (
        <table className="table table-hover text-center">
          <thead>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <Employees emp={emp} key={emp.id} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeList;
