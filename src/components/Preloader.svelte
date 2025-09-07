<!-- src/components/Preloader.svelte -->

<script lang="ts">
  import { isLoading } from '$lib/stores/loadingStore';
</script>

{#if $isLoading}
  <div class="preloader-overlay">
    <img src="/favicon.png" alt="Loading..." class="spinner" />
  </div>
{/if}

<style>
  .preloader-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.9); /* White backdrop */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    backdrop-filter: blur(5px);
  }

  .spinner {
    width: 60px; /* Adjust size as needed */
    height: 60px;
    animation: spin 1.5s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>