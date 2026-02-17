<script setup>
import "../style/reset.css";
const formLink = "https://forms.gle/ISI_LINK_KAMU";
</script>

<template>
  <section class="register-page">
    <div class="section-header">
      <h1>Langkah-langkah pendaftaran NCC 2026</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore.
      </p>
    </div>
    <!-- section content diisi gambar langkah langkah mendaftar lomba NCC 2026, dari mengisi form hingga pembayaran dan verifikasi -->
    <div class="section-content">
      <div class="content-image">
        <!-- <img src="@/assets/images/register.png" alt="Ilustrasi Pendaftaran" /> -->
      </div>

      <div class="content-text">
        <ul>
          <li>Mengisi formulir pendaftaran online</li>
          <li>Melengkapi data tim dan anggota</li>
          <li>Mengunggah dokumen yang dibutuhkan</li>
          <li>Menunggu verifikasi panitia</li>
        </ul>
      </div>
    </div>
    <div class="section-pdf-button">
      <p class="pdf-content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
        accusamus cumque beatae iste cum placeat odit ipsam provident aliquam?
        Laudantium eos libero tempore ab quisquam ratione asperiores eius
        repudiandae natus.
      </p>
    </div>
    <div class="section-action">
      <a :href="formLink" target="_blank" class="register-button">
        Daftar Sekarang
      </a>
    </div>
  </section>
</template>

<style scoped>
.register-page {
  padding: 64px 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-header h1 {
  margin-bottom: 16px;
}

.section-content {
  display: flex;
  gap: 40px;
  align-items: center;
  margin-bottom: 48px;
}

.content-image img {
  max-width: 100%;
  height: auto;
}

.content-text ul {
  padding-left: 20px;
}

.content-text li {
  margin-bottom: 12px;
}

.section-action {
  text-align: center;
}

.register-button {
  display: inline-block;
  padding: 14px 28px;
  background-color: #0056ff;
  color: #ffffff;
  text-decoration: none;
  border-radius: 6px;
}

/* responsive */
@media (max-width: 768px) {
  .section-content {
    flex-direction: column;
    text-align: center;
  }

  .content-text ul {
    padding-left: 0;
    list-style-position: inside;
  }
}
</style>
