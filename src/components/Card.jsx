import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import video from "../assets/video.mp4";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";

export default function Card({ cardObject }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <Container
      key={cardObject?.id}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${cardObject?.thumbnail}`}
        alt="movie-thumb"
      />
      {isHovered ? (
        <div className="hover">
          <div className="image-video-container">
            <img
              src={`https://image.tmdb.org/t/p/w500/${cardObject?.thumbnail}`}
              alt="movie-thumb"
              onClick={() => {
                navigate("/player");
              }}
            />
            <video
              autoPlay
              controls
              loop
              muted
              onClick={() => {
                navigate("/player");
              }}
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      ) : null}
      <div className="info-container flex column">
        <h3
          className="name"
          onClick={() => {
            navigate("/player");
          }}
        >
          {cardObject?.name}
        </h3>
        <div className="icons flex j-between">
          <div className="controls flex"></div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div``;
