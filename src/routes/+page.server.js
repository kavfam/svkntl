export const load = async ({ fetch }) => {
	//
	const getPosts = async () => {
		// needs full url here
		const url = '/api/posts.json';
		const res = await fetch(url);
		const data = await res.json();
		// const filteredData = data.slice(0, 3);
		// return filteredData;
		return data;
	};
	return {
		posts: getPosts()
	};
};
