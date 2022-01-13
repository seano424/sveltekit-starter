<script>
  import { modal } from '../store/stores'
  let modal_value
  modal.subscribe(value => {
		modal_value = value;
	});

  const closeModal = () => {
    modal.update(m => m != m)
  }
</script>

{#if modal_value}
   <div on:click|self={closeModal} class="backdrop absolute inset-0 bg-black bg-opacity-75 z-30 flex justify-center items-center">
     <div class="modal shadow-2xl w-1/2 p-10 bg-fuchsia-500 bg-opacity-75 rounded">
       <h1 class="text-3xl uppercase text-white font-black z-50">Click Outside of Me to Get Out Of Here!</h1>
     </div>
   </div>
{/if}