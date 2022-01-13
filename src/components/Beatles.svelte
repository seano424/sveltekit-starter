<script>
  let beatles = [
    { name: 'Paul', id: 1, clicked: false },
    { name: 'John', id: 2, clicked: false },
    { name: 'Ringo', id: 3, clicked: false },
    { name: 'George', id: 4, clicked: false },
  ]

  const updatePeople = (id) => {
    const person = beatles.find(person => person.id == id)
    if(person.clicked == false) {
      let updatedBeatles = beatles.map(person => {
        if (person.id != id) {
          return person
        }
        return {
          ...person,
          clicked: !person.clicked
        }
      })
      beatles = updatedBeatles
    } else {
      beatles = beatles.filter(person => person.id != id)
    }
  }

  const handleUndo = (id) => {
    const beatle = beatles.find(beatle => beatle.id == id)
    if(beatle.clicked == true) {
      let updatedBeatles = beatles.map(person => {
        if (person.id != id) {
          return person
        }
        return {
          ...person,
          clicked: !person.clicked
        }
      })
      beatles = updatedBeatles
    } else {
      updatePeople(id)
    }
  }

</script>

<div class="mt-8">
  {#each beatles as beatle (beatle.name)}
    <div 
      on:click={() => updatePeople(beatle.id)}
      class="shadow cursor-pointer rounded my-2 py-2 px-10 flex justify-between items-center">
      <h2 
      class:beatle={beatle.clicked} 
      class="{beatle.clicked ? 'line-through' : 'text-purple-500'} text-3xl cursor-pointer font-black">{beatle.name}</h2>
      <button on:click|stopPropagation={() => handleUndo(beatle.id)} class="uppercase text-red-400 {!beatle.clicked && 'text-6xl'}">{beatle.clicked ? 'undo' : '-'}</button>
    </div>
  {:else}
    <h2>No People To Show</h2>
  {/each}
</div>