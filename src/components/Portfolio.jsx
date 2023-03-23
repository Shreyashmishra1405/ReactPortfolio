import React from "react";
import "./Portfolio.scss";
import Skillobj from "./Skillobj";
import Skillobj2 from "./Skillobj2";
import Earth from "./Earth"
export default function Portfolio() {
  return (
    <div className="Portfolio" id="portfolio">
      <div className="container">
        <div className="left">
          <div className="upper">
            <Skillobj />
            <Skillobj2 name={"HTML"} />
          </div>
          <div className="lower">
            <Skillobj2 name={"CSS"} />
          </div>
        </div>
        <div className="right">
        </div>
      </div>
    </div>
  );
}
