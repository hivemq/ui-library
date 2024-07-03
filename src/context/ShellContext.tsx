import * as React from "react";

export type ShellProviderProps = {
	children: React.ReactNode;
	/**
	 * Define whenever the sidebar should be open by default
	 */
	isSidebarOpen?: boolean;
};

export type ShellProviderValue = {
	isSidebarOpen: boolean;
	setSidebarOpen: (value: boolean) => void;
	openedOverlayId?: string;
	setOpenedOverlayId?: (value: string | undefined) => void;
};

export const ShellContext = React.createContext<ShellProviderValue>({
	isSidebarOpen: false,
	setSidebarOpen: () => void 0,
	openedOverlayId: undefined,
	setOpenedOverlayId: () => void 0,
});

export function ShellProvider({
	children,
	isSidebarOpen: isSidebarOpenDefault = false,
}: ShellProviderProps) {
	const [isSidebarOpen, setSidebarOpen] =
		React.useState<boolean>(isSidebarOpenDefault);
	const [openedOverlayId, setOpenedOverlayId] = React.useState<
		string | undefined
	>(undefined);

	return (
		<ShellContext.Provider
			value={{
				isSidebarOpen,
				setSidebarOpen,
				openedOverlayId,
				setOpenedOverlayId,
			}}
		>
			{children}
		</ShellContext.Provider>
	);
}
