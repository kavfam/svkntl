export const load = async ({ fetch }) => {
	const url = `/.netlify/functions/getPosts`;
	const res = await fetch(url);
	const posts = await res.json();
	return {
		posts
	};
};

// export const load = async ({ fetch }) => {
// 	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// 	const allPosts = await res.json();
// 	const posts = allPosts.slice(0, 10);
// 	return {
// 		posts
// 	};
// };
