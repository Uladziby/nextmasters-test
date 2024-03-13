export const validationRegExp = {
	EMAIL:
		/^[A-Za-z0-9](?![A-Za-z0-9.!#$%&'*+\-/=?^_`{|}~]*[.!#$%&'*+\-/=?^_`{|}~][.!#$%&'*+\-/=?^_`{|}~]+)[A-Za-z0-9.!#$%&'*+\-/=?^_`{|}~]{0,62}[A-Za-z0-9!#$%&'*+\-/=?^_`{|}~]@([A-Za-z0-9]((?![A-Za-z0-9-]*[-.][-.]+)[A-Za-z0-9-]+\.){1,2})[a-z]{2,4}$/,
	ID: /^(?=.*[0-9])[a-zA-Z0-9]+$/,
	LOWERCASE_LETTERS: /[a-z]/,
	UPPERCASE_LETTERS: /[A-Z]/,
	SECURITY_QUESTION_AND_ANSWER: /^[A-Za-zА-Яа-я "#*+%\n]+$/,
	DIGITS: /[\d]/,
	NOT_DIGITS_GLOBAL: /[^\d]/g,
	PRINTABLE_CHARACTERS: /[!"$&'()*+,\-.:;=[\\\]^_`{|}~]/,
	PASSWORD_INVALID_CHARACTERS: /^[A-Za-z0-9!"$&'()*+,\-.:;=[\\\]^_`{|}~]+$/,
	NAME: /^[A-Za-zА-Яа-яёЁ '-]+$/,
	HYPHEN_AND_APOSTROPHE: /^[^-'].*[^-']$/,
	OTP_CODE: /^\d{0,6}$/,
};
