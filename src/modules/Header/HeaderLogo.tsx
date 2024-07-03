import { Box, type BoxProps, Image, Text } from "@chakra-ui/react";

export type HeaderLogoProps = BoxProps & {
	/**
	 * Source of the logo
	 */
	src: string;
	/**
	 * Alternative text for the logo
	 */
	alt: string;
};

export function HeaderLogo({
	children,
	src,
	alt,
	title,
	...props
}: HeaderLogoProps) {
	return (
		<Box
			as="button"
			type="button"
			title={title}
			display="flex"
			alignItems="center"
			gap={2}
			py={2}
			pl={2}
			pr={4}
			_hover={{
				backgroundColor: "surface.800",
			}}
			{...props}
		>
			<Image src={src} alt={alt} />
			<Text as="span" color="white" fontWeight={700} fontSize="1.1rem">
				{title}
			</Text>
		</Box>
	);
}
