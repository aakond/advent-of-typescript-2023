type DayCounter<
	Start extends number,
	End extends number,
	Dates extends number[] = [],
> = End extends Dates["length"]
	? Dates[number] | End
	: DayCounter<Start, End, [...Dates, Dates["length"] extends 0 ? never : Dates["length"]]>;
    