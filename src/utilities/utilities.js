import { defense } from "./data";

export const baseURL = 'https://pokeapi.co/api/v2';

export const calcDefense = (def1, def2, off) => {
	let calc;
	let val;

	if (def2) {
		calc = defense[def1][off] * defense[def2][off];
	} else {
		calc = defense[def1][off];
	}

	calc === 0.5
		? val = "½"
		: calc === 0.25
			? val = "¼"
			: val = calc;

	return (val)
};

export const calcMeasurement = (num, type) => {
	let calc;

	switch (type) {
		case "in": {
			let meas = round2Decimal(num * 3.93701);
			let feet = Math.floor(meas / 12);
			let inches = Math.round(meas % 12);
			inches < 10 ? inches = '0' + inches.toString() : inches = inches.toString();

			calc = (`${feet}' ${inches}"`)

			break;
		}
		case "cm":
			calc = (`${round2Decimal(num * 10)} cm`);
			break;
		case "lbs":
			calc = (`${round2Decimal(num * 0.220462)} lbs`);
			break;
		case "kg":
			calc = (`${round2Decimal(num / 10)} kg`);
			break;
		default:
			console.log(`${type} is not a valid measurement type`);
	}

	return calc;
}

export const capitalize = text => {
	return text.toLowerCase().replace(/\b(\w)/g, x => x.toUpperCase());
};

export const formatDexId = num => {
	return num < 10
		?	'000' + num.toString()
		: num < 100
			? '00' + num.toString()
			: num < 1000
				? '0' + num.toString()
				: num.toString();
};

export const normalize = (value) => {
	const min = 1;
	const max = 255;

	return ((value - min) * 100) / (max - min)
};

export const round2Decimal = num => {
	return Math.round(num * 100) / 100;
};