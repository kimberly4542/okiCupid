// footer.vue.d.ts
import { DefineComponent } from 'vue';

interface CollapsedSections {
  first: boolean;
  second: boolean;
  third: boolean;
  fourth: boolean;
  fifth: boolean;
  sixth: boolean;
}

// Define the type of the component
declare const Footer: DefineComponent<{}, {
  collapsed: CollapsedSections;
}, {
  toggleCollapse(section: keyof CollapsedSections): void;
}>;

// Export the component type
export default Footer;
