import { Badge, Box, Flex, Text } from "@chakra-ui/react"
import useCleanProperty from "@/features/hooks/useCleanProperty"
import Layout from "@/features/components/layout/Layout"
import {BiLocationPlus} from 'react-icons/bi'
import SingleSlider from "@/features/components/singleSlider/SingleSlider"

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
 <Flex color="blue.500" gap='1rem' alignItems={'center'}>
    <BiLocationPlus />
    <Text color='blue.500' fontSize={{base:'sm', md:"lg"}}>  {address} - ID {externalID}</Text>
<Badge colorScheme={'green'}>{purpose}</Badge>
 </Flex>

 <SingleSlider photos={photos}/>


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