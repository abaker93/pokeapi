import { bug, dark, dragon, electric, fairy, fighting, fire, flying, ghost, grass, ground, ice, normal, poison, psychic, rock, steel, water, white } from "./colors";

export const gradientBug = {
	bug:			`${bug.alt} 0%, #B9D83B 50%, ${bug[500]} 100%`,
	dark:			`${bug[500]} 0%, ${dark[500]} 100%`,
	dragon:		`${bug[500]} 0%, ${dragon[500]} 100%`,
	electric:	`${bug[500]} 0%, ${electric[500]} 100%`,
	fairy:		`${bug[500]} 0%, ${fairy[500]} 100%`,
	fighting:	`${bug[500]} 0%, ${fighting[500]} 100%`,
	fire:			`${bug[500]} 0%, ${fire[500]} 100%`,
	flying:		`${bug[500]} 0%, #56CDB3 45%, #76CADB 55%, ${flying[500]} 100%`,
	ghost:		`${bug[500]} 0%, ${ghost[500]} 100%`,
	grass:		`${bug[500]} 0%, ${grass[500]} 100%`,
	ground:		`${bug[500]} 0%, ${ground[500]} 100%`,
	ice:			`${bug[500]} 0%, ${ice[500]} 100%`,
	normal:		`${bug[500]} 0%, ${normal[500]} 100%`,
	poison:		`${bug[500]} 0%, #CF8A3F 45%, #C95974 70%, ${poison[500]} 100%`,
	psychic:	`${bug[500]} 0%, ${psychic[500]} 100%`,
	rock:			`${bug[500]} 0%, ${rock[500]} 100%`,
	steel:		`${bug[500]} 0%, ${steel[500]} 100%`,
	water:		`${bug[500]} 0%, ${water[500]} 100%`,
}

export const gradientFire = {
	fire:		`${fire.alt} 0%, #FFAF4C 50%, ${fire[500]} 100%`,
	flying:	`${fire[500]} 0%, #E9B0C4 50%, ${flying[500]} 100%`,
}

export const gradientFlying = {
	bug:		`${flying[500]} 0%, #76CADB 45%, #56CDB3 55%, ${bug[500]} 100%`,
}

export const gradientGrass = {
	poison:	`${grass[500]} 0%, #62C099 33.33%, #6996CB 66.66%, ${poison[500]} 100%`,
}

export const gradientNormal = {
	flying:	`${normal[500]} 0%, #8CA3C0 50%, ${flying[500]} 100%`,
	normal:	`${normal.alt} 0%, #96A29E 50%, ${normal[500]} 100%`,
}

export const gradientPoison = {
	bug:		`${poison[500]} 0%, #C95974 45%, #CF8A3F 70%, ${bug[500]} 100%`,
}

export const gradientWater = {
	water:	`${water.alt} 0%, #55B0DD 50%, ${water[500]} 100%`,
}