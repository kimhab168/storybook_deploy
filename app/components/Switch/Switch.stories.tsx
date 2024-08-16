import type { Meta, StoryObj } from "@storybook/react";
import Switch from "./Switch";
const btnSizes = ["sm", "md", "lg"];
const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    btnSize: {
      control: { type: "select" },
      options: btnSizes,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {},
};
