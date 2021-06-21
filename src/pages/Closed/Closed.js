import "./Closed.css";
import Aux from "../../hoc/Auxiliary";
import Lock from "../../assets/lock.png";

const Closed = (props) => {
  return (
    <Aux>
      <div className="main-div">
        <div className="closed-div">
          <img src={Lock} alt="" />
          <p>
            The Account is Private, <br /> Add This Person In App To See
            Information.
          </p>
          <a href={props.data.Response.deeplink} target="blank">
            <button
              className="btn z-depth-2 hoverable waves-effect purple darken-4 waves-light"
              type="submit"
              name="action"
            >
              Download
            </button>

            {/*             <button className="customButton">
              Download
            </button> */}
          </a>
        </div>
      </div>
    </Aux>
  );
};

export default Closed;
