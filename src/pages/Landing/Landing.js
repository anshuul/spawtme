import React, { Component } from "react";
import "./Landing.css";
import GooglePlay from "../../assets/googleplay2.png";
import Aux from "../../hoc/Auxiliary";
import Image1 from "../../assets/Image1.svg";
import Image2 from "../../assets/Image2.svg";
import Image3 from "../../assets/Image3.svg";
import Image4 from "../../assets/Image4.svg";

class Landing extends Component {
  handleSubmit = () => {
    console.log("Clicked!!");
  };

  render() {
    return (
      <Aux>

        <div class="row  ">
          <div class="col s12 m12 l6 customImageDiv">

            <img
              id="customImage"
              src={Image1}
              alt="image1"
              style={{ cursor: "default" }}
            />

          </div>
          <div class="col s12 m12 l6">
            <div className="text-div-1">
              <h1>
                Discover People <br /> By Social
            </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Tempora labore ea nobis ullam <br /> quasi maiores impedit
              tempore, animi ad <br /> delectus eius aut,
            </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.social.friends.games.multiplayer.spawtme"
                target="blank"
              >
                <img
                  src={GooglePlay}
                  alt="googleplay"
                  onClick="https://play.google.com/store/apps/details?id=com.social.friends.games.multiplayer.spawtme"
                />
              </a>
            </div>
          </div>
        </div>




        <div class="row customDiv2 ">
          <div class="col s12 m12 l6 customTextDiv">
            <div className="text-div-2">
              <h1>
                Discover People <br /> By Social
            </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Tempora labore ea nobis ullam <br /> quasi maiores impedit
              tempore, animi ad <br /> delectus eius aut,
            </p>

            </div>
          </div>
          <div class="col s12 m12 l6 customImageDiv">

            <img
              id="customImage"
              src={Image2}
              alt="image1"
              style={{ cursor: "default" }}
            />
          </div>
        </div>










        <div class="row  customDiv3">
          <div class="col s12 m12 l6 customImageDiv">

            <img
              id="customImage"
              src={Image3}
              alt="image1"
              style={{ cursor: "default" }}
            />

          </div>
          <div class="col s12 m12 l6">
            <div className="text-div-1">
              <h1>
                Discover People <br /> By Social
            </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Tempora labore ea nobis ullam <br /> quasi maiores impedit
              tempore, animi ad <br /> delectus eius aut,
            </p>
            </div>
          </div>
        </div>



        <div class="row customDiv4 ">
          <div class="col s12 m12 l6 customTextDiv">
            <div className="text-div-2">
              <h1>
                Discover People <br /> By Social
            </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Tempora labore ea nobis ullam <br /> quasi maiores impedit
              tempore, animi ad <br /> delectus eius aut,
            </p>
            </div>
          </div>
          <div class="col s12 m12 l6 customImageDiv">

            <img
              id="customImage"
              src={Image4}
              alt="image1"
              style={{ cursor: "default" }}
            />

          </div>
        </div>



















        {/* 
        <div className="row customDiv2">
          <div className="col s12 m12 l6 customTextDiv2">
            <h1>
              Discover People <br /> By Social
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Tempora labore ea nobis ullam <br /> quasi maiores impedit
              tempore, animi ad <br /> delectus eius aut,
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.social.friends.games.multiplayer.spawtme"
              target="blank"
            ></a>
          </div>
          <div className="col s12 m12 l6 customImageDiv">
            <img

              src={Image2}
              alt="image2"
              style={{ cursor: "default" }}
            />
          </div>
        </div> */}

        {/* 
        <div className="custom-div-3">
          <div className="image-div-1">
            <img
              id="customImage"
              src={Image3}
              alt="image1"
              style={{ cursor: "default" }}
            />
          </div>
          <div className="text-div-1">
            <h1>
              Discover People <br /> By Social
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Tempora labore ea nobis ullam <br /> quasi maiores impedit
              tempore, animi ad <br /> delectus eius aut,
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.social.friends.games.multiplayer.spawtme"
              target="blank"
            ></a>
          </div>
        </div> */}
        {/*         <div className="custom-div-4">
          <div className="text-div-2">
            <h1>
              Discover People <br /> By Social
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Tempora labore ea nobis ullam <br /> quasi maiores impedit
              tempore, animi ad <br /> delectus eius aut,
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.social.friends.games.multiplayer.spawtme"
              target="blank"
            ></a>
          </div>
          <div className="image-div-2">
            <img
              id="customImage"
              src={Image4}
              alt="image4"
              style={{ cursor: "default" }}
            />
          </div>
        </div> */}
        <div className="row center-align">
          <p>@ {new Date().getFullYear()} Spawt.me</p>
        </div>
      </Aux >
    );
  }
}

export default Landing;
