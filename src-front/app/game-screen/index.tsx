import { useParams } from "react-router-dom";

export default function GameScreen() {
  const params = useParams();
  return (
    <div>
      <h2>Game Screen</h2>
      <pre>{JSON.stringify(params, null, "  ")}</pre>
    </div>
  );
}
