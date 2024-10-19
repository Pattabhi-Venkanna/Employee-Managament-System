import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EmployeeList from "./components/EmployeeList.jsx";
import AddEmployee from "./components/AddEmployee.jsx";
import EmpCardList from "./components/EmpCardList.jsx";
import EmpList from "./components/EmpList.jsx";
import EditEmployee from "./components/EditEmployee.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <EmployeeList />,
      },
      {
        path: "/add-employee",
        element: <AddEmployee />,
      },
      {
        path: "/view-employee",
        element: <EmpCardList />,
      },
      {
        path: "/edit-employee",
        element: <EmpList />,
      },
      {
        path: "/edit-Emp",
        element: <EditEmployee />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
