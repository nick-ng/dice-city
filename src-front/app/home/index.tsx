import React from "react";

import Container from "src-front/layout/container";
import TopBar from "../top-bar";

export default function Home() {
  return (
    <Container>
      <TopBar />
      <h1>Dice City</h1>
      <p>Based on Machi Koro</p>
    </Container>
  );
}
