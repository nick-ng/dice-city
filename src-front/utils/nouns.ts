const animals = [
	"Mouse",
	"Ox",
	"Tiger",
	"Rabbit",
	"Dragon",
	"Snake",
	"Horse",
	"Goat",
	"Monkey",
	"Rooster",
	"Dog",
	"Pig",
	"Cat",
	"Bear",
	"Penguin",
	"Sloth",
	"Hedgehog",
	"Sheep",
	"Hare",
	"Weasel",
	"Otter",
	"Heron",
	"Kiwi",
	"Kangaroo",
	"Dove",
	"Pigeon",
	"Sawn",
	"Goose",
	"Flamingo",
	"Walrus",
	"Seal",
	"Narwhal",
	"Lion",
	"Gazelle",
	"Human",
	"Salmon",
	"Frog",
	"Toad",
	"Trout",
	"Unicorn",
	"Duck",
	"Boar",
	"Tortoise",
	"Turtle",
	"Octopus",
	"Zebra",
	"Elephant",
	"Flounder",
	"Crab",
	"Lobster",
	"Butterfly",
];

const machines = ["Robot", "Locomotive", "Automobile"];

const plants = ["Cactus", "Sunflower"];

export const allNouns = Object.freeze([
	...new Set([...animals, ...machines, ...plants]),
]);
