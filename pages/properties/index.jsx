import PropertyCard from "@/features/components/homeProperties/PropertyCard"
import Layout from "@/features/components/layout/Layout"
import { Box, SimpleGrid } from "@chakra-ui/react"


const Properties = ({properties})=> {

    return (
        <Layout >
        <Box padding={{base:'0.5rem',md:'3rem'}}
        backgroundColor={'#f7f8f9'}>
<SimpleGrid

columns={{base:'1',sm:'3'}}
gap={{base:'0',sm:'2rem'}}
minChildWidth='300px'>
{properties.map(property=><PropertyCard key={property.id} {...property} />)}

</SimpleGrid>

        </Box>
        </Layout>
    )
}


export default Properties



export async function getStaticProps(){
    const {hits}=require('@/features/data/properties')
    return {
      props: {properties:hits}
    }

}