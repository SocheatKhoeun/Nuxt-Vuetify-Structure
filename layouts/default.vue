<template>
  <v-app>
    <!-- <v-app-bar> -->
      <!-- <UserNavbar /> -->
    <!-- </v-app-bar> -->
    <v-main>
      <transition name="fade" mode="out-in">
        <div :key="$route.fullPath">
          <slot />
        </div>
      </transition>
    </v-main>
    <!-- <v-footer app>
      <v-col class="text-center">© 2025 - User Portal</v-col>
    </v-footer> -->
  </v-app>
</template>
<script setup lang="ts">

</script>