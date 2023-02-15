import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import {MdMapsHomeWork} from 'react-icons/md'
import { navLinks } from './navLinks'

const NavDesktop = () => {
  return (
    <Flex 
    color={'blue.600'}
    paddingY={"2rem"}
    paddingX='0.7rem'
    maxWidth='1300px'
    backgroundColor={'white'}
    margin={'0 auto'}
    justifyContent={'space-between'}
    alignItems={'center'}
    display={{base:'none',md:'flex'}}
    >
        <Link href={'/'}>
        <Box display={'flex' } gap='10px' alignItems={'center'}>
<MdMapsHomeWork size={30}/>
<Text fontSize={"2xl"} fontWeight='black'>Real Estate</Text>
        </Box>
        </Link>
    <Box display={'flex'} gap={'3rem'} alignItems='center'>{
        navLinks.map((el)=> <Link key={el.title} href={el.link}><Flex alignItems={"center"} gap={'0.4rem'}> {el.icon} {el.title}</Flex></Link>)
}
<Button padding={'1.5rem'} colorScheme='twitter' fontWeight={'medium'} letterSpacing='0.8px' fontSize='0.7rem'>CREATE LISTING</Button>
</Box>
    </Flex>
  )
}

export default NavDesktop