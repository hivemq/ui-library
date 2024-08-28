/*
Copyright 2024-present HiveMQ GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

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
