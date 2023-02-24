import { Box, SimpleGrid, Text } from "@chakra-ui/react"
import { testimonials } from "./testimonialsData"
import TestCard from "./TestCard"



const Testimonials = () => {
  return (
    <Box
    backgroundColor={'blue.50'}
    padding={{base:'0.7rem',sm:'6rem'}}


    >
<Text 
textAlign={'center'}
color={'gray.700'}
fontSize={{base:'xl',md:'4xl'}}
>Testimonials</Text>
<Text textAlign={'center'}
color='gray.700'>Here is what your valued clients have to say</Text>

<SimpleGrid
marginTop={'2rem'}
columns={'3'}
minChildWidth='300px'
gap={{base:'0.5rem',sm:'2rem'}}
>
{testimonials.map((test)=><TestCard key={test.name} {...test} />)}

</SimpleGrid>

    </Box>
  )
}

export default Testimonials