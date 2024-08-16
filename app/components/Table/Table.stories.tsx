import type { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  argTypes: {
    // size: {
    //   control: { type: "select" },
    //   options: ["S", "M", "L", "XL", "XXL"],
    // },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  //   args: {
  //     size: "S",
  //     label: "Default",
  //   },
};
