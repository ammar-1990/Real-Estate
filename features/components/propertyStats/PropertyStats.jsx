import { Box, Center, Divider, Flex, Text } from "@chakra-ui/react"
import { TbBed,TbBath,TbRuler } from "react-icons/tb"

const PropertyStats = ({rooms,baths,price,sqSize}) => {
  return (
    <Box
    backgroundColor={'white'}
    padding='1.5rem'

    >
        <Flex
        
        flexDirection={{base:'column',
    md:'row'}}
    justifyContent='space-around'
    alignItems={'center'}
    gap={{base:'3rem', md:'1rem'}}
    color={'gray.500'}
    fontWeight='light'
    fontSize={'xl'}
        >
<Flex flexDirection={'column'}
gap='0.2rem'
>
<Text>BEDS</Text>
<Flex
alignItems={'center'}
gap='1rem'>
    <TbBed /> {rooms}
    
</Flex>

</Flex>

<Flex flexDirection={'column'}
gap='0.2rem'
>
<Text>BATHS</Text>
<Flex
alignItems={'center'}
gap='1rem'>
    <TbBath /> {baths}
</Flex>

</Flex>
<Flex flexDirection={'column'}
gap='0.2rem'
alignItems={'center'}
>
<Text>SIZE</Text>
<Flex
alignItems={'center'}
gap='1rem'>
    <TbRuler /> {sqSize}<sup>m2</sup>
</Flex>

</Flex>
<Flex flexDirection={'column'}
gap='0.2rem'
alignItems={'center'}
>
<Text>PRICE</Text>
<Flex
alignItems={'center'}
gap='1rem'>
    {price}
</Flex>

</Flex>

        </Flex>
    </Box>
  )
}

export default PropertyStats