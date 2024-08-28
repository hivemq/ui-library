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

import { Divider, type DividerProps } from '@chakra-ui/react'

export type HeaderDividerProps = DividerProps & {}

export function HeaderDivider({ ...props }: HeaderDividerProps) {
  return (
    <Divider
      orientation="vertical"
      height="auto"
      borderLeft="2px solid"
      borderColor="surface.400"
      margin={4}
      {...props}
    />
  )
}
