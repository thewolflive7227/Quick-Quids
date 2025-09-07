<!-- src/routes/+layout.svelte (Final Version with Preloader Logic) -->

<script lang="ts">
  import 'bootstrap/dist/css/bootstrap.min.css';
  import "../app.css";

  // SvelteKit's navigation events
  import { beforeNavigate, afterNavigate } from '$app/navigation';

  // Our global store and new component
  import { isLoading } from '$lib/stores/loadingStore';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import Preloader from '../components/Preloader.svelte';

  // Show preloader before the page changes
  beforeNavigate(() => {
    isLoading.set(true);
  });

  // Hide preloader after the page has loaded
  afterNavigate(() => {
    isLoading.set(false);
  });
</script>

<svelte:head>
  <link rel="icon" href="/favicon.png" />
</svelte:head>

<!-- The preloader will show/hide itself based on the store's value -->
<Preloader />

<Header />

<main>
  <slot />
</main>

<Footer />