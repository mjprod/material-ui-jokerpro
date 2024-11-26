import type { Preview } from "@storybook/react";
import '../src/joker_tokens.css';



const preview: Preview = {
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  
  tags: ['autodocs'],
  

};

export default preview;
