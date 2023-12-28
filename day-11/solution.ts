type SantaListProtector<T> = {
	readonly [Property in keyof T]: T[Property] extends Function
		? T[Property]
		: SantaListProtector<T[Property]>;
};
