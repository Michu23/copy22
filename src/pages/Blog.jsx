import React, { useContext, useEffect, useState } from "react";
import Dot from "../assets/Ellipse.svg";
import { Link } from "react-router-dom";
import StateContext from "../context/StateContext";

import Image1 from "../assets/Blogs/Image1.png";
import Image2 from "../assets/Blogs/Image2.png";
import Image3 from "../assets/Blogs/Image3.png";
import Image4 from "../assets/Blogs/Image4.png";
import Image5 from "../assets/Blogs/Image5.png";
import Image6 from "../assets/Blogs/Image6.png";

const Blog = () => {

  const { activeTag, setActiveTag } = useContext(StateContext);

  useEffect(() => {
    console.log(activeTag);
  }, [])
  

  return (
    <div>
      <div className="blogs">
        <div className="display__desktop">
          <div className=" ch first">
            <div className="blog__heading__component">
              <h1>
                Looking to manage your
                <br />
                data more efficiently
              </h1>
              <p>
                The data pipeline divides each data stream into smaller chunks
                that it processes in parallel, conferring extra computing power.
              </p>
              <div className="gap"></div>
              <div className="gap"></div>
              <div className="gap"></div>
              <div className="">
                <div className="tags">
                  <div
                    className={
                      "tagsbox cp " + (activeTag === "all" ? "active" : "")
                    }
                    onClick={() => {
                      setActiveTag("all");
                    }}
                  >
                    <p>All</p>
                  </div>
                  <img src={Dot} alt="" />
                  <div
                    className={
                      "tagsbox cp " +
                      (activeTag === "engineering" ? "active" : "")
                    }
                    onClick={() => {
                      setActiveTag("engineering");
                    }}
                  >
                    <p>Engineering</p>
                  </div>
                  <img src={Dot} alt="" />
                  <div
                    className={
                      "tagsbox cp " +
                      (activeTag === "blockchain" ? "active" : "")
                    }
                    onClick={() => {
                      setActiveTag("blockchain");
                    }}
                  >
                    <p>Blockchain</p>
                  </div>
                  <img src={Dot} alt="" />
                  <div
                    className={
                      "tagsbox cp " +
                      (activeTag === "announcements" ? "active" : "")
                    }
                    onClick={() => {
                      setActiveTag("announcements");
                    }}
                  >
                    <p>Announcements</p>
                  </div>
                  <img src={Dot} alt="" />
                  <div
                    className={
                      "tagsbox cp " + (activeTag === "people" ? "active" : "")
                    }
                    onClick={() => {
                      setActiveTag("people");
                    }}
                  >
                    <p>People</p>
                  </div>
                  <img src={Dot} alt="" />
                  <div
                    className={
                      "tagsbox cp " + (activeTag === "nft" ? "active" : "")
                    }
                    onClick={() => {
                      setActiveTag("nft");
                    }}
                  >
                    <p>NFT</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="articles headings ch">
              <h1>All Articles</h1>
              <div className="articles__container">
                <div className="article__box">
                    <img src={Image1} alt="" /><div className="article__box__content">
                    <div className="article__top__header">
                    <div className="tag__box">
                        <p>

                        Engineering
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
