// type Item = "🎅🏼" | "🎄";

type FindSantaInRow<Row extends Array<Item>, Visited extends boolean[] = []> = Row extends [
	infer Head extends Item,
	...infer Tail extends Array<Item>,
]
	? Head extends "🎅🏼"
		? Visited["length"]
		: FindSantaInRow<Tail, [...Visited, true]>
	: never;

type FindSanta2Dimension<Forest extends Array<Array<Item>>, Visited extends boolean[] = []> = Forest extends [
	infer Head extends Array<Item>,
	...infer Tail extends Array<Array<Item>>,
]
	? FindSantaInRow<Head> extends never
		? FindSanta2Dimension<Tail, [...Visited, true]>
		: [Visited["length"], FindSantaInRow<Head>]
	: never;
