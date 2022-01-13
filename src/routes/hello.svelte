<script>
import { each } from "svelte/internal";

  let firstName = 'Sean';
  let lastName = "O'Reilly"
  let fontColor = 'text-red-400'
  $: name = firstName + ' ' + lastName
  $: {
    console.log(name);
    console.log(fontColor);
  }
  let people = [
    { name: 'Paul' },
    { name: 'John' },
    { name: 'Ringo' },
    { name: 'George' },
  ]
</script>

<section class="container">
  <h2 class="text-5xl font-black {fontColor}">Hello {name}!</h2>
  <form>
    <input type="text" bind:value={firstName} class="input">
    <input type="text" bind:value={lastName} class="input">
    <button type="submit" class="button mt-4">update name!</button>
  </form>

  <div class="mt-8">
    {#each people as person (person.name)}
      <h2 class="text-3xl font-black text-purple-500">{person.name}</h2>
    {/each}
  </div>
</section>
