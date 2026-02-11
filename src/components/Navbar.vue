<template>
  <header class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="navbar-logo">
        <!-- <img src="/images/logo.png" alt="Logo" /> -->
      </router-link>

      <button class="hamburger" @click="toggleMenu">
        <span :class="{ active: isOpen }"></span>
        <span :class="{ active: isOpen }"></span>
        <span :class="{ active: isOpen }"></span>
      </button>

      <nav class="navbar-menu" :class="{ open: isOpen }">
        <router-link to="/about" class="nav-item" @click="closeMenu">
          Tentang
        </router-link>
        <router-link to="/timeline" class="nav-item" @click="closeMenu">
          Timeline
        </router-link>
        <router-link to="/information" class="nav-item" @click="closeMenu">
          Informasi
        </router-link>
        <router-link
          to="/register"
          class="nav-item nav-button"
          @click="closeMenu"
        >
          Pendaftaran
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function closeMenu() {
  isOpen.value = false;
}
</script>

<style scoped>
.navbar {
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #eaeaea;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.navbar-logo img {
  height: 40px;
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-item {
  text-decoration: none;
  color: #222222;
  font-weight: 500;
}

.nav-item.router-link-active {
  color: #0056ff;
}

.nav-button {
  padding: 8px 16px;
  background-color: #0056ff;
  color: #ffffff;
  border-radius: 6px;
}

/* hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger span {
  width: 24px;
  height: 2px;
  background-color: #222222;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

/* tablet & mobile */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .navbar-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    flex-direction: column;
    gap: 16px;
    background-color: #ffffff;
    padding: 0 24px;
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transition:
      max-height 0.35s ease,
      opacity 0.3s ease;
  }

  .navbar-menu.open {
    max-height: 300px;
    opacity: 1;
    padding-top: 16px;
    padding-bottom: 16px;
  }
}
</style>
