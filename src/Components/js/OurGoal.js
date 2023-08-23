import React from "react";
import "../css/OurGoal.css";
import clim from "../img/Climate.png";
import citi from "../img/Cities.png";
import afford from "../img/affordable.png";
import innov from "../img/innovation.png";

const OurGoal = () => {
  return (
    <div className="container" id="our-goal">
      <div className="left-box">
        <img id="image" src={afford} alt="image1" />
        <img id="image" src={citi} alt="image2" />
        <img id="image" src={innov} alt="image3" />
      </div>
      <div className="right-box">
        <div id="goal">
          <h2>Goal</h2>
          <p>
            Our quantum machine learning project suggests
            <strong>maintenance</strong> fot the predicted energy grid failures,
            based on
            <strong>
              climate ,consumption trends, and energy generation data
            </strong>
            . Due to climate change, rising temperatures put immense strain on
            energy grids. Coupled with other climate factors, maintaining a
            consistently reliable source of efficient energy has become complex
            and burdensome. This is where Tanabu comes in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurGoal;
