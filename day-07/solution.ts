type AppendGood<T> = { [P in keyof T & string as `good_${P}`]: T[P]};
