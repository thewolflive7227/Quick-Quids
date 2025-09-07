<!-- src/components/Hero.svelte (New File) -->

<script lang="ts">
  import { onMount } from 'svelte';

  // Import Swiper and its modules
  import Swiper from 'swiper';
  import { Autoplay, Pagination } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/pagination';

  onMount(() => {
    // This is Svelte's way to run code after the component loads
    const swiper = new Swiper('.swiper', {
      modules: [Autoplay, Pagination],
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });
</script>

<div class="swiper">
  <div class="swiper-wrapper">
    <!-- Slide 1: Main BBPS Service -->
    <div class="swiper-slide bg-light">
      <div class="container text-center d-flex flex-column justify-content-center align-items-center h-100">
        <h1 class="display-4 fw-bold">India's Most Reliable BBPS Service</h1>
        <p class="lead col-md-8">
          Seamlessly pay all your bills with the highest success rate and 24x7 dedicated support.
        </p>
        <a href="/contact" class="btn btn-primary btn-lg mt-3">Get Started</a>
      </div>
    </div>

    <!-- Slide 2: All-in-One Platform -->
    <div class="swiper-slide bg-light">
      <div class="container text-center d-flex flex-column justify-content-center align-items-center h-100">
        <h1 class="display-4 fw-bold">Your All-in-One Payment Platform</h1>
        <p class="lead col-md-8">
          From Money Transfer to Expense Management, handle all your business transactions in one place.
        </p>
        <a href="/services" class="btn btn-outline-primary btn-lg mt-3">Explore Services</a>
      </div>
    </div>

    <!-- Slide 3: For Businesses -->
    <div class="swiper-slide bg-light">
      <div class="container text-center d-flex flex-column justify-content-center align-items-center h-100">
        <h1 class="display-4 fw-bold">Empower Your Business Growth</h1>
        <p class="lead col-md-8">
          Join thousands of retailers who trust Quick-Quids for high commissions and reliable service.
        </p>
        <a href="/register" class="btn btn-primary btn-lg mt-3">Become a Partner</a>
      </div>
    </div>
  </div>
  <!-- Add Pagination -->
  <div class="swiper-pagination"></div>
</div>

<style>
  .swiper {
    width: 100%;
    height: 70vh; /* Adjust height as needed */
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* Custom Swiper pagination colors */
  :global(.swiper-pagination-bullet-active) {
    background-color: #0d6efd !important; /* Bootstrap primary color */
  }
</style>