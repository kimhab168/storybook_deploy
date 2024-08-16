import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";
import Input from "./Input";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Input> = {
  title: "input",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputTest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const Input = canvas.getByPlaceholderText("title...");
    await userEvent.type(Input, "example-email@email.com", {
      delay: 100,
    });
  },
};
