// stories/RegistrationForm.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { http, HttpResponse, delay } from "msw";
import { RegistrationForm } from "../components/RegistrationForm";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { initialize, mswLoader } from "msw-storybook-addon";
initialize();
const meta: Meta<typeof RegistrationForm> = {
  component: RegistrationForm,
};

export default meta;

type Story = StoryObj<typeof RegistrationForm>;

const SuccessResponse = {
  message: "Registration successful",
};

const ErrorResponse = {
  error: "Registration failed. Please try again.",
};

export const MockedRegistrationSuccess: Story = {
  parameters: {
    msw: {
      handlers: [
        http.post("https://your-api-endpoint/register", () => {
          return HttpResponse.json(SuccessResponse);
        }),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Type into input fields
    await userEvent.type(canvas.getByLabelText(/email/i), "user@example.com");
    await userEvent.type(canvas.getByLabelText(/password/i), "password123");
    await userEvent.type(
      canvas.getByLabelText(/confirm password/i),
      "password123"
    );

    // Click the submit button
    await userEvent.click(canvas.getByRole("button", { name: /register/i }));

    // Await the visibility of the success message
    await expect(
      canvas.findByText(/registration successful/i)
    ).resolves.toBeVisible();
  },
};

export const MockedRegistrationError: Story = {
  parameters: {
    msw: {
      handlers: [
        http.post("https://your-api-endpoint/register", async () => {
          await delay(800); // Simulate network delay
          return new HttpResponse(null, {
            status: 400,
          });
        }),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Type into input fields
    await userEvent.type(canvas.getByLabelText(/email/i), "user@example.com");
    await userEvent.type(canvas.getByLabelText(/password/i), "password123");
    await userEvent.type(
      canvas.getByLabelText(/confirm password/i),
      "password123"
    );

    // Click the submit button
    await userEvent.click(canvas.getByRole("button", { name: /register/i }));

    // Await the visibility of the error message
    await expect(
      canvas.findByText(/registration failed/i)
    ).resolves.toBeVisible();
  },
};
