<template>
  <nav :style="{ backgroundColor: bgColor }" class="bg-transparent justify-between items-center h-[100px] lg:px-60 relative hidden md:flex z-50">
    <div class="flex items-center">
      
      <span class="font-bold text-2xl text-white my-4" style="-webkit-text-stroke: 2px; -webkit-text-stroke-color: #000;">okCupid</span>
    </div>
    <div>
      <ul class="flex space-x-4 items-center">
        <span class="text-sm">Have an account?</span>
        <button @click="toggleSignIn"  class="py-2 px-3 border border-black hover:no-underline hover:text-black font-semibold ">Sign in</button>
      </ul>  
    </div>
  </nav>

  <div v-if="showSignInForm" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-90">
      <div class="bg-white rounded-lg p-11 max-w-xl relative">
        <button @click="toggleSignIn" class="absolute top-0 right-0 p-2">
          <svg class="w-6 h-6 text-gray-500 hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 class="text-2xl font-bold mb-4">Enter email and password</h3>
        <form @submit.prevent="signIn">
          <div class="mb-4">
            <label for="email" class="block text-gray-700 text-lg mb-2">Email</label>
            <input type="email" id="email" v-model="email" :placeholder="placeholderEmail" class="w-full px-3 py-2 border rounded-lg">
          </div>
          <div class="mb-6">
            <label for="password" class="block text-gray-700 text-lg mb-2">Password</label>
            <input type="password" id="password" v-model="password" :placeholder="placeholderPassword" class="w-full px-3 py-2 border rounded-lg">
          </div>
          <div class="flex justify-center items-center">
            <button type="submit" class="bg-gray-400 text-white font-bold py-3 px-4 rounded-sm w-full">NEXT</button>
          </div>
          <div class="flex flex-col items-center mt-2">
              <button type="button" class="text-blue-700 font-bold py-2 px-2 bg-transparent">FORGOT PASSWORD</button>
          </div>
          <div class="flex items-center justify-center mt-">
            <div class="border-t border-gray-300 flex-grow"></div>
            <div class="mx-4 text-gray-500">or</div>
            <div class="border-t border-gray-300 flex-grow"></div>
          </div>
          <div class="flex mt-3 justify-center items-center">
            <button type="submit" class="bg-blue-700 text-white font-bold py-3 px-4 rounded-sm w-full">LOGIN WITH PHONE</button>
          </div>
        </form>
      </div>
    </div>

</template>

<!-- <script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const showSignIn = ref(false);
const router = useRouter();

const toggleSignIn = () => {
  showSignIn.value = !showSignIn.value;
  router.push({ path: '/signin' });
};
</script> -->


<script>
export default {
  props: {
    bgColor: String
  },
  emits: ['toggleSignIn'],
  data() {
    return {
      showSignInForm: false,
      email: '',
      password: '',
      placeholderEmail: 'Email',
      placeholderPassword: 'Password'
      
    };
  },
  methods: {
    signIn() {
      // Implement your sign-in logic here
      console.log('Signing in...');
      // For demo, just closing the form
      this.showSignInForm = false;
    },
     toggleSignIn() {
      this.showSignInForm = !this.showSignInForm;
      this.$emit('toggleSignIn');
    }
  }
};

</script>

<style>
#transparentNavbar {
  background-color: transparent !important;
}
</style>
