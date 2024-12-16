export const thousandSeparator = (value: number) => {
	const options: Intl.NumberFormatOptions = {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	};

	return new Intl.NumberFormat("en-US", options).format(value);
};
