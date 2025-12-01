import type { Meta, StoryObj } from "@storybook/react-vite";
import { SidebarMenu } from "../components/SidebarMenu/SidebarMenu";
import { MenuItem } from "../components/SidebarMenu/MenuItem";

const meta: Meta<typeof SidebarMenu> = {
  title: "Example/SidebarMenu",
  component: SidebarMenu,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    
  },
  args: {},
} satisfies Meta<typeof SidebarMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SidebarMenuIsOpen: Story = {
  args: {
    isOpen: true,
    toggleOpen: (isOpen: boolean) => {
      console.log(isOpen);
    },
  },
};

export const SidebarMenuIsClose: Story = {
  args: {
    isOpen: false,
    toggleOpen: (isOpen: boolean) => {
      console.log(isOpen);
    },
  },
};

export const SidebarMenuWithCildren: Story = {
  args: {
    isOpen: true,
    toggleOpen: () => {},
    children: (
      <>
        <MenuItem lable="Shop" />
        <MenuItem lable="Pages">
          <MenuItem lable="Page 1" />
          <MenuItem lable="Page 2" />
        </MenuItem>
      </>
    ),
  },
};
