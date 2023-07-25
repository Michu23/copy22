import React from "react";
// import { ReactComponent as Google } from "../assets/Companies/Google.svg";
// import { ReactComponent as Pinterest } from "../assets/Companies/Pinterest.svg";
// import { ReactComponent as Reddit } from "../assets/Companies/Reddit.svg";
// import { ReactComponent as Spotify } from "../assets/Companies/Spotify.svg";
// import { ReactComponent as Stripe } from "../assets/Companies/Stripe.svg";

import Google from "../assets/Companies/Google.svg";
import Pinterest from "../assets/Companies/Pinterest.svg";
import Reddit from "../assets/Companies/Reddit.svg";
import Spotify from "../assets/Companies/Spotify.svg";
import Stripe from "../assets/Companies/Stripe.svg";

const Companies = () => {
  const partnerLogos = [
    {
      img: Google,
    },
    {
      img: Pinterest,
    },
    {
      img: Reddit,
    },
    {
      img: Spotify,
    },
    {
      img: Stripe,
    },
  ];

  return (
    <>
      <div className="display__desktop">
        <div className="first">
          {/* <div className="companies">
            <img src={Google} alt="" />
            <img src={Pinterest} alt="" />
            <img src={Reddit} alt="" />
            <img src={Spotify} alt="" />
            <img src={Stripe} alt="" />
            <img src={Google} alt="" />
            <img src={Pinterest} alt="" />
            <img src={Reddit} alt="" />
          </div> */}
          <div
            class="logos"
            style={{
              marginTop: "-90rem",
            }}
          >
            <div className="logos-slide">
              <img src={Google} />
              <img src={Pinterest} alt="" />
              <img src={Reddit} alt="" />
              <img src={Spotify} alt="" />
              <img src={Stripe} alt="" />
              <img src={Google} alt="" />
              <img src={Pinterest} alt="" />
              <img src={Reddit} alt="" />
            </div>

            <div class="logos-slide">
              <img src={Google} />
              <img src={Pinterest} alt="" />
              <img src={Reddit} alt="" />
              <img src={Spotify} alt="" />
              <img src={Stripe} alt="" />
              <img src={Google} alt="" />
              <img src={Pinterest} alt="" />
              <img src={Reddit} alt="" />
            </div>
            <div class="logos-slide">
              <img src={Google} />
              <img src={Pinterest} alt="" />
              <img src={Reddit} alt="" />
              <img src={Spotify} alt="" />
              <img src={Stripe} alt="" />
              <img src={Google} alt="" />
              <img src={Pinterest} alt="" />
              <img src={Reddit} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="display__mobile">
      <div
            class="logos"
        
          >
            <div className="logos-slide">
              <img src={Google} />
              <img src={Pinterest} alt="" />
              <img src={Reddit} alt="" />
              <img src={Spotify} alt="" />
              <img src={Stripe} alt="" />
              <img src={Google} alt="" />
              <img src={Pinterest} alt="" />
              <img src={Reddit} alt="" />
            </div>

            <div class="logos-slide">
              <img src={Google} />
              <img src={Pinterest} alt="" />
              <img src={Reddit} alt="" />
              <img src={Spotify} alt="" />
              <img src={Stripe} alt="" />
              <img src={Google} alt="" />
              <img src={Pinterest} alt="" />
              <img src={Reddit} alt="" />
            </div>
            <div class="logos-slide">
              <img src={Google} />
              <img src={Pinterest} alt="" />
              <img src={Reddit} alt="" />
              <img src={Spotify} alt="" />
              <img src={Stripe} alt="" />
              <img src={Google} alt="" />
              <img src={Pinterest} alt="" />
              <img src={Reddit} alt="" />
            </div>
          </div>
      </div>
    </>
  );
};

export default Companies;
