<!-- src/components/Header.svelte (Updated with Login Button) -->

<script lang="ts">
  // Future logic can go here
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold fs-4" href="/">
      <img src="/logo.png" alt="Quick-Quids Logo" style="height: 40px;" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
        <li class="nav-item">
          <a class="nav-link" href="/services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/solutions">Solutions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/blog">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
      </ul>

      <!-- Action Buttons -->
      <div class="d-flex align-items-center ms-lg-3">
        <!-- NEW: Login Button -->
        <a
          href="https://login.quick-quids.com"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-outline-primary me-2"
        >
          Login
        </a>
        <!-- Register Button -->
        <a href="/register" class="btn btn-primary">Register Now</a>
      </div>
    </div>
  </div>
</nav>