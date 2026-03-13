export interface NavItem {
	href: string;
	label: string;
}

export interface SocialLink {
	href: string;
	label: string;
	icon: 'linkedin' | 'github' | 'instagram';
}

export interface SiteConfig {
	title: string;
	description: string;
	lang: string;
	navItems: NavItem[];
	socialLinks: SocialLink[];
}
