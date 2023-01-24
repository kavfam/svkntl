<script>
	import What from '$lib/What.svelte';
	import Seo from '$lib/Seo.svelte';

	export let data;
	// console.log(data);
	const { posts } = data;
</script>

<What />

<div class="container">
	<div class="grid">
		{#each posts as { id, title, image, body }}
			<div>
				<h2>{title.substring(0, 20)}</h2>
				<img src={image} alt={title} />
				<p>{body.substring(0, 80)}</p>
			</div>
		{/each}
	</div>
</div>

<Seo title="About | Business Frontpage" description="test descr" type="WebPage" />

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2em;
		padding: 2em 0;
	}
	img {
		height: 300px;
		width: 100%;
		object-fit: cover;
		object-position: center;
	}
</style>
