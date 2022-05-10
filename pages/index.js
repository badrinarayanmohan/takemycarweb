import Head from "next/head";

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
  // const responsiveDataCar = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };

  const responsiveDataCar = {
    default: {
      breakpoint: { max: 999999, min: 0 },
      items: 3,
    },
  };
  return (
    <div id="index">
      <Head>
        <title>TAKEMYCAR</title>
      </Head>
      <section id="home">
        <img src={"/images/layersss.png"} alt="" className="layers-img" />
        <div className="left-side">
          <h2>Some great line here.</h2>
          <p>App will launch on so and so date.</p>
        </div>
        <div className="right-side">
          <img src={"/images/iphone-pic.webp"} alt="" />
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          pauseOnHover={false}
          responsive={responsiveDataCar}
          arrows={false}
          // customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="about-carousel"
        >
          <div>
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?fit=crop&format=jpg&crop=4560,2565,x790,y784,safe"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/5d37033a95e0230008f64eb2/2020-Aston-Martin-Rapide-E/0x0.jpg?fit=crop&format=jpg&crop=3000,1687,x0,y157,safe"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/5d37046395e0230008f64edf/2020-Ford-Mustang-Shelby-GT500/0x0.jpg?fit=crop&format=jpg&crop=2552,1437,x299,y201,safe"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/5d35eb4795e0230008f63724/2020-Tesla-Roadster/0x0.jpg?fit=crop&format=jpg&crop=3072,1728,x282,y157,safe"
              alt=""
            />
          </div>
        </Carousel>
      </section>
    </div>
  );
}
