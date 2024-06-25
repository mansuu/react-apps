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
  const [isLiked, setIsLiked] = useState(false);
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
              <div className="controls flex">
                <IoPlayCircleSharp
                  onClick={() => {
                    navigate("/player");
                  }}
                />
                <RiThumbUpFill title="Like" />
                <RiThumbDownFill title="Dislike" />
                {isLiked ? (
                  <BsCheck title="Remove from list" />
                ) : (
                  <AiOutlinePlus title="Add to my list" />
                )}
              </div>
              <div className="info">
                <BiChevronDown title="More info" />
              </div>
            </div>
            <div className="genres flex">
              <ul className="flex">
                {cardObject.genres.map((genre) => {
                  return <li key={genre}>{genre}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 230px;
  max-width: 230px;
  position: relative;
  cursor: pointer;
  img {
    height: 100%;
    width: 100%;
    border-radius: 0.2rem;
    z-index: 10;
  }
  .hover {
    z-index: 90;
    height: max-content;
    width: 20rem;
    position: absolute;
    top: -18vh;
    left: 0;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 10px 10px;
    background-color: #181818;
    transition: 0.3s ease-in-out;
    .image-video-container {
      height: 140px;
      position: relative;
      img {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        position: absolute;
        z-index: 4;
      }
      video {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        position: absolute;
        z-index: 5;
      }
    }
    .info-container {
      padding: 1rem;
      gap: 0.5rem;
    }
    .icons {
      .controls {
        gap: 1rem;
        display: flex;
      }
      svg {
        font-size: 2rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #b8b8b8;
        }
      }
    }
    .genres {
      ul {
        gap: 1rem;
        li {
          padding-right: 0.7rem;
          &:first-of-type {
            list-style-type: none;
          }
        }
      }
    }
  }
`;
