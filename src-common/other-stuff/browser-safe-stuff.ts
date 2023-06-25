const MAX_TURN_EVENTS = 20;

export const getPlayerOrderStartingFromPlayer = (
	playerIds: string[],
	startingPlayerId: string,
	includeStartingPlayer = false
): string[] => {
	const before: string[] = [];
	const after: string[] = [];
	let reachedPlayer = false;

	for (let i = 0; i < playerIds.length; i++) {
		if (playerIds[i] === startingPlayerId) {
			reachedPlayer = true;
			if (includeStartingPlayer) {
				after.push(playerIds[i]);
			}
		} else if (reachedPlayer) {
			after.push(playerIds[i]);
		} else {
			before.push(playerIds[i]);
		}
	}

	after.push(...before);

	return after;
};

export const trimTurnEvents = (
	turnEvents: any[],
	newTurnEvent?: string
): void => {
	if (newTurnEvent) {
		turnEvents.push(newTurnEvent);
	}

	const excess = turnEvents.length - MAX_TURN_EVENTS;

	if (excess > 0) {
		turnEvents.splice(0, excess);
	}
};
