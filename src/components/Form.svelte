<script>
  import { userName } from '../store/stores'

  let firstName = '';
  let lastName = '';
  $: name = `${firstName} ${lastName}`

  const handleSubmit = (e) => {
    userName.update(n => n = name)
  }

</script>

<form on:submit|preventDefault={handleSubmit} class="mt-4">
  <input class="input" placeholder="First name" type="text" bind:value={firstName}>
  <input class="input" placeholder="Last name" type="text" bind:value={lastName}>
  <button type="submit" class="button">update name!</button>
</form>