import "../css/Home.css";
import Lottie from "react-lottie";
import soc from "../lottie/society.json";

const Home = () => {
  const scheme = {
    loop: true,
    autoplay: true,
    animationData: soc,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="HomeContainer" id="home">
      <h1 id="title">T A N A B U|تنبّؤ</h1>
      <div className="info">
        <p id="info">
          TANABU|تنبّؤ is a quantum machine learning open source python package
          that predicts energy grid failures and suggests maintenance, based on
          climate data and <strong>energy consumption failure</strong> trends.
          Tanabu is unique in that it{" "}
          <strong>capitalizes on the quantum advantage</strong> to enhance the
          accuracy of energy grid failure predictions. As we all know, there is
          a lack of affordable and clean energy, a dilemma even identified by
          the UN. Our product directly addresses this issue, by optimizing
          energy grids. Energy will become more <strong>reliable</strong> and,
          therefore, more <strong>affordable</strong>. To a lesser extent,
          Tabanu contributes to sustainable cities and communities, as well as
          industry, innovation, and infrastructure. Implementing{" "}
          <strong>prdictive maintenance</strong> into current infrastructure to
          optimize energy grids extends their <strong>lifespan</strong>, and
          ensures a sustainable energy future.
        </p>
        <div id="power">
          <Lottie options={scheme} isClickToPauseDisabled />
        </div>
      </div>
    </div>
  );
};

export default Home;
