import React, { useContext } from "react";
import EmpCard from "./EmpCard";
import { EmployeeListContext } from "../store/employee-context-store";

const EmpCardList = () => {
  const { employees } = useContext(EmployeeListContext);
  return (
    <div className="empCardList ">
      {employees.map((employee) => (
        <EmpCard employee={employee} />
      ))}
    </div>
  );
};

export default EmpCardList;
