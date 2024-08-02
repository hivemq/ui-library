import { Box, type BoxProps, Image, Text, forwardRef } from '@chakra-ui/react'

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
 * Second parameter of the forwardRef generic has to be of the component bound to `as` prop
 */
export const HeaderLogo = forwardRef<HeaderLogoProps, 'button'>(
  ({ children, src, alt, title, showHiveMQText = true, as = 'button', ...props }, ref) => {
    return (
      <Box
        type="button"
        title={title}
        display="flex"
        alignItems="center"
        gap={2}
        py={2}
        pl={2}
        pr={4}
        _hover={{
          backgroundColor: 'surface.800',
        }}
        as={as}
        ref={ref}
        {...props}
      >
        <Image src={src} alt={alt} />
        {showHiveMQText && (
          <Text as="span" color="white" fontSize="1.2rem">
            HiveMQ
          </Text>
        )}
        <Text as="span" color="white" fontWeight={700} fontSize="1.2rem">
          {title}
        </Text>
      </Box>
    )
  },
)
