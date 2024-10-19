import { createContext, useEffect, useReducer, useState } from "react";
import EmployeeReducer from "./EmployeeReducer";

export const EmployeeListContext = createContext({
  employees: [],
  user: [],
  setUser: [],
  addEmployee: () => {},
  deleteEmployee: () => {},
  editEmployee: () => {},
});
const initialState = {
  employees: [],
};

const EmployeeListContextProvider = ({ children }) => {
  const [employees, dispatchEmployees] = useReducer(EmployeeReducer, []);
  const [user, setUser] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("http://localhost:8080/api/Employees", { signal })
      .then((response) => response.json())
      .then((data) => {
        dispatchEmployees({ type: "SET-EMPLOYEES", payload: data });
      });
    return () => {
      controller.abort();
    };
  }, [reload]);

  const addEmployee = (employ) => {
    console.log(employ);
    dispatchEmployees({ type: "CREATE-EMPLOYEE", payload: employ });
  };

  const deleteEmployee = (eId) => {
    console.log(eId);
    fetch(`http://localhost:8080/api/Employees/${eId}`, {
      method: "DELETE",
    }).then(() => {
      dispatchEmployees({ type: "DELETE-EMPLOYEE", payload: eId });
    });
    // useEffect(() => {

    // }, []);
  };

  return (
    <EmployeeListContext.Provider
      value={{
        employees,
        addEmployee,
        deleteEmployee,
        user,
        setUser,
        reload,
        setReload,
      }}
    >
      {children}
    </EmployeeListContext.Provider>
  );
};
export default EmployeeListContextProvider;
