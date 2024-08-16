import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    // size: {
    //   control: { type: "select" },
    //   options: ["S", "M", "L", "XL", "XXL"],
    // },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  // args: {
  //   size: "S",
  //   label: "Default",
  // },
};
