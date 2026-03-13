import type { SiteConfig } from '../domain/types/site';

const config: SiteConfig = {
	title: 'Mi Portfolio | Martín Rojas',
	description: 'Bienvenido a mi portfolio, donde podrás encontrar mis proyectos y habilidades como desarrollador web.',
	lang: 'es',
	navItems: [
		{ href: '', label: 'Inicio' },
		{ href: 'about', label: 'Sobre mi' },
		{ href: 'blog', label: 'Proyectos' },
		{ href: 'contact', label: 'Contacto' },
	],
	socialLinks: [
		{ href: 'https://linkedin.com/in/retak1ng', label: 'LinkedIn', icon: 'linkedin' },
		{ href: 'https://github.com/retak1ng', label: 'GitHub', icon: 'github' },
		{ href: 'https://instagram.com/martiin_rk', label: 'Instagram', icon: 'instagram' },
	],
};

export default config;

// Exportaciones individuales para compatibilidad con los archivos que las usan
export const SITE_TITLE = config.title;
export const SITE_DESCRIPTION = config.description;
