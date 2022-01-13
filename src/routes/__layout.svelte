<script>
  import '../app.css'
  import Header from 'components/Header.svelte'
  import Modal from 'components/Modal.svelte'
</script>

<Header />
<Modal>
  <h1 class="text-3xl uppercase text-white font-black z-50">Click Outside of Me to Get Out Of Here!</h1>
  <div class="text-7xl" slot="zombie">
    🧟
  </div>
</Modal>
<main>
  <slot />
</main>
