<script>
  import "../app.postcss";
  import { DarkMode, Footer, FooterBrand, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-svelte";
</script>

<style>

</style>

<div
  class="pb-16 overflow-y-auto h-[calc(100vh-175px)]
  scrollbar-thin
  scrollbar-thumb-rounded
  scrollbar-thumb-gray-900
  dark:scrollbar-thumb-gray-900
  scrollbar-track-gray-100
  dark:scrollbar-track-gray-700
  scrollbar-corner-blue-500
  dark:scrollbar-corner-blue-500
">
  <slot />
</div>

<div class="absolute right-0 bottom-0 p-2 z-50">
  <DarkMode />
</div>

<Footer class="absolute bottom-0 left-0 z-20 w-full h-[175px] border-t border-gray-100 dark:border-gray-700"
        footerType="logo">
  <div class="sm:flex sm:items-center sm:justify-between">
    <FooterBrand
      alt="Github avatar of KanekiReal"
      href="https://github.com/kanekireal"
      name="Wesley LEVASSEUR"
      src="https://avatars.githubusercontent.com/u/35704035?v=4"
    />
    <FooterLinkGroup ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
      <FooterLink href="https://github.com/kanekireal" target="_blank">GitHub</FooterLink>
      <FooterLink href="mailto:mailpro.levasseur@icloud.com">Contact</FooterLink>
    </FooterLinkGroup>
  </div>
  <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <FooterCopyright by="Wesley LEVASSEUR" href="https://github.com/kanekireal" />
</Footer>