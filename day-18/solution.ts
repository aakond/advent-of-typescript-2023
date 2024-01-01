type Count<
	Tuple extends string[],
	Item extends string,
	Counter extends number[] = [],
> = Tuple extends [infer Head extends string, ...infer Tail extends string[]]
	? Head extends Item
		? Count<Tail, Item, [...Counter, 1]>
		: Count<Tail, Item, Counter>
	: Counter["length"];
    