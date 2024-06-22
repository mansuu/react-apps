import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import video from "../assets/video.mp4";

export default function Player() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft
            onClick={() => {
              navigate(-1);
            }}
          />
        </div>
        <video autoPlay controls loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .player {
    height: 100vh;
    width: 100vw;
    .back {
      position: absolute;
      z-index: 1;
      padding: 2rem;
      svg {
        font-size: 3rem;
      }
    }
    video {
      height: 100%;
      width: 100%;
    }
  }
`;
