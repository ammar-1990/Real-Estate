import { Box, Button, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import Link from 'next/link'
import {MdMapsHomeWork} from 'react-icons/md'
import { navLinks } from './navLinks'
import {RxHamburgerMenu} from 'react-icons/rx'

const NavMoble = () => {
  return (
    <Flex 
    color={'blue.600'}
    padding={"2rem"}
   
    backgroundColor={'white'}
    margin={'0 auto'}
    justifyContent={'space-between'}
    alignItems={'center'}
    display={{base:'flex',md:'none'}}
    >
        <Link href={'/'}>
        <Box display={'flex' } gap='10px' alignItems={'center'}>
<MdMapsHomeWork size={30}/>
<Text fontSize={"2xl"} fontWeight='black'>Real Estate</Text>
        </Box>
        </Link>
    <Box display={'flex'} gap={'3rem'} alignItems='center'>
        <Menu>
            <MenuButton as={IconButton} aria-label='options' icon={<RxHamburgerMenu />} variant='outline'/>
            <MenuList>
            {
        navLinks.map((el)=><MenuItem key={el.title}> <Link  href={el.link}><Flex alignItems={"center"} gap={'0.4rem'}> {el.icon} {el.title}</Flex></Link></MenuItem>)
}
</MenuList>
</Menu>
</Box>
    </Flex>
  )
}

export default NavMoble