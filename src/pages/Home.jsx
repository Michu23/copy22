import React, { useEffect, useState } from "react";
import { ReactComponent as MySvg } from "../assets/Icons/arrow-right-circle.svg";
import { ReactComponent as Ell } from "../assets/Ellips.svg";
import { ReactComponent as Grid } from "../assets/Maskgroup.svg";

import Companies from "../components/Companies";
import Cards from "../components/Home/Cards";
import Lake from "../components/Home/Lake";
import Pipeline from "../components/Home/Pipeline";
import Success from "../components/Home/Success";
import FAQs from "../components/Home/FAQs";

import Banner from "../components/Home/Banner";
import { Link } from "react-router-dom";

const Home = () => {
  const [card, setCard] = useState("");

  return (
    <>
      <div className="display__desktop">
        <div className="first">
          <div className="heading ch">
            <h1 >
              Unlock The Value Of Your Data
              <br />
              at <span className="colorheading">10x Price Performance</span>
              Advantage
            </h1>
          </div>
          <div className="description">
            <p>
              Upgrade your data analytics scaling now! Our advanced platform
              centralizes all your data into one place and offers easy access
              for data consumers. With an open architecture, it ensures faster,
              reliable, and scalable data solution deployment.
            </p>
          </div>
          <div className="first">
            <Link to="*">
              <div className="getstarted">
                <a href="hi">Get Started</a>
                <MySvg />
              </div>
            </Link>
            {/* <div className="banner__web">
              <Bannerr />
              
              <img src={Bannerr} style={{
                marginTop: "-15rem",
                width: "100%",
              }} alt="" />
              
            </div> */}
            <Banner />
            <div className="grid">
              <Grid />
            </div>
            <Companies />
          </div>
        </div>
        <div className="biggerellipse">
          <Ell />
        </div>
      </div>
      <div className="display__mobile">
        <div className="banner__component">
          <div className="banner__component__content">
            <h1 className="banner__heading">
              unlock The value of your data at 10x advantage
            </h1>
            <p>
              Upgrade your data analytics scaling now! Our advanced platform
              centralizes all your data into one source and offers easy access
              for data consumers. With an open architecture, it ensures faster,
              reliable, and scalable data solution deployment.
            </p>
            <Link to="*">
              <div className="getstarted__mob">
                <a href="hi">Get Started</a>
                <div className="banner__img">
                  <MySvg />
                </div>
              </div>
            </Link>
          </div>
          {/* <div className="banner__mob">
            <img src={BannerMob} className="banner__img__mobile" alt="" />
            <div className="main__container__mm">
                <div className="menu__container__mm"
                  onMouseEnter={() =>{
                   
                      setCard("Ingestion");
                   
                  }}
                  onMouseLeave={() =>{
                    setCard("");
                  }}
                >
                  <div className="menu c4 ">
                    <div>

                    <h3>Ingestion</h3>
                    {
                      card === "Ingestion" && <p>
                    With an upstream semantic layer, create a centralized, single source of truth—with consistent metrics you only need to define once.
                    </p>
                    }
                    </div>
                    <img src={Group4} className="img" alt="" />
                  </div>
                </div>
                <div className="menu__container__mm"
                 onMouseEnter={() =>{
                  setTimeout(() =>{
                    setCard("Data");
                  },500);
                }}
                onMouseLeave={() =>{
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
                    {
                      card === "Data" && <p>
                    With an upstream semantic layer, create a centralized, single source of truth—with consistent metrics you only need to define once.

                      </p>
                    }
                   </div>
                    <img src={Group5} className="img" alt="" />
                  </div>
                </div>
                <div className="menu__container__mm"
                  onMouseEnter={() =>{
                    setTimeout(() =>{
                      setCard("Caching");
                    },500);
                  }}
                  onMouseLeave={() =>{
                    setCard("");
                  }}
                >
                  <div className="menu c1">
                    <div>

                    <h3>Caching</h3>
                    {
                      card === "Caching" && <p>
                    With an upstream semantic layer, create a centralized, single source of truth—with consistent metrics you only need to define once.
                    </p>
                    }
                   
                    </div>
                    <img src={Group1} className="img" alt="" />
                  </div>
                </div>
                <div className="menu__container__mm"
                   onMouseEnter={() =>{
                    setTimeout(() =>{
                      setCard("Access");
                    },500);
                  }}
                  onMouseLeave={() =>{
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
                    {
                      card === "Access" && <p>
                    With an upstream semantic layer, create a centralized, single source of truth—with consistent metrics you only need to define once.
                    </p>
                    }
                   </div>
                    <img src={Group2} className="img" alt="" />
                  </div>
                </div>
                <div className="menu__container__mm"

                   onMouseEnter={() =>{
                    setTimeout(() =>{
                      setCard("API");
                    },500);
                  }}
                  onMouseLeave={() =>{
                    setCard("");
                  }}
                >
                  <div className="menu c3 ">
                    <div>

                    <h3>API's</h3>
                      {
                        card === "API" && <p>
                          With an upstream semantic layer, create a centralized, single source of truth—with consistent metrics you only need to define once.
                        </p>
                      }
                   
                    </div>
                    <img src={Group3} className="img" alt="" />
                  </div>
                </div>
              </div>
          </div> */}
          <Banner />
          <Companies />
        </div>
      </div>
      <Cards />
      <Lake />
      <Pipeline />
      <Success />
      <FAQs />
    </>
  );
};

export default Home;
