<template>
  <div class="home-container">
    <v-container fluid class="fill-height">
      <v-row justify="center" align="center" class="fill-height">
        <v-col cols="12" md="8" lg="6" class="text-center">
          <div class="welcome-content">
            <div class="logo-section mb-8">
              <v-icon size="120" color="primary">mdi-school</v-icon>
            </div>

            <h1 class="text-h2 font-weight-bold mb-4 text-primary">
              Welcome to UAS System
            </h1>

            <p class="text-h5 text-medium-emphasis mb-6">
              University Attendance System
            </p>

            <p class="text-body-1 mb-8 max-width-600 mx-auto">
              Streamline attendance management for students, lecturers, and administrators
              with our comprehensive digital solution. Access your dashboard, track attendance,
              and manage your academic activities efficiently.
            </p>

            <div class="action-buttons">
              <v-btn to="/auth/login" color="primary" size="large" class="mr-4 mb-4" prepend-icon="mdi-login">
                Sign In
              </v-btn>

              <v-btn to="/auth/register" variant="outlined" color="primary" size="large" class="mr-4 mb-4"
                prepend-icon="mdi-account-plus">
                Register
              </v-btn>

              <v-btn to="/admin/dashboard" variant="outlined" color="primary" size="large" class="mr-4 mb-4">
                Dashboard
              </v-btn>
            </div>

            <div class="features-grid mt-12">
              <v-row>
                <v-col cols="12" md="4">
                  <div class="feature-item pa-4">
                    <v-icon size="48" color="primary" class="mb-3">mdi-check-circle</v-icon>
                    <h3 class="text-h6 mb-2">Track Attendance</h3>
                    <p class="text-body-2 text-medium-emphasis">
                      Real-time attendance tracking for all your classes
                    </p>
                  </div>
                </v-col>

                <v-col cols="12" md="4">
                  <div class="feature-item pa-4">
                    <v-icon size="48" color="primary" class="mb-3">mdi-calendar-check</v-icon>
                    <h3 class="text-h6 mb-2">Manage Schedules</h3>
                    <p class="text-body-2 text-medium-emphasis">
                      View and organize your class schedules efficiently
                    </p>
                  </div>
                </v-col>

                <v-col cols="12" md="4">
                  <div class="feature-item pa-4">
                    <v-icon size="48" color="primary" class="mb-3">mdi-chart-line</v-icon>
                    <h3 class="text-h6 mb-2">Generate Reports</h3>
                    <p class="text-body-2 text-medium-emphasis">
                      Comprehensive reporting and analytics dashboard
                    </p>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
// Meta tags for SEO
// useHead({
//   title: 'Welcome - UAS System',
//   meta: [
//     { name: 'description', content: 'University Attendance System - Streamline attendance management for educational institutions' }
//   ]
// })

// Auto-redirect to dashboard for testing
// onMounted(async () => {
//   await navigateTo('/admin/dashboard')
// })

// Check if user is already authenticated and redirect
// const { checkAuth, isAuthenticated, userRole } = useAuth()

// onMounted(async () => {
//   const isAuth = await checkAuth()
//   if (isAuth && isAuthenticated.value) {
//     // Redirect based on user role
//     switch (userRole.value) {
//       case 'admin':
//         await navigateTo('/admin/dashboard')
//         break
//       case 'lecturer':
//         await navigateTo('/lecturer/dashboard')
//         break
//       case 'student':
//         await navigateTo('/student/dashboard')
//         break
//       default:
//         await navigateTo('/auth/login')
//     }
//   }
// })
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.welcome-content {
  max-width: 800px;
  margin: 0 auto;
}

.max-width-600 {
  max-width: 600px;
}

.feature-item {
  text-align: center;
  border-radius: 12px;
  transition: transform 0.2s ease-in-out;
}

.feature-item:hover {
  transform: translateY(-4px);
}

.action-buttons {
  margin-bottom: 2rem;
}

.features-grid {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

/* Button styling */
.v-btn {
  text-transform: none !important;
  font-weight: 600;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .text-h2 {
    font-size: 2rem !important;
  }

  .action-buttons .v-btn {
    display: block;
    width: 100%;
    margin: 0 0 1rem 0 !important;
  }
}
</style>