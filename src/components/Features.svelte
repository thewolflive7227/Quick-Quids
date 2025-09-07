<!-- src/components/Features.svelte -->

<script lang="ts">
  // Icons ko library se import karein
  import FaBolt from 'svelte-icons/fa/FaBolt.svelte';
  import FaShieldAlt from 'svelte-icons/fa/FaShieldAlt.svelte';
  import FaHeadset from 'svelte-icons/fa/FaHeadset.svelte';
</script>

<div class="container my-5 py-5">
  <!-- Section Title -->
  <div class="row text-center mb-5">
    <div class="col">
      <h2 class="fw-bold">Your Dedicated Partner for Seamless Payments</h2>
      <p class="lead text-muted">
        We provide fast, secure, and reliable services to empower your business.
      </p>
    </div>
  </div>

  <!-- Feature Cards -->
  <div class="row">
    <!-- Card 1: Fast & Reliable -->
    <div class="col-md-4 mb-4">
      <div class="card text-center h-100 shadow-sm border-0">
        <div class="card-body p-4">
          <div class="text-primary mb-3" style="font-size: 3rem;">
            <FaBolt />
          </div>
          <h5 class="card-title fw-bold">Fast & Reliable BBPS</h5>
          <p class="card-text text-muted">
            Experience the highest success rates for all your bill payments with our robust platform.
          </p>
        </div>
      </div>
    </div>

    <!-- Card 2: Secure Platform -->
    <div class="col-md-4 mb-4">
      <div class="card text-center h-100 shadow-sm border-0">
        <div class="card-body p-4">
          <div class="text-primary mb-3" style="font-size: 3rem;">
            <FaShieldAlt />
          </div>
          <h5 class="card-title fw-bold">Secure Transactions</h5>
          <p class="card-text text-muted">
            Your security is our priority. All transactions are encrypted and processed securely.
          </p>
        </div>
      </div>
    </div>

    <!-- Card 3: 24x7 Support -->
    <div class="col-md-4 mb-4">
      <div class="card text-center h-100 shadow-sm border-0">
        <div class="card-body p-4">
          <div class="text-primary mb-3" style="font-size: 3rem;">
            <FaHeadset />
          </div>
          <h5 class="card-title fw-bold">24x7 Dedicated Support</h5>
          <p class="card-text text-muted">
            Our support team is always available to help you with any queries, anytime.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>