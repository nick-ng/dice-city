const animals = [
	"Bear",
	"Boar",
	"Butterfly",
	"Cat",
	"Crab",
	"Dog",
	"Dove",
	"Dragon",
	"Duck",
	"Elephant",
	"Flamingo",
	"Flounder",
	"Frog",
	"Gazelle",
	"Goat",
	"Goose",
	"Hare",
	"Hedgehog",
	"Heron",
	"Horse",
	"Human",
	"Kangaroo",
	"Kiwi",
	"Langur",
	"Lion",
	"Lobster",
	"Monkey",
	"Mouse",
	"Narwhal",
	"Octopus",
	"Otter",
	"Ox",
	"Penguin",
	"Pig",
	"Pigeon",
	"Rabbit",
	"Rooster",
	"Salmon",
	"Swan",
	"Seal",
	"Sheep",
	"Sloth",
	"Snake",
	"Tiger",
	"Toad",
	"Tortoise",
	"Trout",
	"Turtle",
	"Unicorn",
	"Walrus",
	"Weasel",
	"Whale",
	"Zebra",
];

const machines = ["Robot", "Locomotive", "Automobile"];

const plants = ["Cactus", "Sunflower", "Poppy", "Banana"];

const specificPeople = ["ChristopherNolan"];

const other = ["MonopolySet"];

export const allNouns = Object.freeze([
	...new Set([...animals, ...machines, ...plants, ...specificPeople, ...other]),
]);
