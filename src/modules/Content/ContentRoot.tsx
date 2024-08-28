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

import { GridItem, type GridItemProps } from '@chakra-ui/react'

export type ContentRootProps = GridItemProps & {
  children: React.ReactNode
  canOverflowXScroll?: boolean
}

// TODO: apply responsive styles
export function ContentRoot({
  children,
  canOverflowXScroll: overflowX,
  ...props
}: ContentRootProps) {
  return (
    <GridItem overflowX={overflowX ? 'scroll' : 'hidden'} gridArea="content" p={8} {...props}>
      {children}
    </GridItem>
  )
}
