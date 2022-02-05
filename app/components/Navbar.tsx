import { Box, Button, Flex, Text, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Logo from '../public/asimov_logo.svg';

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={colorMode === 'light' ? 'gray.100' : 'gray.900'} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box spacing={9} h={8} display="flex" flexDir="row">
          <Logo aria-label="Asimov Logo" />
          <Text as="span" fontSize="2xl" ml={2}>
            Takehome
          </Text>
        </Box>
        <Button onClick={toggleColorMode} aria-label="Color mode toggle">
          {colorMode === 'light' ? (
            <MoonIcon aria-label="Moon icon" />
          ) : (
            <SunIcon aria-label="Sun icon" />
          )}
        </Button>
      </Flex>
    </Box>
  );
};
