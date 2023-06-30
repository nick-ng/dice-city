import Instructions from "../instructions/index.js";
import GameBrowser from "./game-browser.js";

export default function Home() {
	return (
		<div className="flex flex-row">
			<div className="flex-shrink-0 flex-grow-0">
				<h1>Dice City</h1>
				<p>Based on Machi Koro</p>
				<GameBrowser />
			</div>
			<div className="flex flex-grow flex-col items-center">
				<Instructions showStory />
			</div>
		</div>
	);
}
