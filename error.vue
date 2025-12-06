<template>
  <v-container fluid class="d-flex align-center justify-center h-screen">
    <v-row class="align-center justify-center" style="max-width: 1200px">
      <!-- Left Image Section -->
      <v-col
        cols="12"
        md="6"
        class="d-flex justify-center justify-md-end mb-8 mb-md-0"
      >
        <v-img src="/images/error-1.jpg" max-width="850" contain />
      </v-col>

      <!-- Right Text Section -->
      <v-col
        cols="12"
        md="6"
        class="d-flex flex-column align-center align-md-start text-center text-md-left"
      >
        <v-chip color="primary" variant="flat" class="mb-4 font-weight-bold">
          Page Not Found
        </v-chip>

        <h1 class="text-h3 text-md-h2 font-weight-bold mb-4">
          Oh No! Error 404
        </h1>

        <p class="text-body-1 text-medium-emphasis mb-2">
          Oops! The page you're looking for doesn't exist.
        </p>

        <p class="text-body-2 text-medium-emphasis mb-6">
          It might have been moved, deleted, or the URL could be incorrect.
        </p>

        <v-btn color="primary" to="/" size="large" rounded class="px-8">
          Go Home
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
defineProps({
  error: Object,
});
</script>

<style scoped>
.h-screen {
  min-height: 100vh;
}
</style>
