import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import Logo from '../public/asimov_logo.svg';

export const Navbar = () => {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'center'}>
        <Box spacing={9} h={8} display="flex" flexDir="row">
          <Logo aria-label={'Asimov Logo'} />
          <Text as="span" fontSize="2xl" ml={2}>
            Takehome
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
