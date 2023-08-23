import "../css/Services.css";
import Lottie from "react-lottie";
import services from "../lottie/services.json";
import git from "../img/github.png";

const Services = () => {
  const service = {
    loop: true,
    autoplay: true,
    animationData: services,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="services-container" id="services">
      <div id="serv">
        <Lottie options={service} isClickToPauseDisabled />
      </div>
      <div className="ser-info">
        <h2>Services</h2>
        <p>
          Tanabu is a Python package that leverages quantum machine learning to
          improve the precision of predicting maintenance requirements for
          energy grids. This open-source software utilizes a quantum support
          vector regressor algorithm to analyze energy consumption trends and
          weather data. By doing so, it can provide maintenance recommendations
          in advance to prevent energy grid overloading. Tanabu's advanced
          technology ensures that energy providers can plan and prepare for
          maintenance more accurately, ultimately leading to a more reliable and
          efficient energy grid.
        </p>
        <div className="btns">
          <a
            href="https://explain-qml-score.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="launch">Launch TANABU</button>
          </a>
          <a
            href="https://github.com/omarrayyann/TANABU"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="github">
              <img src={git} id="github" alt="GitHub" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
