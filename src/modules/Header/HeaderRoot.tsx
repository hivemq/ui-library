import { GridItem } from '@chakra-ui/react'
import { Z_INDEX } from '../../constants/zIndex'

export type HeaderRootProps = {
  children?: React.ReactNode
}

export function HeaderRoot({ children }: HeaderRootProps) {
  return (
    <GridItem
      as="header"
      display="flex"
      flexDirection="row"
      colSpan={3}
      position="sticky"
      zIndex={Z_INDEX.HEADER}
      w="100%"
      top={0}
      bg="#000"
      columnGap={4}
      maxH="56px"
      gridArea="header"
    >
      {children}
    </GridItem>
  )
}
