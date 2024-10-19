import React from "react";

const NoData = () => {
  return (
    <div>
      <center>
        <div className="d-flex justify-content-center">
          <div
            className="spinner-border spnn"
            role="status"
            style={{ width: "150px", height: "150px" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </center>
    </div>
  );
};

export default NoData;
