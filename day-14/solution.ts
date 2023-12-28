type DecipherNaughtyList<
	StringOfNames extends string,
	List extends string[] = [],
> = StringOfNames extends `${infer First}/${infer Others}`
	? First | DecipherNaughtyList<Others>
	: StringOfNames;
    