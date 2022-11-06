import Container from "@front/layout/container.js";
import TopBar from "../top-bar/index.js";

export default function Home() {
  return (
    <Container>
      <TopBar />
      <h1>Dice City</h1>
      <p>Based on Machi Koro</p>
    </Container>
  );
}
