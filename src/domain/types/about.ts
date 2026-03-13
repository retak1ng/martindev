export interface Education {
	title: string;
	year: string;
	institution: string;
}

export interface Language {
	name: string;
	level: string;
}

export interface AboutData {
	bio: string;
	education: Education[];
	languages: Language[];
	hobbies: string[];
}
