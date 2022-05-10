import Link from "next/link";

import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

export default function Header() {
  var icon_color = "white";
  function navi() {
    try {
      document.querySelector("#header .ham").classList.toggle("ham-clicked");
      document
        .querySelector("#header .nav-links")
        .classList.toggle("nav-active");
      document
        .querySelectorAll("#header .nav-links li")
        .forEach((link, index) => {
          if (link.style.animation) {
            link.style.animation = "";
          } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`;
          }
        });
      document.addEventListener("scroll", function elos() {
        document
          .querySelector("#header .nav-links")
          .classList.toggle("nav-active");
        document
          .querySelectorAll("#header .nav-links li")
          .forEach((link, index) => {
            if (link.style.animation) {
              link.style.animation = "";
            } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
              }s`;
            }
          });
        document.querySelector("#header .ham").classList.toggle("ham-clicked");
        document.removeEventListener("scroll", elos);
      });
    } catch {}
  }
  return (
    <div id="header">
      <div className="left-side">
        <h1>TAKEMYCAR</h1>
      </div>
      <nav className="center no-mobile">
        <Link href="/#home">Home</Link>
        <Link href="/#about">About</Link>
        <Link href="/#team">Team</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
      <div className="right-side">
        <Link href="https://google.com" target="_blank">
          <a>
            <AiFillLinkedin color={icon_color} className="no-mobile" />
          </a>
        </Link>
        <Link href="https://google.com" target="_blank">
          <a>
            <AiOutlineTwitter color={icon_color} className="no-mobile" />
          </a>
        </Link>
        <div
          className="ham no-pc"
          onClick={() => {
            navi();
          }}
        >
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
        <nav className="headNav no-pc">
          <ul className="nav-links">
            <li
              onClick={() => {
                navi();
              }}
            >
              <Link href="/#home" aria-label="Home">
                Home
              </Link>
            </li>
            <li
              onClick={() => {
                navi();
              }}
            >
              <Link href="/#about" aria-label="About">
                About
              </Link>
            </li>

            <li
              onClick={() => {
                navi();
              }}
            >
              <Link href="/#team" aria-label="Team">
                Team
              </Link>
            </li>

            <li
              onClick={() => {
                navi();
              }}
            >
              <Link href="/#contact" aria-label="Contact us">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
