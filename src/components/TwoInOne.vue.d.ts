// twoinone.vue.d.ts

// Import Vue from vue to provide typings for Vue components
import Vue from 'vue';

// Define a new interface that represents the props of the TwoInOne component
interface TwoInOneProps extends Vue {
  name: string;
  btnName: string;
}

// Define the module for the TwoInOne component
declare module 'TwoInOne.vue' {
  // Export the TwoInOneProps interface as the default export
  export default TwoInOneProps;
}
