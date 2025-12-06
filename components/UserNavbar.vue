<template>
    <!-- <v-container app fixed class="d-flex justify-space-between align-center app-bar"> -->
        <v-app-bar app fixed class="d-flex justify-space-between align-center app-bar">
        <v-container fluid class="mx-2 mx-sm-2 mx-md-12 mx-lg-16">
            <v-row align="center" justify="space-between" class="d-flex" no-gutters>
                <!-- Left: Navigation Tabs -->
                <v-col class="d-none d-lg-flex align-center">
                    <v-tabs background-color="transparent" class="tab-items">
                        <v-tab
                            v-for="(item, index) in tabs"
                            :key="index"
                            :to="item.route"
                            class="custom-tab"
                            :class="{ 'active-tab': activeTab === item.route }"
                            @click="setActive(item.route)"
                        >
                            {{ item.label }}
                        </v-tab>
                    </v-tabs>
                </v-col>

                <!-- Right: Buttons -->
                <v-col v-if="isLoggedIn" cols="8" md="3" class="d-none d-md-flex text-right d-flex align-center justify-end gap-x-20">
                    <div>
                        <v-btn to="/auth">sign in</v-btn>
                        <v-btn to="/auth/sign-up">Sign Up</v-btn>
                    </div>
                </v-col>
                <v-col v-else cols="8" md="3" class="d-none d-md-flex text-right d-flex align-center justify-end gap-x-20">
                    <v-menu transition="scale-transition" offset-y>
                        <template #activator="{ props }" >
                            <v-avatar v-bind="props" class="cursor-pointer" size="40">
                                <v-img
                                    src="/female_profile.jpg"
                                    alt="Profile"
                                    contain
                                    class="rounded-full"
                                />
                            </v-avatar>
                        </template>
                        <!-- Updated dropdown: vertical layout, transparent, floating -->
                        <div style="display: flex; flex-direction: column; gap: 10px; background: transparent; position: fixed; top: 0; left: 50%; transform: translateX(-50%); z-index: 1000; margin-top: 20px; margin-right: 200px;">
                            <v-btn to="/auth">Explore</v-btn>
                            <v-btn to="/auth/sign-up">Upgrade Plan</v-btn>
                            <v-divider></v-divider>
                            <v-btn color="secondary" to="/auth/sign-up">Sign Out</v-btn>
                        </div>
                    </v-menu>

                </v-col>
            </v-row>
        </v-container>
    <!-- </v-container> -->
</v-app-bar>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { userAuth } from '~/store/userAuth';


/* ========== DATA ==========*/
const route = useRoute();
const router = useRouter();
const tabs = [
    { label: 'Home', route: '/' },
    { label: 'Contact', route: '/contact' },
    { label: 'About', route: '/about' },
];
const activeTab = ref(route.path);
const authStore = userAuth();

/* ========== COMPUTED ==========*/
const isLoggedIn = computed(() => {
    return authStore.isLoggedIn;
});

/* ========== WATCH ==========*/
watch(() => route.path, (newPath) => {
    activeTab.value = newPath;
});

/* ========== METHODS ==========*/
function setActive(tab: string) {
  if (activeTab.value === tab) return; // Prevent redundant navigation
  activeTab.value = tab;
  router.push(tab);
}

</script>

<style scoped>
.custom-tab {
    text-transform: none;
    font-size: 15px;
    font-weight: 400;
}

/* Active tab styling updated for consistency */
.active-tab {
    color: var(--v-primary);
    font-weight: bold;
    border-bottom: 2px solid;
}

.app-bar {
    background-color: var(--v-theme-primary);
    box-shadow: none;
    border-bottom: 1px solid #e0e0e0;
}

.logo {
    max-width: 100px;
}

.tab-items {
    padding: 0;
}

.gap-x-20 {
    gap: 15px;
}

/* Hide tabs on smaller screens */
@media (max-width: 960px) {
    .tab-items {
        display: none;
    }
}

/* Adjust button spacing for smaller screens */
@media screen and (max-width: 600px) {
    .gap-x-20 {
        gap: 5px;
    }
}
</style>
