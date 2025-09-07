<!-- src/components/Partners.svelte -->

<div class="bg-light py-5">
  <div class="container">
    <!-- Section Title -->
    <div class="row text-center mb-5">
      <div class="col">
        <h2 class="fw-bold">Powering Payments For Major Billers</h2>
        <p class="lead text-muted">We are integrated with India's leading service providers.</p>
      </div>
    </div>

    <!-- Partner Logos -->
    <div class="row align-items-center justify-content-center g-4">
      <!-- Logo 1 -->
      <div class="col-6 col-md-4 col-lg-2 text-center">
        <img
          src="https://www.logo.wine/a/logo/Paytm/Paytm-Logo.wine.svg"
          alt="Partner 1"
          class="partner-logo"
        />
      </div>
      <!-- Logo 2 -->
      <div class="col-6 col-md-4 col-lg-2 text-center">
        <img
          src="https://www.logo.wine/a/logo/Airtel/Airtel-Logo.wine.svg"
          alt="Partner 2"
          class="partner-logo"
        />
      </div>
      <!-- Logo 3 -->
      <div class="col-6 col-md-4 col-lg-2 text-center">
        <img
          src="https://www.logo.wine/a/logo/Vodafone_Idea_Limited/Vodafone_Idea_Limited-Logo.wine.svg"
          alt="Partner 3"
          class="partner-logo"
        />
      </div>
      <!-- Logo 4 -->
      <div class="col-6 col-md-4 col-lg-2 text-center">
        <img
          src="https://www.logo.wine/a/logo/Adani_Group/Adani_Group-Logo.wine.svg"
          alt="Partner 4"
          class="partner-logo"
        />
      </div>
      <!-- Logo 5 -->
      <div class="col-6 col-md-4 col-lg-2 text-center">
        <img
          src="https://www.logo.wine/a/logo/Tata_Power/Tata_Power-Logo.wine.svg"
          alt="Partner 5"
          class="partner-logo"
        />
      </div>
      <!-- Logo 6 -->
      <div class="col-6 col-md-4 col-lg-2 text-center">
        <img
          src="https://www.logo.wine/a/logo/Bharat_Petroleum/Bharat_Petroleum-Logo.wine.svg"
          alt="Partner 6"
          class="partner-logo"
        />
      </div>
    </div>
  </div>
</div>

<style>
  .partner-logo {
    max-height: 45px; /* Sabhi logos ki height same rakhega */
    filter: grayscale(100%);
    opacity: 0.6;
    transition: all 0.3s ease-in-out;
  }

  .partner-logo:hover {
    filter: grayscale(0%);
    opacity: 1;
    transform: scale(1.1);
  }
</style>