import { Badge, Box, Flex, Text } from "@chakra-ui/react"
import useCleanProperty from "@/features/hooks/useCleanProperty"
import Layout from "@/features/components/layout/Layout"
import {BiLocationPlus} from 'react-icons/bi'
import SingleSlider from "@/features/components/singleSlider/SingleSlider"
import PropertyStats from "@/features/components/propertyStats/PropertyStats"

const Single=({property})=>{

    const { address,
        coverPhoto,
        propertyType,
        price,
        title,
        rooms,
        baths,
        purpose,
        sqSize,
        externalID,
        photos,
        description,
        coverVideo,
        panorama,
        amenitites,
        furnished}=useCleanProperty(property)

    return(
        <Layout>
        <Box backgroundColor={'#f7f8f9'}
        padding='3rem'>

           
<Text 
fontSize={{base:'sm', md:"2xl"}}
fontWeight='medium'
color='blue.800'>{propertyType}  {title}</Text>
 <Flex color="blue.500" gap='1rem' alignItems={'center'}
 marginBottom='3rem'>
    <BiLocationPlus />
    <Text color='blue.500' fontSize={{base:'sm', md:"lg"}}>  {address} - ID {externalID}</Text>
<Badge colorScheme={'green'}>{purpose}</Badge>
 </Flex>
 <Box display={'flex'}
 flexDirection={{base:'column',md:'row'}}
 gap='1rem'>
<Box width={{base:'100%',md:'50%'}}>
<SingleSlider photos={photos}/>

</Box>
 <Box width={{base:'100%',md:'50%'}}><PropertyStats rooms={rooms} baths={baths} price={price} sqSize={sqSize} /></Box>
</Box>

        </Box>
        </Layout>
    )
}

export default Single


export async function getServerSideProps(context){
    const property =require('@/features/data/property')

    return {
        props:{property}
    }
}