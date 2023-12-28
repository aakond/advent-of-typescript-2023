type BoxToys<Toy extends string, Count extends number, Box extends string[] = []> =
	Count extends Box['length']
		? Box
		: BoxToys<Toy, Count, [Toy, ...Box]>
        