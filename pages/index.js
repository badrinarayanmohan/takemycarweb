import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import Lottie from "lottie-react";
import callSupportJSON from "/public/lottie/callSupport.json";
import carSafeJSON from "/public/lottie/carSafe.json";
import moneyJSON from "/public/lottie/money.json";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Button, Form } from "react-bootstrap";
import { CheckSquareFill } from "react-bootstrap-icons";

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

  const aboutText = `TakeMyCar's founder's vision is to always bring software to everyone in the globe at very affordable prices. Having worked on his first firm where he built software for small to middle scale enterprises and sold software at one tenth the costs, similarly

  TakeMyCar's vision is to bring cars and its related software at a very cheap price.

  TakeMyCar was born when the founder himself had this problem and hence this company was formed.
  
  We offer luxury cars at a fraction of the local car rental companies.`;

  const ceoText = `Badri has a background in computer science and engineering and has a master's from Carnegie Mellon University with a minor in business. He is a serial entrepreneur having exited successfully in one company and also built platform for another. Post that he started TakeMyCar in 2022.`;

  const teamData = [
    {
      name: "Shriram",
      desg: "Lead Software Developer",
      img: "/images/team/shriram.png",
    },
    {
      name: "Anirudh",
      desg: "Senior Software Developer",
      img: "/images/team/emoji.png",
    },
    {
      name: "General Assembly",
      desg: "UI/UX Design",
      img: "/images/team/GA.jpg",
    },
    {
      name: "Gobind Singh",
      desg: "Website Developer",
      img: "/images/team/gobind.jpg",
    },
  ];

  var [NAME, setName] = useState("");
  const inputName = (inp) => {
    setName(inp.target.value);
  };
  var [EMAIL, setEmail] = useState("");
  const inputEmail = (inp) => {
    setEmail(inp.target.value);
  };
  var [PHONE, setPhone] = useState("");
  const inputPhone = (inp) => {
    setPhone(inp.target.value);
  };
  var [MSG, setMsg] = useState("");
  const inputMsg = (inp) => {
    setMsg(inp.target.value);
  };

  return (
    <div id="index">
      <Head>
        <title>TAKEMYCAR</title>
        <meta
          name="description"
          content="India's first peer to peer car rental platform"
        />
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
          <div className="left-side">{ceoText}</div>
          <div className="right-side">
            <div className="img-container">
              <Image
                layout="fill"
                src="/images/team/badri.jpg"
                alt="Badri takemycar ceo"
                objectFit="cover"
              />
            </div>
            <span className="head">BADRI NARAYAN</span>
            <span className="desg">Founder & CEO</span>
          </div>
        </div>
        <div className="full-team">
          <h2>All stars roster</h2>
          <p>The perfect team</p>
          <div className="cards">
            {teamData.map((per, ind) => {
              return (
                <div className={"member card-" + ind} key={ind}>
                  <div className="img-container">
                    <Image src={per.img} layout="fill" objectFit="cover" />
                  </div>
                  <span className="name">{per.name}</span>
                  <br />
                  <span className="desg">{per.desg}</span>
                </div>
              );
            })}
          </div>
        </div>
        <img src={"/images/layersss.png"} alt="" className="layer-img" />
      </section>
      <section id="contact">
        <h2>Contact us</h2>
        <div className="contact-data">
          <div className="left-side BookContact">
            <span>+91 94449 85805</span>
            <br />
            <span>contact@takemycar.us</span>
          </div>
          <div className="rule"></div>
          <div className="BookForm">
            <Form>
              <Form.Group className="name mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Please enter your full name."
                  onChange={inputName}
                  value={NAME}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="email mb-3">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Please enter your e-mail address."
                  onChange={inputEmail}
                  value={EMAIL}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="phone mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Please enter your phone number."
                  onChange={inputPhone}
                  value={PHONE}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="message mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  type="message"
                  as="textarea"
                  rows={10}
                  placeholder="Please type your message."
                  onChange={inputMsg}
                  value={MSG}
                ></Form.Control>
              </Form.Group>
              <Button
                variant="light"
                onClick={() => {
                  // call function subClick()
                  console.log(NAME);
                  console.log(EMAIL);
                  console.log(PHONE);
                  console.log(MSG);
                  alert("Submitted");
                  setName("");
                  setEmail("");
                  setPhone("");
                  setMsg("");
                }}
              >
                <span> Submit</span> <CheckSquareFill />
              </Button>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
}
