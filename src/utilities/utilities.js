import { defense } from "./data";

export const baseURL = "https://pokeapi.co/api/v2";

export const calcDefense = (def1, def2, off) => {
	let calc;
	let val;

	if (def2) {
		calc = defense[def1][off] * defense[def2][off];
	} else {
		calc = defense[def1][off];
	}

	calc === 0.5 ? (val = "½") : calc === 0.25 ? (val = "¼") : (val = calc);

	return val;
};

export const calcMeasurement = (num, type) => {
	let calc;

	switch (type) {
		case "in": {
			let meas = round2Decimal(num * 3.93701);
			let feet = Math.floor(meas / 12);
			let inches = Math.round(meas % 12);
			inches < 10
				? (inches = "0" + inches.toString())
				: (inches = inches.toString());

			calc = `${feet}' ${inches}"`;

			break;
		}
		case "cm":
			calc = `${round2Decimal(num * 10)} cm`;
			break;
		case "lbs":
			calc = `${round2Decimal(num * 0.220462)} lbs`;
			break;
		case "kg":
			calc = `${round2Decimal(num / 10)} kg`;
			break;
		default:
			console.log(`${type} is not a valid measurement type`);
	}

	return calc;
};

export const capitalize = (text) => {
	return text.toLowerCase().replace(/\b(\w)/g, (x) => x.toUpperCase());
};

export const formatDexId = (num) => {
	return num < 10
		? "000" + num.toString()
		: num < 100
		? "00" + num.toString()
		: num < 1000
		? "0" + num.toString()
		: num.toString();
};

export const getPokedexName = (dex) => {
	let dexInfo = {
		id: 0,
		name: "",
	};

	const lowercase = dex.toLowerCase().replace(/[^A-Z0-9]+/gi, "");

	switch (lowercase) {
		case "":
		case "0":
		case "1":
		case "national":
			dexInfo = { id: 1, name: "national" };
			break;
		case "2":
		case "kanto":
		case "originalkanto":
			dexInfo = { id: 2, name: "kanto" };
			break;
		case "3":
		case "johto":
		case "originaljohto":
			dexInfo = { id: 3, name: "johto" };
			break;
		case "4":
		case "hoenn":
		case "originalhoenn":
			dexInfo = { id: 4, name: "hoenn" };
			break;
		case "5":
		case "sinnoh":
		case "originalsinnoh":
			dexInfo = { id: 5, name: "sinnoh" };
			break;
		case "6":
		case "updatedsinnoh":
		case "extendedsinnoh":
			dexInfo = { id: 6, name: "extended Sinnoh" };
			break;
		case "7":
		case "updatedjohto":
		case "extendedjohto":
			dexInfo = { id: 7, name: "updated johto" };
			break;
		case "8":
		case "unova":
		case "originalunova":
			dexInfo = { id: 8, name: "unova" };
			break;
		case "9":
		case "updatedunova":
		case "extendedunova":
			dexInfo = { id: 9, name: "updated unova" };
			break;
		case "11":
		case "conquestgallery":
		case "originalconquestgallery":
			dexInfo = { id: 11, name: "conquest gallery" };
			break;
		case "12":
		case "kalos":
		case "kaloscentral":
		case "originalkalos":
		case "originalkaloscentral":
			dexInfo = { id: 12, name: "kalos (central)" };
			break;
		case "13":
		case "kaloscoastal":
		case "originalkaloscoastal":
			dexInfo = { id: 13, name: "kalos (coastal)" };
			break;
		case "14":
		case "kalosmountain":
		case "originalkalosmountain":
			dexInfo = { id: 14, name: "kalos (mountain)" };
			break;
		case "15":
		case "updatedhoenn":
		case "extendedhoenn":
			dexInfo = { id: 15, name: "updated hoenn" };
			break;
		case "16":
		case "alola":
		case "originalalola":
			dexInfo = { id: 16, name: "alola" };
			break;
		case "17":
		case "melemele":
		case "originalmelemele":
			dexInfo = { id: 17, name: "melemele" };
			break;
		case "18":
		case "akala":
		case "originalakala":
			dexInfo = { id: 18, name: "akala" };
			break;
		case "19":
		case "ulaula":
		case "originalulaula":
			dexInfo = { id: 19, name: "ulaula" };
			break;
		case "20":
		case "poni":
		case "originalponi":
			dexInfo = { id: 20, name: "poni" };
			break;
		case "21":
		case "updatedalola":
		case "extendedalola":
			dexInfo = { id: 21, name: "alola" };
			break;
		case "22":
		case "updatedmelemele":
		case "extendedmelemele":
			dexInfo = { id: 22, name: "melemele" };
			break;
		case "23":
		case "updatedakala":
		case "extendedakala":
			dexInfo = { id: 23, name: "akala" };
			break;
		case "24":
		case "updatedulaula":
		case "extendedulaula":
			dexInfo = { id: 24, name: "ulaula" };
			break;
		case "25":
		case "updatedponi":
		case "extendedponi":
			dexInfo = { id: 25, name: "poni" };
			break;
		case "26":
		case "letsgokanto":
		case "originalletsgokanto":
			dexInfo = { id: 26, name: "kanto (let's go)" };
			break;
		case "27":
		case "galar":
		case "originalgalar":
			dexInfo = { id: 27, name: "galar" };
			break;
		case "28":
		case "isleofarmor":
		case "originalisleofarmor":
		case "galarisleofarmor":
			dexInfo = { id: 28, name: "isle of armor" };
			break;
		case "29":
		case "crowntundra":
		case "originalcrowntundra":
		case "galarcrowntundra":
			dexInfo = { id: 29, name: "kanto (let's go)" };
			break;
		case "30":
		case "hisui":
		case "originalhisui":
			dexInfo = { id: 30, name: "hisui" };
			break;
		case "31":
		case "paldea":
		case "originalpaldea":
			dexInfo = { id: 31, name: "paldea" };
			break;
		case "32":
		case "tealmask":
		case "originaltealmask":
		case "paldeatealmask":
			dexInfo = { id: 32, name: "teal mask" };
			break;
		case "33":
		case "indigodisk":
		case "originalindigodisk":
		case "paldeaindigodisk":
			dexInfo = { id: 33, name: "indigo disk" };
			break;
			
		default:
			dexInfo = { id: 1, name: "national" };
			break;
	}

	return dexInfo;
};

export const lowerCaseDashes = (arr) => {
	if (arr) {
		let x = arr.toLowerCase();
		x = x.replace(/[^\w\d\s]/g, "");
		x = x.replace(/\s/g, "-");
		return x;
	} else { return null; }
};

export const lowerCaseNoSpaces = (arr) => {
	if (arr) {
		let x = arr.toLowerCase();
		x = x.replace(/\s/g, "");
		x = x.replace(/[^\w\d\s]/g, "");
		return x;
	} else { return null; }
};

export const normalize = (value) => {
	const min = 1;
	const max = 255;

	return ((value - min) * 100) / (max - min);
};

export const romanize = num => {
	if (isNaN(num)) {
		return null;
	}

	const digits = String(+num).split("");
	const key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM", "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC", "","I","II","III","IV","V","VI","VII","VIII","IX"];
	let roman = "";
	let i = 3;

	for (i > 0; i--;) {
		roman = (key[+digits.pop() + (i * 10)] || "") + roman;
	}

	return Array(+digits.join("") + 1).join("M") + roman;
}

export const round2Decimal = (num) => {
	return Math.round(num * 100) / 100;
};