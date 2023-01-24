export const handler = async (event) => {
	let errorStatusCode = 500;
	//
	try {
		//connect

		// get data
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		const allPosts = await res.json();
		const posts = allPosts.slice(0, 10);

		return {
			statusCode: 200,
			body: JSON.stringify(posts)
		};
	} catch (error) {
		return { statusCode: 500, body: error.toString() };
	}
};

// export const load = async ({ fetch }) => {
// 	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// 	const allPosts = await res.json();
// 	const posts = allPosts.slice(0, 10);
// 	return {
// 		posts
// 	};
// };
