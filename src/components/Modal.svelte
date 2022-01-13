<script>
  import { modal } from '../store/stores'
  let modal_value
  modal.subscribe(value => {
		modal_value = value;
	});

  const closeModal = () => {
    modal.update(m => m != m)
  }
  const modalClasses = [
    'shadow-2xl w-1/2 p-10 bg-fuchsia-500 bg-opacity-75 rounded',
    'flex flex-col gap-4 items-center'
  ]

  const backdropClasses = [
    'absolute inset-0 z-30 flex justify-center items-center',
    'bg-black bg-opacity-75'
  ]
</script>

{#if modal_value}
   <div on:click|self={closeModal} class="backdrop {backdropClasses.join(" ")}">
    <div class="modal {modalClasses.join(" ")}">
      <slot/>
       <slot name="zombie"/>
    </div> 
   </div>
{/if}