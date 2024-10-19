import { Outlet } from "react-router-dom";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import EmpCardList from "./components/EmpCardList";
import EmployeeList from "./components/EmployeeList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import EmployeeListContextProvider from "./store/employee-context-store";

function App() {
  return (
    <>
      <EmployeeListContextProvider>
        <Header />
        <div className="container emp-container">
          <Outlet />
        </div>
        <Footer />
      </EmployeeListContextProvider>
    </>
  );
}

export default App;
