import { Box, type BoxProps } from '@chakra-ui/react'

export type SidebarGroupProps = BoxProps & {
  Title: React.ReactNode
}

export function SidebarGroup({ Title, children, ...props }: SidebarGroupProps) {
  return (
    <Box {...props}>
      <Box
        borderLeft="6px solid"
        borderColor="transparent"
        textAlign="left"
        pl={4}
        mb={1}
        fontWeight={700}
        textTransform="uppercase"
        color="surface.600"
      >
        {Title}
      </Box>
      {children}
    </Box>
  )
}
