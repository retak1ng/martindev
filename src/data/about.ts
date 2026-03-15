import type { AboutData } from '../domain/types/about';

const about: AboutData = {
	bio: `¡Hola! mi nombre es Martín Rojas, tengo 25 años y soy de Argentina.
Soy un desarrollador de software apasionado por el desarrollo full-stack.

Actualmente estoy estudiando Ingeniería en Computación, donde he adquirido
una base sólida en programación, bases de datos y manejo de archivos.

Por mi parte, he profundizado en tecnologías web como HTML, CSS, JavaScript
y diversos frameworks como .NET, Angular y Astro.

Mi GitHub incluye varios proyectos personales que demuestran mis habilidades
para construir aplicaciones web. Exploro constantemente nuevas tecnologías
y recursos para crear aplicaciones fluidas y escalables.`,
	education: [
		{
			title: 'Ingeniería En Computación',
			year: '2022 - En Curso',
			institution: 'Universidad Nacional de La Plata',
		},
		{
			title: 'Desarrollo de Aplicaciones en Angular 19 y ASP.NET Core 9',
			year: '2025',
			institution: 'Udemy',
		},
		{
			title: 'Back End Development and APIs',
			year: '2025',
			institution: 'freeCodeCamp',
		},
		{
			title: 'Fundamentos del desarrollo web: Full Stack',
			year: '2022',
			institution: 'Linkedin LEARNING',
		},
		{
			title: 'JavaScript avanzado: Buenas prácticas',
			year: '2022',
			institution: 'Linkedin LEARNING',
		},
	],
	languages: [
		{ name: 'Español', level: 'Nativo' },
		{ name: 'Inglés', level: 'Técnico' },
	],
	hobbies: ['Futbol', 'Videojuegos', 'Musica'],
};

export default about;
