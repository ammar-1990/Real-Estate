import { Badge, Box, Divider, Flex, SimpleGrid, Text } from "@chakra-ui/react"
import useCleanProperty from "@/features/hooks/useCleanProperty"
import Layout from "@/features/components/layout/Layout"
import {BiLocationPlus} from 'react-icons/bi'
import SingleSlider from "@/features/components/singleSlider/SingleSlider"
import PropertyStats from "@/features/components/propertyStats/PropertyStats"
import TextContent from "@/features/components/textContent/TextContent"
import PropertyVideo from "@/features/components/PropertyVideo/PropertyVideo"

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
        amenities,
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
 <Box width={{base:'100%',md:'50%'}}><PropertyStats rooms={rooms} baths={baths} price={price} sqSize={sqSize} />
 <TextContent title='Description' >{description}</TextContent>
 <TextContent title="Amenities">
    <SimpleGrid columns={{base:'1',sm:'2'}} color='gray.500'>
    {amenities.length ? amenities.map((ele ,index)=><Text key={index}>{ele}</Text>) : 'Please contact us'}
    </SimpleGrid>
 </TextContent>
 </Box>

</Box>
<PropertyVideo coverVideo={coverVideo} />

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