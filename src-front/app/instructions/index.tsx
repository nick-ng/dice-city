import { Link } from "react-router-dom";
import { replaceTags } from "../building/utils.js";

interface InstructionsProps {
	showStory?: boolean;
	open?: boolean;
}

export default function Instructions({ showStory, open }: InstructionsProps) {
	return (
		<div className={"max-w-prose text-sm xl:text-base"}>
			<details open={open}>
				<summary className="text-lg xl:text-xl">Instructions</summary>
				<Link to="/probability" target="_blank">
					Dice Roll Probabilities
				</Link>
				{showStory && (
					<p>
						You are the mayor of a city. Well, it's not much of a city right
						now. But you'll soon fix that. Collect money from your city's
						infrastructure and expand it all with the roll of a die.
					</p>
				)}
				<h2>Playing Dice City</h2>
				<p>
					The goal of Dice City is to build all of your Landmarks. On your turn
					you will do all of the following in order:
				</p>
				<ol className="ml-5 list-outside list-decimal">
					<li>Roll Dice</li>
					<li>Trigger Establishments</li>
					<li>Build</li>
				</ol>
				<details open>
					<summary className="text-base xl:text-lg">Roll Dice</summary>
					<p>Begin your turn by rolling one die.</p>
					<p>
						Building landmarks can change the number of dice you can roll or
						even let you do other things when rolling the dice.
					</p>
				</details>
				<details open>
					<summary className="text-base xl:text-lg">
						Trigger Establishments
					</summary>
					<p>
						Each establishments has one or more Activation Numbers in the
						coloured area at the top.
					</p>
					<p>
						If the dice total matches the activation number of an establishment,
						it gets triggered. The game will perform instructions at the bottom
						of the establishment for you.
					</p>
					<p>
						Some establishments require you to choose how they work. The game
						will prompt you if this is the case.
					</p>
					<p>
						If multiple establishments activate at the same time, they activate
						in the following order:
					</p>
					<ol className="ml-4 list-outside list-decimal">
						<li>Restaurants (Red)</li>
						<li>Primary Industry (Blue) and Secondary Industry (Green)</li>
						<li>Major Establishments (Purple)</li>
					</ol>
					<p>
						If an opponent doesn't have enough money to pay for your
						establishment, they pay as much as they can and the remaining money
						is exempt.
					</p>
					<p>
						Note that you pay for Restaurants (red establishments) before
						collecting money from other establishments.
					</p>
					<p>
						If you owe multiple players money, you pay them in reverse turn
						order.
					</p>
				</details>
				<details open>
					<summary className="text-base xl:text-lg">Build</summary>
					<p>
						After collecting and/or paying money, you may pay to build one
						Establishment OR pay to finish construction on one Landmark. The
						cost is shown in the yellow circle at the top right of the
						establishment/landmark.
					</p>
					<p>
						You can only construct one of each {replaceTags("%%major%")}{" "}
						establishments. That is, you can have as many unique{" "}
						{replaceTags("%%major%")} establishments as you want but you cannot
						have more than one of each.
					</p>
					<p>
						You can construct as many of each other kind of establishment as you
						can afford.
					</p>
				</details>
			</details>
		</div>
	);
}
