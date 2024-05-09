<template>
  <div v-if="showSignIn" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
    <div class="bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-xl font-bold mb-4">Sign In</h2>
      <div class="mb-4">
        <input v-model="email" type="email" placeholder="Email" class="border border-gray-400 px-4 py-2 w-full rounded">
      </div>
      <div class="mb-4">
        <input v-model="password" type="password" placeholder="Password" class="border border-gray-400 px-4 py-2 w-full rounded">
      </div>
      <button @click="signIn" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Sign In
      </button>
      <button @click="hide" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4">
        Cancel
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showSignIn = ref(false); // Define showSignIn as a ref
const email = ref('');
const password = ref('');

const hide = () => {
  showSignIn.value = false;
  email.value = '';
  password.value = '';
};

const signIn = () => {
  // Implement sign in logic here
  // For demonstration purposes, we'll just log the credentials
  console.log('Email:', email.value);
  console.log('Password:', password.value);
  hide();
};

const toggleSignIn = () => {
  showSignIn.value = !showSignIn.value;
};
</script>
