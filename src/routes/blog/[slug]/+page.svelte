<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  const { component, meta } = data;
</script>

<article class="md">
  <h1 class="sm:text-5xl text-4xl">{meta.title}</h1>
  <p>{new Date(meta.createdAt).toDateString()}</p>
  <div class="flex flex-wrap gap-3 my-3">
    {#each meta.tags as tag}
      <span class="bg-base-200 rounded-md px-2 py-1">{tag}</span>
    {/each}
  </div>

  <svelte:component this={component} />
</article>
