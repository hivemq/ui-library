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

import { Box, type BoxProps, Image, Text } from '@chakra-ui/react'
import { forwardRef } from 'react'

export type HeaderLogoProps = BoxProps & {
  /**
   * Source of the logo
   */
  src: string
  /**
   * Alternative text for the logo
   */
  alt: string
  /**
   * Show/hide "HiveMQ" text
   */
  showHiveMQText?: boolean
}

/**
 * HeaderLogo component
 */
export const HeaderLogo = forwardRef<HTMLDivElement, HeaderLogoProps>(
  ({ children, src, alt, title, showHiveMQText = true, ...props }, ref) => {
    return (
      <Box
        title={title}
        display="flex"
        alignItems="center"
        gap={2}
        py={2}
        pl={2}
        pr={4}
        _hover={{
          backgroundColor: 'secondary.800',
        }}
        {...props}
        ref={ref}
      >
        <Image src={src} alt={alt} />
        {showHiveMQText && (
          <Text as="span" color="white" fontSize="1.2rem">
            HiveMQ
          </Text>
        )}
        <Text as="span" color="white" fontWeight={700} fontSize="1.2rem">
          {title}
          {children}
        </Text>
      </Box>
    )
  },
)
