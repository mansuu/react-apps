import React from "react";
import backgroundImage from "../assets/login.jpg";
import styled from "styled-components";

export default function BackgroundImage() {
  return (
    <Container>
      <img src={backgroundImage} alt="background" />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    width: 100vw;
    height: 100vh;
  }
`;
