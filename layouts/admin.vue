<template>
  <v-app>
    <v-app-bar color="dark" dark>
      <v-toolbar-title>Admin Portal</v-toolbar-title>
      <v-spacer />
      <nuxt-link to="/admin">
        <v-btn text>Dashboard</v-btn>
      </nuxt-link>
      <nuxt-link to="/admin/settings">
        <v-btn text>Settings</v-btn>
      </nuxt-link>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
    <v-footer app>
      <v-col class="text-center">© 2025 - Admin Portal</v-col>
    </v-footer>
  </v-app>
</template>

<script>

</script>