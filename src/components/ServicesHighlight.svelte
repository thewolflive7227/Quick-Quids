<!-- src/components/ServicesHighlight.svelte -->

<script lang="ts">
  // Icons ko library se import karein
  import FaCheckCircle from 'svelte-icons/fa/FaCheckCircle.svelte';
</script>

<div class="container my-5 py-5">
  <div class="row align-items-center">
    <!-- Image Column -->
    <div class="col-md-6 mb-4 mb-md-0">
      <img
        src="https://res.cloudinary.com/dfcaqf2cp/image/upload/v1720448135/undraw_mobile_payments_re_7udl_daz2xw.svg"
        alt="Payment Solutions"
        class="img-fluid rounded"
      />
    </div>

    <!-- Content Column -->
    <div class="col-md-6">
      <h2 class="fw-bold">All Your Financial Tools, Under One Roof</h2>
      <p class="text-muted mb-4">
        Beyond collections, Quick-Quids offers a comprehensive suite of financial management
        services through our intuitive website and powerful mobile app.
      </p>

      <ul class="list-unstyled">
        <li class="d-flex align-items-start mb-3">
          <span class="text-primary me-3 mt-1" style="font-size: 1.2rem;">
            <FaCheckCircle />
          </span>
          <div>
            <h6 class="fw-bold mb-0">Effortless Collections</h6>
            <p class="text-muted small">
              Utilize your Quick-Quids ID to collect payments seamlessly from anywhere, anytime.
            </p>
          </div>
        </li>
        <li class="d-flex align-items-start mb-3">
          <span class="text-primary me-3 mt-1" style="font-size: 1.2rem;">
            <FaCheckCircle />
          </span>
          <div>
            <h6 class="fw-bold mb-0">Expense Management</h6>
            <p class="text-muted small">
              Track and manage all your business expenses on our platform for better financial
              oversight.
            </p>
          </div>
        </li>
        <li class="d-flex align-items-start">
          <span class="text-primary me-3 mt-1" style="font-size: 1.2rem;">
            <FaCheckCircle />
          </span>
          <div>
            <h6 class="fw-bold mb-0">Bill Payments & BBPS</h6>
            <p class="text-muted small">
              Pay your utility bills and access BBPS services conveniently through our app and
              website.
            </p>
          </div>
        </li>
      </ul>
      <a href="/services" class="btn btn-outline-primary mt-4">Learn More</a>
    </div>
  </div>
</div>