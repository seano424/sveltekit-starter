<script>
  import '../app.css'
  import Header from 'components/Header.svelte'
  import Modal from 'components/Modal.svelte'
</script>

<Header />
<Modal/>
<main>
  <slot />
</main>
