import React, { useRef, useState } from "react";
import Left from "../../assets/leftarrow.svg";
import Right from "../../assets/rightarrow.svg";
import Pro from "../../assets/Success/Brittany.jpeg";
import Pro2 from "../../assets/Success/GearX.jpeg";

const Success = () => {
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);

  const scrollToRight = () => {
    console.log("Scroll to right");
    const container = containerRef.current;
    if (container) {
      const targetScrollLeft = container.scrollLeft + 800; // Calculate the target scroll position
      const duration = 500; // Set the duration for the smooth scroll (in milliseconds)
      smoothScrollTo(container, targetScrollLeft, duration);
    }
  };
  const scrollToLeft = () => {
    const container = containerRef.current;
    if (container) {
      const targetScrollLeft = container.scrollLeft - 800; // Calculate the target scroll position
      const duration = 500; // Set the duration for the smooth scroll (in milliseconds)
      smoothScrollTo(container, targetScrollLeft, duration);
    }
  };

  const smoothScrollTo = (element, targetScrollLeft, duration) => {
    console.log("Smooth scroll");
    const startScrollLeft = element.scrollLeft;
    const distance = targetScrollLeft - startScrollLeft;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const scrollFraction = progress / duration;
      const scrollLeft = startScrollLeft + distance * scrollFraction;

      element.scrollLeft = scrollLeft;

      if (progress < duration) {
        // Continue smooth scrolling
        requestAnimationFrame(step);
      }
    };

    // Start the smooth scrolling animation
    requestAnimationFrame(step);
  };

  const [touchStartX, setTouchStartX] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStartX) return;

    const container = containerRef2.current;
    if (!container) return;

    const touchCurrentX = e.touches[0].clientX;
    const touchDeltaX = touchCurrentX - touchStartX;
    container.scrollLeft -= touchDeltaX;

    setTouchStartX(touchCurrentX);
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  const scrollToRightt = () => {
    const container = containerRef2.current;
    if (container) {
      const targetScrollLeft = container.scrollLeft + 420; // Calculate the target scroll position
      const duration = 500; // Set the duration for the smooth scroll (in milliseconds)
      smoothScrollToo(container, targetScrollLeft, duration);
    }
  };

  const scrollToLeftt = () => {
    const container = containerRef2.current;
    if (container) {
      const targetScrollLeft = container.scrollLeft - 420; // Calculate the target scroll position
      const duration = 500; // Set the duration for the smooth scroll (in milliseconds)
      smoothScrollToo(container, targetScrollLeft, duration);
    }
  };

  const smoothScrollToo = (element, targetScrollLeft, duration) => {
    const startScrollLeft = element.scrollLeft;
    const distance = targetScrollLeft - startScrollLeft;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const scrollFraction = progress / duration;
      const scrollLeft = startScrollLeft + distance * scrollFraction;

      element.scrollLeft = scrollLeft;

      if (progress < duration) {
        // Continue smooth scrolling
        requestAnimationFrame(step);
      }
    };

    // Start the smooth scrolling animation
    requestAnimationFrame(step);
  };

  const successStories = [
    {
      heading:
        "Positioning our brand by highlighting success stories that back",
      para: "Transitioning from spreadsheets to real-time dashboards was a game-changer for us, leading to significant time savings and reduced cloud costs. Dview facilitated this seamless shift promptly, and their exceptional customer support further convinced us to opt for the upfront payment of the yearly fee.",
      img: Pro2,
      name: "Madhu S Naidu",
      position: "Founder, GearX",
      percentage: "50%",
      ratetext: "Reduction in time from raw data to insights on a dashboard.",
    },
    {
      heading:
        "Positioning our brand by highlighting success stories that back",
      para: "Our old process took a day to download XL data from our database and then filter data to get all the information like sales, margin/site, daily/weekly production, supplier costs, and lead times to receive, quote, approve, fix, and ship, and finally sort data by product type, warranty, etc. Our new process with Dview platform is now a one-click custom query engine and analytics dashboards in real-time! \n\nKey outcome: we are more responsive to our customers’ issues and identify issues before they become a customer problem.",
      img: Pro,
      name: "Brittany B.",
      position: "Key Account Manager, E-commerce Business Unit, AH Group.",
      percentage: "50%",
      ratetext: "Reduction in time from raw data to insights on a dashboard.",
    },

  ];

  return (
    <>
      <div className="display__desktop">
        <div className="first">
          <div className="success">
            <div className="scontent">
              <div className="stop">
                <h2 className="sheading">Success Stories</h2>
                <div className="snav">
                  <img src={Left} alt="" onClick={scrollToLeft} />
                  <img src={Right} alt="" onClick={scrollToRight} />
                </div>
              </div>
            </div>
            <div
              className="stories"
              style={{ whiteSpace: "nowrap" }}
              ref={containerRef}
            >
              {successStories.map((story, index) => {
                return (
                  <div className="story">
                    <div className="storytext">
                      <h2 className="storyheading">{story.heading}</h2>
                      <div className="textbox">
                        <p className="storytexts">{story.para}</p>
                      </div>

                      <hr className="shr" />
                      <div className="rating">
                        <div className="rating__people">
                          <img src={story.img} alt="" />
                          <div className="ratinginfo">
                            <h6 className="ratingname">{story.name}</h6>
                            <p className="ratingrole">{story.position}</p>
                          </div>
                        </div>
                        <div className="star__rating">
                          <h3 className="spercentage">50%</h3>
                          <p className="scontent">
                            Reduction in time from raw data <br />
                            to insights on a dashboard{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div
                style={{
                  padding: "1.5rem",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="display__mobile">
        <div className="success__mob">
          <h2>Success Stories</h2>
        
          <div
            ref={containerRef2}
            className="mob__success__box__container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >

{successStories.map((story, index) => {
                return (
            <div className="success__mob__boxes">
              <div className="mob__box__content">
                <h4>
                  Positioning our brand by highlighting success stories that
                  back
                </h4>
                <p>
                {story.para}
                </p>
                <hr />

                <div className="mob__rating">
                  <div className="mob__perc">
                    <h4>50%</h4>
                  </div>
                  <div className="rating__content">
                    <p>
                      Reduction in time from raw data to insights on a dashboard
                    </p>
                  </div>
                </div>
                <hr />
                <div className="mob__success__profile">
                  <img src={story.img} alt="" />
                  <div className="ratinginfo">
                    <h6 className="ratingname">{story.name}</h6>
                    <p className="ratingrole">{story.position}</p>
                  </div>
                </div>
              </div>
            </div>
                );
            })}
          </div>

          <div className="snav__mob">
            <img src={Left} alt="" 
            onClick={scrollToLeftt}
            />
            <img src={Right} 
            onClick={scrollToRightt}
            alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
