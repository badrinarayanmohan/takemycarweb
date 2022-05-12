import Head from "next/head";
// import Image from "next/image";

import Lottie from "lottie-react";
import callSupportJSON from "/public/lottie/callSupport.json";
import carSafeJSON from "/public/lottie/carSafe.json";
import moneyJSON from "/public/lottie/money.json";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
  const aniData = [
    {
      heading: "100% Safe",
      description: "Assured safety",
      aniJson: carSafeJSON,
    },
    {
      heading: "Cheap",
      description: "Easy on your pockets",
      aniJson: moneyJSON,
    },
    {
      heading: "Power Support",
      description: "At your servie 24*7",
      aniJson: callSupportJSON,
    },
    {
      heading: "Cheap",
      description: "Easy on your pockets",
      aniJson: moneyJSON,
    },
  ];
  const responsiveDataCar = {
    pc: {
      breakpoint: {
        max: 999999,
        min: 801,
      },
      items: 3,
    },
    mobile: {
      breakpoint: {
        max: 800,
        min: 0,
      },
      items: 1,
    },
  };
  const presentation = [
    "/images/presentation/1.png",
    "/images/presentation/2.png",
    "/images/presentation/3.png",
    "/images/presentation/4.png",
    "/images/presentation/5.png",
    "/images/presentation/6.png",
    "/images/presentation/7.png",
    "/images/presentation/8.png",
    "/images/presentation/9.png",
    "/images/presentation/10.png",
    "/images/presentation/11.png",
    "/images/presentation/12.png",
  ];
  const homeHeadText = `India's first
  most derisked
  peer to peer
  car sharing
  platform & service.`;

  const aboutText = `TakeMyCar's founder's vision is to always bring software to
  everyone in the globe at very affordable prices. Having worked on
  his first firm where he built software for small to middle scale
  enterprises and sold software at one tenth the costs, similarly

  TakeMyCar's vision is to bring cars and its related software at a
  very cheap price.

  TakeMyCar was born when the founder himself had this problem and
  hence this company was formed.
  
  We offer luxury cars at a fraction of the local car rental
  companies.`;
  return (
    <div id="index">
      <Head>
        <title>TAKEMYCAR</title>
      </Head>
      <section id="home">
        <img src={"/images/layersss.png"} alt="" className="layers-img" />
        <div className="left-side">
          <h2>
            {homeHeadText.split("\n").map((text, ind) => {
              return (
                <span key={ind}>
                  {text}
                  <br />
                </span>
              );
            })}
          </h2>
          <p>App will launch on June 15, 2022.</p>
        </div>
        <div className="right-side">
          <img src={"/images/iphone.png"} alt="" />
        </div>
      </section>
      <section id="anis">
        <div className="ani-cards">
          {aniData.map((ani, index) => {
            return (
              <div className={"ani-div-" + index} key={index}>
                <Lottie
                  animationData={ani.aniJson}
                  className="lottie-ani"
                  autoplay
                  loop
                />
                <span className="head">{ani.heading}</span>
                <span className="desc">{ani.description}</span>
              </div>
            );
          })}
        </div>
      </section>
      <section id="about">
        <img src={"/images/layersss.png"} alt="" className="layer-img" />
        <div className="all-content">
          <div className="heading">
            <span>ABOUT US</span>
            <h2>We make sh*t happen</h2>
            <p>
              {aboutText.split("\n").map((text, ind) => {
                return (
                  <span key={ind}>
                    {text}
                    <br />
                  </span>
                );
              })}
            </p>
          </div>
        </div>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2500}
          keyBoardControl={true}
          pauseOnHover={true}
          responsive={responsiveDataCar}
          arrows={false}
          // customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-class"
          className="about-carousel"
        >
          <div>
            <img src="/images/presentation/1.png" alt="" />
          </div>
          <div>
            <img src="/images/presentation/2.png" alt="" />
          </div>
          <div>
            <img src="/images/presentation/3.png" alt="" />
          </div>
          {presentation.map((loc, ind) => {
            return (
              <div key={ind}>
                <img src={loc} alt={"presentation img-" + ind} />
              </div>
            );
          })}
        </Carousel>
      </section>
      <section id="team">
        <div className="ceo">
          <div className="left-side">Some text</div>
          <div className="right-side">
            <div className="img-container"></div>
            <span className="head">Badri</span>
            <span className="desg">Founder & CEO</span>
          </div>
        </div>
        <div className="full-team">
          <h2>All stars roster</h2>
          <p>Some Description</p>
          {/* {cards here} */}
        </div>
      </section>
      <section id="contact"></section>
    </div>
  );
}
