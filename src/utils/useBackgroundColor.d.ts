import { Ref } from 'vue';

// Define the type for bgColor
export interface BackgroundColor {
  bgColor: Ref<string>;
}

// Export the function signature
export default function useBackgroundColor(): BackgroundColor;
