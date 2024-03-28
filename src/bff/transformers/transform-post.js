export const transformPost = (bdPost) => ({
	id: bdPost.id,
	title: bdPost.title,
	content: bdPost.content,
	imageUrl: bdPost.image_url,
	publishedAt: bdPost.published_at,
});
