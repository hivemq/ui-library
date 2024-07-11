import type { Meta, StoryObj } from "@storybook/react";

import { Shell } from "@/lib";
import { FullDemo } from "./cookbook/FullDemo";

function Empty({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Demo",
  component: Empty,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

// @ts-ignore
export const Primary: Story = {
  name: "Full Interactive",
  decorators: [
    (Story, context) => {
      Object.assign(context.args, { control: undefined });

      return (
        <Story
          args={{
            children: (
              <Shell.Root>
                <FullDemo />
              </Shell.Root>
            ),
          }}
        />
      );
    },
  ],
};
