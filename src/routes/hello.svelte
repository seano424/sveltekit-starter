<script>
  import { modal, userName } from '../store/stores'
  import Beatles from '../components/Beatles.svelte'
  import Form from '../components/Form.svelte'
  let userName_value
  userName.subscribe(value => {
		userName_value = value;
	});

  let fontColor = 'text-yellow-300'
  
  const handleClick = () => {
    modal.update(m => m = ! m)
  }
  console.log(userName_value == ' ');

</script>

<section class="container">
  {#if userName_value != " " && userName_value !=  ""}
    <h1 class="text-xl font-black mb-8">Hello {userName_value}!</h1>
  {/if}
  <button on:click={handleClick} class="button text-5xl font-black cursor-pointer {fontColor}">Open Modal!</button>
  <Form />
  <Beatles />
</section>
