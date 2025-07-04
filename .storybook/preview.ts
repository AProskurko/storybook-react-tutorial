import type { Preview } from "@storybook/react-vite";

import { initialize, mswLoader } from "msw-storybook-addon";

import "../src/index.css";

// Registers the msw addon
initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
  loaders: [mswLoader],
};

export default preview;
