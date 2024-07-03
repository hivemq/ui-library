import { ShellProvider } from "@/context/ShellContext";
import { ShellContainer } from "./Shell";

export const Shell = {
	Provider: ShellProvider,
	Container: ShellContainer,
};

export { type ShellContainerProps as ShellProps } from "./Shell";
