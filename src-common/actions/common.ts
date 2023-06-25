import type { EstablishmentList, Establishment } from "~common/types/index.js";

import { establishmentReference } from "~common/constants/buildings.js";

export const countTagsInEstablishments = (
	establishments: EstablishmentList,
	tag: Establishment["tag"]
): number => {
	let tagCount = 0;
	const establishmentsEntries = Object.entries(establishments);

	for (let n = 0; n < establishmentsEntries.length; n++) {
		const key = establishmentsEntries[n][0];
		const establishmentDetails = establishmentReference[key];
		if (establishmentDetails?.tag === tag) {
			const establishmentCounts = establishmentsEntries[n][1].length;
			tagCount += establishmentCounts;
		}
	}

	return tagCount;
};
