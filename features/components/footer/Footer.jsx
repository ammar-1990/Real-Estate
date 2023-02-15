import { Box ,Flex,SimpleGrid,Text} from "@chakra-ui/react"
import { services,about,workWithUs,ourOffices } from "./footerData"
import Link from "next/link"
import {MdMapsHomeWork} from 'react-icons/md'


const Footer = () => {
  return (
    <Box 
    paddingTop={'1rem'}
    backgroundColor='blue.600'
    >

        <Box maxWidth={'1200px'}
        margin='0 auto'>
<SimpleGrid
columns={'4'}
minChildWidth={'150px'}
color='whiteAlpha.700'
gap='1.7rem'
padding={'2rem'}>

    <Flex flexDirection={'column'}>
<Text as={'h4'} fontSize='2xl' marginBottom='1.5rem' >
    Services
</Text>
{services.map(el=><Link key={el.name} href={el.link}><Text>{el.name}</Text></Link>)}
    </Flex>
    <Flex flexDirection={'column'}>
<Text as={'h4'} fontSize='2xl' marginBottom='1.5rem'>
    About
</Text>
{about.map(el=><Link key={el.name} href={el.link}><Text>{el.name}</Text></Link>)}
    </Flex>
    <Flex flexDirection={'column'}>
<Text as={'h4'} fontSize='2xl' marginBottom='1.5rem'>
    Work With Us
</Text>
{workWithUs.map(el=><Link key={el.name} href={el.link}><Text>{el.name}</Text></Link>)}
    </Flex>
    <Flex flexDirection={'column'}>
<Text as={'h4'} fontSize='2xl' marginBottom='1.5rem'>
    Our Offices
</Text>
{ourOffices.map(el=><Link key={el.name} href={el.link}><Text>{el.name}</Text></Link>)}
    </Flex>


</SimpleGrid>

</Box>

<Box
display={'flex'}
flexDirection='column'
justifyItems={'center'}
alignItems='center'
padding={'2rem'}
backgroundColor='blue.900'>


    <Box color={'white'}
    display='flex'
    gap={'0.8rem'}
    alignItems='center'>
        <MdMapsHomeWork  size={'25'}/>
        <Text fontWeight={'black'} fontSize='xl'>Real Estate</Text>
    </Box>
    <Text color='white' marginTop={'1rem'} fontSize={'xs'}>All Rights Reserved - Designed By Ammar</Text>

</Box>
    </Box>
  )
}

export default Footer

