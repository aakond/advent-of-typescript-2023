type Item = "🎅🏼" | "🎄";

type FindSanta<T extends Array<Item>, Visited extends boolean[] = []> = T extends [
	infer Head,
	...infer Tail extends Array<Item>,
]
	? Head extends "🎅🏼"
		? Visited["length"]
		: FindSanta<Tail, [...Visited, true]>
	: never;
    