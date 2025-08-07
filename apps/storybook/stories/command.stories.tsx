import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@repo/design-system/components/command";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * Fast, composable, unstyled command menu for React.
 */
const meta = {
	title: "ui/Command",
	component: Command,
	tags: ["autodocs"],
	argTypes: {},
	args: {
		className: "rounded-lg w-96 border shadow-md",
	},
	render: (args) => (
		<Command {...args}>
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading="Suggestions">
					<CommandItem>
						Calendar
						<CommandShortcut>⌘C</CommandShortcut>
					</CommandItem>
					<CommandItem>
						Search Emoji
						<CommandShortcut>⌘E</CommandShortcut>
					</CommandItem>
					<CommandItem>
						Calculator
						<CommandShortcut>⌘A</CommandShortcut>
					</CommandItem>
				</CommandGroup>
				<CommandSeparator />
				<CommandGroup heading="Settings">
					<CommandItem>
						Profile
						<CommandShortcut>⇧⌘P</CommandShortcut>
					</CommandItem>
					<CommandItem>
						Billing
						<CommandShortcut>⌘B</CommandShortcut>
					</CommandItem>
					<CommandItem>
						Settings
						<CommandShortcut>⌘S</CommandShortcut>
					</CommandItem>
				</CommandGroup>
			</CommandList>
		</Command>
	),
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Command>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the command.
 */
export const Default: Story = {};
