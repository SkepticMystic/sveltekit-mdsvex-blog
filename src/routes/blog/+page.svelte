<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1 class="text-3xl font-semibold my-3">Blog</h1>

<ul class="flex flex-wrap gap-7">
  {#each data.posts as { meta, path }}
    <li class="border shadow-md p-4 bg-base-100 rounded-md w-fit">
      <h2 class="text-2xl">
        <a href={path} class="link link-primary link-hover">
          {meta.title}
        </a>
      </h2>
      <p class="uppercase text-sm font-semibold">
        {new Date(meta.createdAt).toDateString()}
      </p>
      <div class="flex flex-wrap gap-x-2 gap-y-3">
        {#each meta.tags as tag}
          <span class="bg-base-200 rounded-md px-2 py-1 cursor-default"
            >#{tag}</span
          >
        {/each}
      </div>
    </li>
  {/each}
</ul>
