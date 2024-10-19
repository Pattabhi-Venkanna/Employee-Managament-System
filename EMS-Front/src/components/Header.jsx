import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="head mb-3">
      <header class="p-3 text-bg-dark ">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                class="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlink:href="#bootstrap"></use>
              </svg>
            </a>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" class="nav-link px-2 text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/add-employee" class="nav-link px-2 text-white">
                  Add Employee
                </Link>
              </li>
              <li>
                <Link to="/view-employee" class="nav-link px-2 text-white">
                  View details
                </Link>
              </li>
              <li>
                <Link to="/edit-employee" class="nav-link px-2 text-white">
                  Edit Employees
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
