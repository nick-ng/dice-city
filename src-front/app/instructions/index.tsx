import { replaceTags } from "../building/utils.js";

interface InstructionsProps {
	showStory?: boolean;
	narrow?: boolean;
}

export default function Instructions({ showStory, narrow }: InstructionsProps) {
	return (
		<div className={`${narrow ? "max-w-xs" : "max-w-prose"}`}>
			<details open>
				<summary className="text-xl">Instructions</summary>
				{showStory && (
					<p>
						You are the mayor of a city. Well, it's not much of a city right
						now. But you'll soon fix that. Collect money from your city's
						infrastructure and expand it all with the roll of a die.
					</p>
				)}
				<h2>Playing Dice City</h2>
				<p>
					The goal of Dice City is to build all of your Landmarks. To do so, on
					your turn you will:
				</p>
				<ul className="ml-4 list-outside list-disc">
					<li>Roll Dice</li>
					<li>Activate Establishments</li>
					<li>Build</li>
				</ul>
				<details open>
					<summary className="text-lg">Roll Dice</summary>
					<p>Begin your turn by rolling one die.</p>
					<p>
						Building landmarks can change the number of dice you can roll or
						even let you do other things when rolling the dice.
					</p>
				</details>
				<details open>
					<summary className="text-lg">Activate Establishments</summary>
					<p>
						Each establishments has one or more Activation Numbers in the
						coloured area at the top.
					</p>
					<p>
						If the dice total matches the activation number of an establishment,
						it activates. The game will perform instructions at the bottom of
						the establishment for you.
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
					<summary className="text-lg">Build</summary>
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
