import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import mobileLogo from "../assets/landing_page/phone/logo.svg";
import mobileCaptured from "../assets/landing_page/phone/captured_man.png";
import mobileAnalysis from "../assets/landing_page/phone/analysis.svg";
import mobileDetails from "../assets/landing_page/phone/details.svg";
import mobileArrow from "../assets/landing_page/phone/bi_arrow.png";
import tabletAnalysis from "../assets/landing_page/tablet/analysis.svg";
import desktopCaptured from "../assets/landing_page/desktop/captured_man.png";
import desktopDetails from "../assets/landing_page/desktop/details.svg";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/auth");
  };

  const sizes = {
    mobileS: "280px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "2560px",
  };

  const device = {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(min-width: ${sizes.mobileL})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    desktop: `(min-width: ${sizes.desktop})`,
  };

  const Logo = styled.div`
    @media ${device.mobileS} {
      margin-left: 1rem;
      width: 38%;
      height: 2.5rem;
      background-image: url(${mobileLogo});
      /* background-repeat: no-repeat; */
    }

    @media ${device.mobileM} {
      background-image: url(${mobileLogo});
      background-repeat: no-repeat;
    }

    @media ${device.mobileL} {
      background-image: url(${mobileLogo});
      background-repeat: no-repeat;
    }

    @media ${device.tablet} {
      background-image: url(${mobileLogo});
      background-repeat: no-repeat;
    }
  `;

  const Hero = styled.div`
    @media ${device.mobileS} {
      max-width: 100%;
      height: 92vh;
    }

    @media ${device.mobileL} {
      max-width: 100%;
      height: 50vh;
    }

    @media ${device.laptop} {
      height: 93vh;
    }
  `;

  const Container = styled.div`
    @media ${device.laptop} {
      max-width: 100%;
      height: 40vh;
    }

    @media ${device.mobileS} {
      max-width: 100%;
      height: 93vh;
    }
  `;

  const Captured = styled.div`
    @media ${device.mobileS} {
      max-width: 100%;
      height: 35vh;
      background-image: url(${mobileCaptured});
      background-position: center;
      background-repeat: no-repeat;
    }

    @media ${device.mobileL} {
      max-width: 100%;
      height: 40vh;
      background-image: url(${desktopCaptured});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    @media ${device.laptop} {
      width: 45%;
      height: 93vh;
      background-image: url(${desktopCaptured});
      background-repeat: no-repeat;
      background-position: center;
    }
  `;

  const Analysis = styled.div`
    @media ${device.mobileS} {
      max-width: 80%;
      height: 10vh;
      margin: 0 auto;
      background-image: url(${mobileAnalysis});
      background-position: center;
      background-repeat: no-repeat;
    }

    @media ${device.mobileL} {
      max-width: 80%;
      height: 10vh;
      background-image: url(${mobileAnalysis});
      background-position: center;
      background-repeat: no-repeat;
    }

    /* @media ${device.tablet}{
            border: 1px solid grey;
        } */

    @media ${device.laptop} {
      width: 35%;
      height: 18vh;
      position: absolute;
      top: 0%;
      left: 33%;
      background-image: url(${tabletAnalysis});
      background-position: center;
      background-repeat: no-repeat;
    }
  `;

  const Details = styled.div`
    @media ${device.mobileS} {
      max-width: 100%;
      height: 40vh;
      background-image: url(${mobileDetails});
      background-position: center;
      background-repeat: no-repeat;
    }

    @media ${device.mobileL} {
      max-width: 85%;
      height: 28vh;
      margin: 0 auto;
      /* background-image: url(${mobileAnalysis});
            background-position: center;
            background-repeat: no-repeat; */
    }

    @media ${device.laptop} {
      position: absolute;
      width: 50%;
      height: 75vh;
      top: 15%;
      left: 45%;
      z-index: 10;
      background-image: url(${desktopDetails});
    }
  `;


  const Button = styled.button`
    @media ${device.mobileS} {
      position: absolute;
      top: 90%;
      left: 57%;
      width: 35%;
      height: 4.5vh;
      z-index: 10;
      background-color: #dd5928;
      color: white;
      border-radius: 8px;
      border: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    @media ${device.mobileM} {
      width: 30%;
      height: 5vh;
      position: absolute;
      top: 92%;
    }

    @media ${device.mobileL} {
      width: 25%;
      height: 5vh;
      position: absolute;
      top: 92%;
    }

    @media ${device.laptop} {
      width: 8%;
      height: 7vh;
      position: absolute;
      left: 75%;
      top: 90%;
      cursor: pointer;

      &:hover {
        background-color: #5f5b5b;
      }
    }
  `;

  return (
    <div>
      <Logo className="logo"></Logo>
      <Hero className="hero-section">
        <Container className="container">
          <Captured className="captured-man"></Captured>
          <Analysis className="analysis"></Analysis>
          <Details className="details"></Details>
        </Container>

        <Button className="button" onClick={handleClick}>
          Get started
          <img src={mobileArrow} alt="pointer" />
        </Button>
      </Hero>
    </div>
  );
};

export default LandingPage;
