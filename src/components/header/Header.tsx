// Header.jsx

import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import profile from "../../assets/profilephoto.jpeg";

const Header = (): JSX.Element => {
  return (
    <>
      <main role="main">
        <div className="header-main-content">
          <h1>About me</h1>
          <section className="header-main-about-me">
            <p>
              I'm a{" "}
              <span className="highlight-text">Mechatronics Engineer</span> with
              a passion for coding. With{" "}
              <span className="highlight-text">over 5 years of experience</span>{" "}
              in Mechatronics Engineering, I've transitioned my focus towards
              coding.{" "}
              <span className="highlight-text">
                As a self-taught programmer
              </span>{" "}
              and a graduate of the ITESM{" "}
              <span className="highlight-text">coding bootcamp</span>, I've
              embarked on a journey fueled by curiosity and a penchant for
              experimentation with different coding concepts.
            </p>
            <div className="download-btn">
              {" "}
              <p>
                Resume&nbsp;
                <span className="material-symbols-sharp">download</span>
              </p>
            </div>
          </section>
        </div>
      </main>
      <header>
        <div className="header-info">
          <span>
            <img src={profile} alt="profile" />
          </span>
          <h2 className="">Alex Bahena</h2>
          <div className="header-education">
            <p>
              <i>Fullstack Web Developer</i>
            </p>
          </div>
          <div className="header-location">
            <p>
              <span className="material-symbols-sharp">location_on</span>
              &nbsp;Greater Toronto Area
            </p>
          </div>
          <div className="header-social">
            <ul>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} />{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faGithub} />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
