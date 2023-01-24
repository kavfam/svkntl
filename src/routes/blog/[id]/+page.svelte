<script>
	export let data;
	const { post } = data;
	import Seo from '$lib/Seo.svelte';
</script>

<div class="container">
	<h1>{post.title}</h1>
	<p>{post.body}</p>
	<a href="/blog">Return to Blog</a>
</div>

<Seo
	title="{post.title} | Business Frontpage"
	description={post.body.substring(0, 20)}
	type="BlogPosting"
/>
