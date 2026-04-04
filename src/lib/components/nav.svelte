<script lang="ts">
  import {resolve} from '$app/paths'
  import Container from '$lib/components/container.svelte'
  import Logo from '$lib/components/logo.svelte'

  let dark = $state(true)
  $effect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') dark = true
    if (saved === 'light') dark = false
    document.documentElement.classList.toggle('dark', dark)
  })
  function toggleTheme() {
    dark = !dark
    localStorage.setItem('theme', dark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', dark)
  }
</script>

<nav>
  <Container class="flex items-center justify-between py-6">
    <a href={resolve('/')} class="flex items-center gap-3">
      <span class="h-24px w-24px">
        <Logo />
      </span>
    </a>
    <button onclick={toggleTheme} aria-label="Toggle dark mode">
      <span
        class="dark:i-tabler-moon i-tabler-sun h-24px w-24px dark:h-24px dark:w-24px text-neutral-900 dark:text-white"
      ></span>
    </button>
  </Container>
</nav>
