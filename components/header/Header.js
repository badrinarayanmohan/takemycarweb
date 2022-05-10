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
        <a href="/#home">Home</a>
        <a href="/#about">About</a>
        <a href="/#team">Team</a>
        <a href="/#contact">Contact</a>
      </nav>
      <div className="right-side">
        <a href="https://google.com" target="_blank">
          <AiFillLinkedin color={icon_color} className="no-mobile" />
        </a>
        <a href="https://google.com" target="_blank">
          <AiOutlineTwitter color={icon_color} className="no-mobile" />
        </a>
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
              <a href="/#home" aria-label="Home">
                Home
              </a>
            </li>
            <li
              onClick={() => {
                navi();
              }}
            >
              <a href="/#about" aria-label="About">
                About
              </a>
            </li>

            <li
              onClick={() => {
                navi();
              }}
            >
              <a href="/#team" aria-label="Team">
                Team
              </a>
            </li>

            <li
              onClick={() => {
                navi();
              }}
            >
              <a href="/#contact" aria-label="Contact us">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
