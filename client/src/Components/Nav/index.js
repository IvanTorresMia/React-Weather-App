import React from "react";
import "./style.css";

function Nav() {
  return (
    <div>
      <header className="p-2 container-fluid Nav">
        <div className="row">
          <div className="col-lg text-center">
            <h1 className="display-4">My Weather App</h1>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Nav;
