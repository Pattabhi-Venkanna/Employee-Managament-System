import React, { useContext, useState } from "react";
import { EmployeeListContext } from "../store/employee-context-store";
import { useNavigate } from "react-router-dom";
import NoData from "./NoData";
import AddEmployee from "./AddEmployee";

const EditEmployee = () => {
  const { user, reload, setReload } = useContext(EmployeeListContext);
  const navigate = useNavigate();

  // Initialize the form values with user's existing data
  const [formValues, setFormValues] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    emailId: user?.emailId || "",
  });

  // Handle input changes and update only the modified field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure we only submit the changed values
    const updatedUser = {
      firstName: formValues.firstName || user.firstName, // Keep original value if unchanged
      lastName: formValues.lastName || user.lastName, // Keep original value if unchanged
      emailId: formValues.emailId || user.emailId, // Keep original value if unchanged
    };

    console.log("Updated User:", updatedUser);

    fetch(`http://localhost:8080/api/Employees/${user.id} `, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: user.id,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        emailId: updatedUser.emailId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setReload(!reload); // Toggle `reload` to re-fetch data
        navigate("/edit-employee");
      });

    // You can proceed with the form submission or fetch request to update the user data.
  };

  return (
    <div className="container p-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formValues.firstName}
            onChange={handleChange}
            placeholder={user.firstName} // Placeholder shows original value
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formValues.lastName}
            onChange={handleChange}
            placeholder={user.lastName} // Placeholder shows original value
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailId" className="form-label">
            Email Id:
          </label>
          <input
            type="email"
            className="form-control"
            id="emailId"
            name="emailId"
            value={formValues.emailId}
            onChange={handleChange}
            placeholder={user.emailId} // Placeholder shows original value
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditEmployee;
