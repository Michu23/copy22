import React, { useState } from "react";
import { ReactComponent as MySvg } from "../assets/Icons/arrow-right-circle.svg";
import { ReactComponent as Banner } from "../assets/Hero/Banner.svg";
import { ReactComponent as Ell } from "../assets/Ellips.svg";
import { ReactComponent as Grid } from "../assets/Maskgroup.svg";
import Companies from "../components/Companies";
import Cards from "../components/Home/Cards";
import Lake from "../components/Home/Lake";
import Pipeline from "../components/Home/Pipeline";
import Success from "../components/Home/Success";
import FAQs from "../components/Home/FAQs";
import BannerMob from "../assets/Mobile/BannerMob.svg";
import Bannerr from "../assets/Hero/BannerFinal.svg";

import Group1 from "../assets/Group1.svg";
import Group2 from "../assets/Group2.svg";
import Group3 from "../assets/Group3.svg";
import Group4 from "../assets/Group4.svg";
import Group5 from "../assets/Group5.svg";

const Home = () => {

  const [card,setCard] = useState("");



  return (
    <>
      <div className="display__desktop">
        <div className="first">
          <div className="heading">
            <h1>
              Unlock The Value Of Your Data
              <br />
              at <span className="colorheading">10x Price Performance</span>
              Advantage
            </h1>
          </div>
          <div className="description">
            <p>
              Discover a more efficient way to scale your data analytics. Our
              advanced platform ingests all your data into a single source of
              truth and provides seamless access to data consumers. Built on an
              open architecture, it ensures faster, more reliable and scalable
              deployment of data solutions.
            </p>
          </div>
          <div className="first">
            <div className="getstarted">
              <a href="hi">Get Started</a>
              <MySvg />
            </div>
            <div className="banner__web">
              {/* <Bannerr /> */}
              <div className="main__container">
                <div className="menu__container"
                  onMouseEnter={() =>{
                    setTimeout(() =>{
                      setCard("Ingestion");
                    },500);
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
                <div className="menu__container"
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
                <div className="menu__container"
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
                <div className="menu__container"
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
                <div className="menu__container"

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
              <img src={Bannerr} style={{
                marginTop: "-15rem",
                width: "100%",
              }} alt="" />
              {/* <Banner /> */}
              
            </div>
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
              Discover a more efficient way to scale your data analytics. Our
              advanced platform ingests all your data into a single source of
              truth and provides seamless access to data consumers. Built on an
              open architecture, it ensures faster, more reliable and scalable
              deployment of data solutions.
            </p>
            <div className="getstarted__mob">
              <a href="hi">Get Started</a>
              <div className="banner__img">
                <MySvg />
              </div>
            </div>
          </div>
          <div className="">
            <img src={BannerMob} className="banner__img__mobile" alt="" />
          </div>
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
