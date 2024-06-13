import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaPowerOff, FaSearch } from "react-icons/fa";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";

export default function Navbar({ isScrolled }) {
  const navbarOptions = [
    { name: "Home", path: "/" },
    { name: "TV Shows", path: "/tv" },
    { name: "Movies", path: "/movies" },
    { name: "My List", path: "/mylist" },
  ];
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [inputHovered, setInputHovered] = useState(false);
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) {
      navigate("/login");
    }
  });
  return (
    <Container>
      <nav className={`flex ${isScrolled ? "scrolled" : ""}`}>
        <div className="flex left a-center">
          <div className="brand a-center j-center">
            <img src={logo} alt="logo" />
          </div>
          <ul className="flex links">
            {navbarOptions?.map(({ name, path }) => {
              return (
                <li key={name}>
                  <Link to={path}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right flex a-center">
          <div className={`search flex ${showSearch ? "show-search" : ""}`}>
            <button
              onFocus={() => {
                setShowSearch(true);
              }}
              // onBlur={() => {
              //   setShowSearch(false);
              // }}
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search"
              onMouseEnter={() => {
                setInputHovered(true);
              }}
              onMouseLeave={() => {
                setInputHovered(false);
              }}
              onBlur={() => {
                setShowSearch(false);
                setInputHovered(false);
              }}
            />
          </div>
          <button
            onClick={() => {
              signOut(firebaseAuth);
            }}
          >
            <FaPowerOff />
          </button>
        </div>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  .scrolled {
    background-color: black;
  }
  nav {
    position: sticky;
    height: 6.5rem;
    top: 0;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    padding: 0 4rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    .left {
      gap: 2rem;
      .brand {
        img {
          height: 4rem;
        }
      }
      .links {
        list-style-type: none;
        gap: 2rem;
        li {
          a {
            text-decoration: none;
            color: white;
          }
        }
      }
    }
    .right {
      gap: 1rem;
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        &:focus {
          outline: none;
        }
        svg {
          color: #f34242;
          font-size: 1.2rem;
        }
      }
      .search {
        gap: 0.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.2rem;
        padding-left: 0.5rem;
        button {
          background-color: transparent;
          svg {
            color: white;
          }
        }
        input {
          width: 0;
          opacity: 0;
          visibility: hidden;
          transition: 0.3s ease-in-out;
          border: none;
          background-color: transparent;
          color: white;
          &:focus {
            outline: none;
          }
        }
      }
      .show-search {
        border: 1px solid white;
        background-color: rgba(0, 0, 0, 0.6);
        input {
          visibility: visible;
          width: 100%;
          opacity: 1;
          padding: 0.3rem;
        }
      }
    }
  }
`;
