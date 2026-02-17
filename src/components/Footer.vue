<template>
  <footer class="footer">
    <div class="foot-flex">
      <div class="contact-terms-address">
        <a href="#">Contact</a>
        <a href="#">Legal Terms</a>
        <a href="#">Address</a>
      </div>

      <div class="social-grid">
        <a href="#">
          <!-- <img src="@/assets/icons/instagram.png" alt="Instagram" /> -->
        </a>
        <a href="#">
          <!-- <img src="@/assets/icons/twitter.png" alt="Twitter" /> -->
        </a>
        <a href="#">
          <!-- <img src="@/assets/icons/youtube.png" alt="YouTube" /> -->
        </a>
      </div>
    </div>

    <div class="copyright">© 2026</div>
  </footer>
</template>

<script setup>
import "../style/reset.css";
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px 24px;
  background-color: #f5f5f5;
}

.foot-flex {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
}

.contact-terms-address {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-terms-address a {
  text-decoration: none;
  color: #222222;
  font-size: 14px;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.social-grid img {
  width: 24px;
  height: 24px;
}

.copyright {
  text-align: center;
  font-size: 14px;
  color: #555555;
}

/* responsive */
@media (max-width: 768px) {
  .foot-flex {
    flex-direction: column;
    align-items: flex-start;
  }

  .social-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}
</style>
