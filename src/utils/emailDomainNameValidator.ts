export const emailDomainNameValidator = (value: string) => {
	const start = value.indexOf("@") + 1;
	const end = value.lastIndexOf(".");

	const domain = value.slice(start, end);
	const nameAndDomain = value.slice(start);

	return nameAndDomain.length <= 255 ? domain.match(/[A-Za-z]/) : false;
};
