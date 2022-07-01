import React from "react";
import "./info.css";

const Info = () => {
  return (
    <div className="info">
      <div className="info__container">
        <div className="info__title">
          <h1 className="fw-bolder ">About Fidelity-market</h1>
        </div>
        <div className="info__about">
          <p className="text-muted">
            Fidelity-market is your NO. 1 cryptocurrency investment portfolio
            management system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
