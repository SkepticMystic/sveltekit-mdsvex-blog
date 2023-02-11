import type { BlogPost } from '$lib/interfaces/blog';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
    try {
        // Import the blog post from the directory above using the slug
        const post = await import(`../${params.slug}.md`);

        return {
            // Mdsvex returns a Svelte component as the default export
            component: post.default,
            meta: post.metadata as BlogPost['metadata']
        };
    } catch (err) {
        // If the blog post doesn't exist, throw a 404 error
        // This will be displayed in the browser
        throw error(404, 'Not found');
    }
}) satisfies PageLoad;
