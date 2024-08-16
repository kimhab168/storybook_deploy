import type { Meta, StoryObj } from "@storybook/react";
import { http, HttpResponse, delay } from "msw"; // Using http and HttpResponse from msw
import Component from "./page";
import { mswLoader } from "msw-storybook-addon";

const meta: Meta<typeof Component> = {
  title: "Page",
  component: Component,
  loaders: [mswLoader],
};

export default meta;
type Story = StoryObj<typeof Component>;

// 👇 The mocked data that will be used in the story
const TestData = {
  user: {
    userID: 1,
    name: "Kimhab",
  },
  document: {
    id: 1,
    userID: 1,
    title: "Love Alone",
    brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "approved",
  },
};

export const MockedSuccess: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("https://your-restful-endpoint/", () => {
          return HttpResponse.json(TestData);
        }),
      ],
    },
  },
  loaders: [mswLoader],
};

export const MockedError: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("https://your-restful-endpoint/", async () => {
          await delay(800);
          return new HttpResponse(null, {
            status: 403,
          });
        }),
      ],
    },
  },
  loaders: [mswLoader],
};
