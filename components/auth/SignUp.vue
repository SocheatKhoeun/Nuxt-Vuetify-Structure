<template>
    <v-container>
        <v-row>
        <v-col cols="12" md="6" offset-md="3">
            <v-card>
            <v-card-title>
                <h3>Sign Up</h3>
            </v-card-title>
            <v-card-text>
                <v-form>
                <v-text-field
                    v-model="email"
                    label="Email"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="password"
                    label="Password"
                    required
                    type="password"
                ></v-text-field>
                <v-btn
                    color="#4667E5"
                    @click="signUp"
                >
                    Sign Up
                </v-btn>
                </v-form>
            </v-card-text>
            </v-card>
        </v-col>
        </v-row>
    </v-container>
</template>

<script setup> 

</script>