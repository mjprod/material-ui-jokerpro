import { Meta, StoryObj } from "@storybook/react";
import JokerButton, { ButtonType, ButtonSize } from "./JokerButton";
import accessibilityIcon from "../../stories/assets/accessibility.svg";

const meta: Meta<typeof JokerButton> = {
  title: "Components/JokerButton",
  component: JokerButton,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: Object.keys(ButtonType).map(
        (key) => ButtonType[key as keyof typeof ButtonType]
      ),
    },
    size: {
      control: { type: "select" },
      options: Object.keys(ButtonSize).map(
        (key) => ButtonSize[key as keyof typeof ButtonSize]
      ),
    },
    disabled: { control: "boolean" },
    animated: { control: "boolean" },
    highlighted: { control: "boolean" },
    equal: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof JokerButton>;

export const Default: Story = {
  args: {
    text: "Click Me",
    type: ButtonType.CTA,
    size: ButtonSize.Normal,
    disabled: false,
  },
};

export const Primary: Story = {
  args: {
    text: "Primary Button",
    type: ButtonType.Primary,
    size: ButtonSize.Normal,
  },
};

export const Secondary: Story = {
  args: {
    text: "Secondary Button",
    type: ButtonType.Secondary,
    size: ButtonSize.Normal,
  },
};

export const TextButton: Story = {
  args: {
    text: "Text Button",
    type: ButtonType.Text,
    size: ButtonSize.Small,
  },
};

export const LinkButton: Story = {
  args: {
    text: "Link Button",
    type: ButtonType.Link,
    href: "https://example.com",
    size: ButtonSize.Normal,
  },
};

export const DisabledButton: Story = {
  args: {
    text: "Disabled Button",
    type: ButtonType.CTA,
    disabled: true,
  },
};

export const AnimatedButton: Story = {
  args: {
    text: "Animated Button",
    type: ButtonType.CTA,
    animated: true,
  },
};

export const HighlightedButton: Story = {
  args: {
    text: "Highlighted Button",
    type: ButtonType.Link,
    highlighted: true,
  },
};

export const EqualWidthButton: Story = {
  args: {
    text: "Equal Width",
    type: ButtonType.Primary,
    equal: true,
  },
};

export const ButtonWithIcon: Story = {
  args: {
    text: "With Icon",
    type: ButtonType.Primary,
    icon: accessibilityIcon,
  },
};
