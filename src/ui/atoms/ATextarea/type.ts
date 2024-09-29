export interface IATextarea {
	placeholder: string;
	label?: string;
	hasError?: boolean;
	isDisabled?: boolean;
	name: string;
	defaultValue?: string;
	maxLength?: number;
	rows?: number;
}
