import Instructions from "../instructions/index.js";
import GameBrowser from "./game-browser.js";

export default function Home() {
	return (
		<div className="flex flex-row">
			<div className="flex flex-shrink-0 flex-grow flex-col items-center">
				<div className="max-w-prose">
					<h1>Dice City</h1>
					<p>Based on Machi Koro</p>
					<GameBrowser />
				</div>
			</div>
			<div className="flex flex-grow flex-col items-center">
				<Instructions showStory />
			</div>
		</div>
	);
}
