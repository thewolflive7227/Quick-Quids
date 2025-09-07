<!-- src/components/Footer.svelte -->

<footer class="bg-dark text-white pt-5 pb-4">
  <div class="container text-center text-md-start">
    <div class="row text-center text-md-start">
      <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h5 class="text-uppercase mb-4 fw-bold text-primary">Quick-Quids</h5>
        <p>
          My Booking Technologies Pvt Ltd.
          Your Professional Partner for Smart Business Payments.
        </p>
      </div>

      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h5 class="text-uppercase mb-4 fw-bold">Services</h5>
        <p><a href="/services/bbps" class="text-white text-decoration-none">BBPS</a></p>
        <p><a href="/services/money-transfer" class="text-white text-decoration-none">Money Transfer</a></p>
      </div>

      <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
        <h5 class="text-uppercase mb-4 fw-bold">Company</h5>
        <p><a href="/about" class="text-white text-decoration-none">About Us</a></p>
        <p><a href="/contact" class="text-white text-decoration-none">Contact</a></p>
        <p><a href="/blog" class="text-white text-decoration-none">Blog</a></p>
      </div>

      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <h5 class="text-uppercase mb-4 fw-bold">Contact</h5>
        <p>Email: info@mybookingtechnologies.com</p>
        <p>Mobile: +91 94080-00012</p>
      </div>
    </div>

    <hr class="mb-4" />

    <div class="text-center">
      <p>&copy; {new Date().getFullYear()} My Booking Technologies Pvt Ltd. All Rights Reserved.</p>
    </div>
  </div>
</footer>