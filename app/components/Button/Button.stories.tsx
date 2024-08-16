import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["S", "M", "L", "XL", "XXL"],
    },
    color: {
      control: { type: "select" },
      options: ["bg-red-500", "bg-blue-500", "bg-yellow-500"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    size: "S",
    label: "Default",
  },
};
