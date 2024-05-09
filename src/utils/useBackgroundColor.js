// useBackgroundColor.js

import { ref, onMounted } from 'vue';

export default function useBackgroundColor() {
  const colors = ['#f9dbff', '#c0dffb', 'fac4eb'];
  const currentIndex = ref(0);

  onMounted(() => {
    setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % colors.length;
    bgColor.value = colors[currentIndex.value];
}, 2000); 
      // Change color every 2 seconds (2000 milliseconds)
  });

  const bgColor = ref(colors[currentIndex.value]);

  return { bgColor };
}
