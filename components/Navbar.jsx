import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey, FiPhone, FiShoppingBag } from 'react-icons/fi';

const Navbar = () => (
  <Flex p='2' borderBottom='1px' borderColor='gray.100'>
    <Box fontSize='3xl' color='#20B2AA' fontWeight='bold'>
      <Link href='/' paddingLeft='2'>Treasure </Link>
    </Box>
    <Spacer />
    <Box>
      <Menu>
        <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='red.400' />
        <MenuList>
          <Link href='/' passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href='/search' passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href='/search?purpose=for-sale' passHref>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link href='/search?purpose=for-rent' passHref>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
          <Link href='https://treasure-daba61.webflow.io/' target ='_blank' passHref>
            <MenuItem icon={<FiShoppingBag />}>View Furniture</MenuItem>
          </Link>
          <Link href='https://oatchat.netlify.app/' target ='_blank' passHref>
            <MenuItem icon={<FiPhone />}>Chat with Treasure</MenuItem>
          </Link>

        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;
