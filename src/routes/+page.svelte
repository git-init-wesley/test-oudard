<script lang="ts">
  import { Accordion, AccordionItem, Button, Search, Spinner } from "flowbite-svelte";
  import type { Company } from "../lib/Company";
  import moment from "moment/moment";
  import { isAssociation, isMoralPerson } from "$lib/Company.js";
  import { base } from "$app/paths";
  import { Utils } from "$lib/Utils.js";

  const unknown = "UNKNOWN";
  let searchValue = "";
  let queryResult: Company[] | undefined = undefined;
  let isQuery = false;

  const onChange = () => {
    if (searchValue.length >= 3) {
      if (isQuery) return;
      isQuery = true;
      queryResult = undefined;
      fetch(encodeURI(`https://recherche-entreprises.api.gouv.fr/search?q=${searchValue}`))
        .then(async (value) => queryResult = (await value.json()).results)
        .finally(() => isQuery = false);
    }
  };
</script>

<div class="container mx-auto px-2 py-4 my-4 ">

  <div class="flex flex-row justify-start items-center">
    <img alt="Favicon" class="w-[52px] h-[52px]" src="{base}/favicon.png" />
    <div class="p-1">
      <h1 class="text-4xl">Welcome back, Nicolas OUDARD</h1>
      <h5 class="text-2xs text-gray-500 dark:text-gray-500 italic">This test was performed by Wesley LEVASSEUR.</h5>
    </div>
  </div>

  <form autocomplete="off" class="flex gap-2" on:submit|preventDefault={onChange}>
    <Search bind:value={searchValue} class="my-4" on:input={onChange} placeholder="Find a company...">
      <Button type="submit">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" />
        </svg>
      </Button>
    </Search>
  </form>

  {#if searchValue.length >= 3}

    {#if queryResult}

      {#if queryResult.length > 0}

        <Accordion
          activeClasses="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800"
          inactiveClasses="text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800">

          {#each queryResult as company}
            <AccordionItem>
              <span slot="header">{company.nom_complet} - SIREN: {company.siren}</span>

              <p class="mb-2">
                Name / Social reason: {company.nom_raison_sociale ?? unknown}
              </p>

              <p class="mb-2">
                SIREN: {company.siren ?? unknown}
              </p>

              <p class="mb-2">Association: {isAssociation(company) ? 'Yes' : 'No'}</p>

              <p class="mb-2">Seat address: {company.siege.adresse}</p>

              {#if company.dirigeants && company.dirigeants.length > 0}
                <p class="mb-2">
                  Leader{company.dirigeants.length > 1 ? 's' : ''}:
                  {#each company.dirigeants as leader}
                    {#if isMoralPerson(leader)}
                      <span class="mr-1">{leader.denomination ?? unknown} (SIREN: {leader.siren ?? unknown}),</span>
                    {:else}
                      <span class="mr-1">
                        {leader.prenoms ? Utils.capitalize(leader.prenoms) : unknown} {leader.nom?.toUpperCase() ?? unknown}
                        ,
                      </span>
                    {/if}
                  {/each}
                </p>
              {/if}

              <p class="mb-2">
                Last update: {company.date_mise_a_jour ? moment(company.date_mise_a_jour).fromNow() : unknown}
              </p>

              <p class="mb-2">
                Creation: {company.date_creation ?? unknown}
              </p>
            </AccordionItem>
          {/each}

        </Accordion>

      {:else}
        <p>No results, tried:</p>
        <ul>
          <li>- Full name</li>
          <li>- The demonination</li>
          <li>- Address</li>
          <li>- Leaders</li>
          <li>- Elected</li>
        </ul>
        <p>Or else the SIREN number</p>
      {/if}


    {:else}
      <Button disabled outline color="dark">
        <Spinner class="mr-3" size="4" />
        Loading ...
      </Button>
    {/if}


  {:else }
    <p>Minimum 3 characters</p>
  {/if}


</div>
