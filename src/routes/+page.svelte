<script lang="ts">
	import startups from '$lib/startups/startups.json';
</script>

<div class="container px-4 py-8 mx-auto">
	<h1 class="mb-6 text-3xl font-bold text-center">Kenyan Indie Hacker Startup Showcase</h1>
	<p class="mb-8 text-center text-gray-600">
		Discover innovative startups from Kenya's thriving indie hacker community
	</p>
	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each startups as startup}
			<div class="shadow-md card bg-base-100">
				{#if startup.imageUrl}
					<figure>
						<img src={startup.imageUrl} alt={startup.name} />
					</figure>
				{/if}
				<div class="card-body">
					<h2 class="card-title">{startup.name}</h2>
					<p>{startup.description}</p>
					<div class="justify-end card-actions">
						{#each startup.categories as category}
							<div class="badge badge-outline">{category}</div>
						{/each}
					</div>
					<div class="justify-end mt-2 card-actions">
						<a
							href={startup.website}
							target="_blank"
							rel="noopener noreferrer"
							class="btn btn-primary">Visit Website</a
						>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
