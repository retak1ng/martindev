import { getCollection, render } from 'astro:content';
import type { BlogPost } from '../domain/types/blog';

export async function getPostsSorted(): Promise<BlogPost[]> {
	const posts = await getCollection('blog');
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getAllPosts(): Promise<BlogPost[]> {
	return getCollection('blog');
}

export async function renderPost(post: BlogPost) {
	return render(post);
}
