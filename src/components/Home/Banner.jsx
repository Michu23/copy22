import React, { useState } from "react";
import "../../App.css";

import B1 from "../../assets/Hero/abc.svg";
import B2 from "../../assets/Hero/B2.svg";
import B3 from "../../assets/Hero/B3.svg";

import Group1 from "../../assets/Group1.svg";
import Group2 from "../../assets/Group2.svg";
import Group3 from "../../assets/Group3.svg";
import Group4 from "../../assets/Group4.svg";
import Group5 from "../../assets/Group5.svg";

import BB1 from "../../assets/Hero/BB1.svg";
import BB2 from "../../assets/Hero/BB2.svg";
import BB3 from "../../assets/Hero/BB3.svg";


const Banner = () => {
  const [card, setCard] = useState("");

  return (
    <div>
      <div className="display__desktop ">
        <div className="banner__web">
           <div className="b1">
          <img src={B1} alt="" />
        </div>
        <div className="b2">
          <img src={B2} alt="" />
          <div className="main__container">
            <div
              className="menu__container"
              onMouseEnter={() => {
                setTimeout(() => {
                setCard("Ingestion");
                },400)
              }}
              onMouseLeave={() => {
                setCard("");
              }}
            >
              <div className="menu c4 ">
                <div>
                  <h3>Ingestion</h3>
                  {card === "Ingestion" && (
                    <p>
                      With an upstream semantic layer, create a centralized,
                      single source of truth—with consistent metrics you only
                      need to define once.
                    </p>
                  )}
                </div>
                <img src={Group4} className="img" alt="" />
              </div>
            </div>
            <div
              className="menu__container"
              onMouseEnter={() => {
                setTimeout(() => {
                  setCard("Data");
                }, 500);
              }}
              onMouseLeave={() => {
                setCard("");
              }}
            >
              <div className="menu c5 ">
                <div>
                  <h3>
                    Data
                    <br />
                    Modelling
                  </h3>
                  {card === "Data" && (
                    <p>
                      With an upstream semantic layer, create a centralized,
                      single source of truth—with consistent metrics you only
                      need to define once.
                    </p>
                  )}
                </div>
                <img src={Group5} className="img" alt="" />
              </div>
            </div>
            <div
              className="menu__container"
              onMouseEnter={() => {
                setTimeout(() => {
                  setCard("Caching");
                }, 500);
              }}
              onMouseLeave={() => {
                setCard("");
              }}
            >
              <div className="menu c1">
                <div>
                  <h3>Caching</h3>
                  {card === "Caching" && (
                    <p>
                      With an upstream semantic layer, create a centralized,
                      single source of truth—with consistent metrics you only
                      need to define once.
                    </p>
                  )}
                </div>
                <img src={Group1} className="img" alt="" />
              </div>
            </div>
            <div
              className="menu__container"
              onMouseEnter={() => {
                setTimeout(() => {
                  setCard("Access");
                }, 500);
              }}
              onMouseLeave={() => {
                setCard("");
              }}
            >
              <div className="menu c2">
                <div>
                  <h3>
                    Access
                    <br />
                    Control
                  </h3>
                  {card === "Access" && (
                    <p>
                      With an upstream semantic layer, create a centralized,
                      single source of truth—with consistent metrics you only
                      need to define once.
                    </p>
                  )}
                </div>
                <img src={Group2} className="img" alt="" />
              </div>
            </div>
            <div
              className="menu__container"
              onMouseEnter={() => {
                setTimeout(() => {
                  setCard("API");
                }, 500);
              }}
              onMouseLeave={() => {
                setCard("");
              }}
            >
              <div className="menu c3 ">
                <div>
                  <h3>API's</h3>
                  {card === "API" && (
                    <p>
                      With an upstream semantic layer, create a centralized,
                      single source of truth—with consistent metrics you only
                      need to define once.
                    </p>
                  )}
                </div>
                <img src={Group3} className="img" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="b3">
          <img src={B3} alt="" />
        </div>
        </div>
       
      </div>
      <div className="display__mobile">
        <div className="banner__mobile">
           <div className="bb1">
          <img src={BB1} alt="" />
        </div>
        <div className="bb2">
          <img src={BB2} className="bb2img" alt="" />
          <div className="main__container__mm">
            <div
              className="menu__container__mm"
              onMouseEnter={() => {
                setCard("Ingestion");
              }}
              onMouseLeave={() => {
                setCard("");
              }}
            >
              <div className="menu c4 ">
                <div>
                  <h3>Ingestion</h3>
                  {card === "Ingestion" && (
                    <p>
                      With an upstream semantic layer, create a centralized,
                      single source of truth—with consistent metrics you only
                      need to define once.
                    </p>
                  )}
                </div>
                <img src={Group4} className="imgg" alt="" />
              </div>
            </div>
            <div
              className="menu__container__mm"
              onMouseEnter={() => {
                setTimeout(() => {
                  setCard("Data");
                }, 500);
              }}
              onMouseLeave={() => {
                setCard("");
              }}
            >
              <div className="menu c5 ">
                <div>
                  <h3>
                    Data
                    <br />
                    Modelling
                  </h3>
                  {card === "Data" && (
                    <p>
                      With an upstream semantic layer, create a centralized,
                      single source of truth—with consistent metrics you only
                      need to define once.
                    </p>
                  )}
                </div>
                <img src={Group5} className="imgg" alt="" />
              </div>
            </div>
            <div
              className="menu__container__mm"
              onMouseEnter={() => {
                setTimeout(() => {
                  setCard("Caching");
                }, 500);
              }}
              onMouseLeave={() => {
                setCard("");
              }}
            >
              <div className="menu c1">
                <div>
                  <h3>Caching</h3>
                  {card === "Caching" && (
                    <p>
                      With an upstream semantic layer, create a centralized,
                      single source of truth—with consistent metrics you only
                      need to define once.
                    </p>
                  )}
                </div>
                <img src={Group1} className="imgg" alt="" />
              </div>
            </div>
            <div
              className="menu__container__mm"
              onMouseEnter={() => {
                setTimeout(() => {
                  setCard("Access");
                }, 500);
              }}
              onMouseLeave={() => {
                setCard("");
              }}
            >
              <div className="menu c2">
                <div>
                  <h3>
                    Access
                    <br />
                    Control
                  </h3>
                  {card === "Access" && (
                    <p>
                      With an upstream semantic layer, create a centralized,
                      single source of truth—with consistent metrics you only
                      need to define once.
                    </p>
                  )}
                </div>
                <img src={Group2} className="imgg" alt="" />
              </div>
            </div>
            <div
              className="menu__container__mm"
              onMouseEnter={() => {
                setTimeout(() => {
                  setCard("API");
                }, 500);
              }}
              onMouseLeave={() => {
                setCard("");
              }}
            >
              <div className="menu c3 ">
                <div>
                  <h3>API's</h3>
                  {card === "API" && (
                    <p>
                      With an upstream semantic layer, create a centralized,
                      single source of truth—with consistent metrics you only
                      need to define once.
                    </p>
                  )}
                </div>
                <img src={Group3} className="imgg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bb3">
          <img src={BB3} alt="" />
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Banner;
