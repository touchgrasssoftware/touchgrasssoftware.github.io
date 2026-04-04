<script lang="ts">
  import favicon from '$lib/assets/favicon.svg'
  import Footer from '$lib/components/footer.svelte'
  import Nav from '$lib/components/nav.svelte'
  import 'virtual:uno.css'

  let {children} = $props()
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@unocss/reset/tailwind.min.css"
  />
</svelte:head>

<div
  class="flex min-h-screen flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100"
>
  <Nav />
  <main class="flex-1">
    {@render children?.()}
  </main>
  <Footer />
</div>
