import type { Preview } from "@storybook/react";
import { mswDecorator, mswLoader } from "msw-storybook-addon";
import { initialize } from "msw-storybook-addon";
import "../app/globals.css";
initialize();
const preview: Preview = {
  tags: ["autodocs"],
  decorators: [mswDecorator], // Add MSW decorator
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader], // Add MSW loader
};

export default preview;
