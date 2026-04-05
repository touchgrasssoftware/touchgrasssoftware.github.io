<script lang="ts">
  import Container from '$lib/components/container.svelte'
  import clsx from 'clsx'

  const navItems = [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/touchgrasssoftware/',
      icon: 'i-tabler-brand-linkedin-filled',
    },
  ]
</script>

<footer>
  <Container
    class="px-4 py-16 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
  >
    <div class="flex justify-center space-x-6 md:order-2">
      {#each navItems as ni (ni.id)}
        <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
        <a href={ni.href} class="hover:text-neutral-900">
          <span class="sr-only">{ni.name}</span>
          <span
            class={clsx(
              ni.icon,
              'h-24px w-24px hover:bg-primary-600 dark:hover:bg-primary-400',
            )}
            aria-hidden="true"
          ></span>
        </a>
      {/each}
    </div>
    <div class="mt-8 md:order-1 md:mt-0">
      <p class="text-center text-base">
        &copy; {new Date().getFullYear()} Touch Grass Software. All rights reserved.
      </p>
    </div>
  </Container>
</footer>
