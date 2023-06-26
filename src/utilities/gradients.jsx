import { bug, dark, dragon, electric, fairy, fighting, fire, flying, ghost, grass, gray, ground, ice, normal, poison, psychic, rock, steel, text, water, white } from "./colors";

export const gradientBug = {
	bug:		`${bug.alt} 0%, #B9D83B 50%, ${bug[500]} 100%`,
	flying:	`${bug[500]} 0%, #56CDB3 45%, #76CADB 55%, ${flying[500]} 100%`,
	poison:	`${bug[500]} 0%, #CF8A3F 45%, #C95974 70%, ${poison[500]} 100%`,
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