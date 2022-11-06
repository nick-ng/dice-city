import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Dice City</h1>
      <p>Based on Machi Koro</p>
      <p>
        <Link to="/dev">Element List</Link>
      </p>
    </div>
  );
}
