export interface IStateForm {
	name: string;
	message: string;
	image: File | null;
}

export interface IUpdateValue {
	(name: string, value: string | File | null): void;
}
