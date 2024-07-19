import { Box, type BoxProps, MenuDivider } from '@chakra-ui/react'

export type HeaderMenuContentDetailsProps = BoxProps & {}

export function HeaderMenuContentDetails({ children, ...props }: HeaderMenuContentDetailsProps) {
  return (
    <>
      <Box backgroundColor="black" px={3} py={2} {...props}>
        {children}
      </Box>
      <MenuDivider borderColor="surface.500" />
    </>
  )
}
