<script>
  import { modal } from '../store/stores'
  

  let firstName = 'Sean';
  let lastName = "O'Reilly"
  let fontColor = 'text-yellow-300'
  $: name = firstName + ' ' + lastName

  $: {
    console.log(people);
    console.log(fontColor);
  }
  let people = [
    { name: 'Paul', id: 1, clicked: false },
    { name: 'John', id: 2, clicked: false },
    { name: 'Ringo', id: 3, clicked: false },
    { name: 'George', id: 4, clicked: false },
  ]

  const handleClick = () => {
    modal.update(m => m = ! m)
  }

  const updatePeople = (id) => {
    const person = people.find(person => person.id == id)
    if(person.clicked == false) {
      let updatedBeatles = people.map(person => {
        if (person.id != id) {
          return person
        }
        return {
          ...person,
          clicked: !person.clicked
        }
      })
      people = updatedBeatles
    } else {
      people = people.filter(person => person.id != id)
    }
  }

</script>

<section class="container">
  <button on:click={handleClick} class="button text-5xl font-black cursor-pointer {fontColor}">Open Modal!</button>
  <form class="mt-4">
    <input type="text" bind:value={firstName} class="input">
    <input type="text" bind:value={lastName} class="input">
    <button type="submit" class="button">update name!</button>
  </form>

  <div class="mt-8">
    {#each people as person (person.name)}
      <h2 
      on:click={() => updatePeople(person.id)} 
      class:beatle={person.clicked} 
      class="{person.clicked ? 'line-through' : 'text-purple-500'} text-3xl cursor-pointer font-black">{person.name}</h2>
    {:else}
      <h2>No People To Show</h2>
    {/each}
  </div>
</section>
