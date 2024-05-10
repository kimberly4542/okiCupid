<template>
  <div>
    <RouterView />
  </div>
  <TheFooter />

</template>

<script setup lang="ts">

import { RouterView} from 'vue-router';
import TheFooter from './components/TheFooter.vue'



// import TwoInOne from './components/TwoInOne.vue'

// const showSignIn = ref(false);
// const showSignInForm = ref(false);

// const toggleSignIn = () => {
//   showSignInForm.value = !showSignInForm.value;
// };

// const props = defineProps({
//   showSignInForm: Boolean,
// });

// const { toggleSignIn } = defineEmits(['toggleSignIn']);

// const showSignInForm = ref(false);

// const toggleSignIn = () => {
//   showSignInForm.value = !showSignInForm.value;
// };

</script>

<style>

</style>