import React, { useContext, useRef } from "react";
import { EmployeeListContext } from "../store/employee-context-store";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navgate = useNavigate();
  const { addEmployee, reload, setReload } = useContext(EmployeeListContext);
  const firstNameElement = useRef();
  const lastNameElement = useRef();
  const emailIdElement = useRef();
  const handleSubmit = () => {
    event.preventDefault();
    const firstName = firstNameElement.current.value;
    const lastName = lastNameElement.current.value;
    const emailId = emailIdElement.current.value;

    fetch("http://localhost:8080/api/Employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        emailId,
      }),
    })
      .then((res) => res.json)
      .then((data) => {
        addEmployee(data);
        setReload(!reload);
        navgate("/");
      });

    firstNameElement.current.value = "";
    lastNameElement.current.value = "";
    emailIdElement.current.value = "";

    console.log(firstName);
    console.log(lastName);
    console.log(emailId);
  };
  return (
    <div className="container p-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name:-
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            ref={firstNameElement}
            placeholder="abhi"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name:-
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            ref={lastNameElement}
            placeholder="ram"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailId" className="form-label">
            Email Id:-
          </label>
          <input
            type="email"
            className="form-control"
            id="emailId"
            ref={emailIdElement}
            placeholder="abhiram@gmail.com"
          />
        </div>
        <button type="submit" className="btn btn-primary text-centers">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
