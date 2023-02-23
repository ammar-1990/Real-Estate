import Layout from "@/features/components/layout/Layout"
import TextContent from "@/features/components/textContent/TextContent"
import { Box, Grid, GridItem ,Text} from "@chakra-ui/react"
import ContactForm from "@/features/components/contact/ContactForm"



const contactUs = () => {
  
  return (
    <Layout>
      <Box backgroundColor={'#f7f8f9'}
      paddingY='3rem'
      >

<Grid templateColumns={'repeat(6 , 1fr)'}
gap='5'
maxWidth={'1200px'}
      margin='0 auto'
      padding={{base:'0.5rem',xl:'0'}}>
<GridItem colSpan={{base:'6',lg:'4'}}>
<TextContent title='Contact Us'>
<ContactForm />
</TextContent>
</GridItem>
<GridItem colSpan={{base:'6',lg:'2'}}>
<TextContent title='For Inquiries Contact:'>
<Text fontSize={'md'}>John Doe</Text>
<Text fontSize={'sm'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel dolorem accusantium eos reiciendis. Ducimus aliquam optio dolorum, asperiores vel rem.</Text>
<Text fontSize={'md'}
marginTop='2rem'>Lara Craft</Text>
<Text fontSize={'sm'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel dolorem accusantium eos reiciendis. Ducimus aliquam optio dolorum, asperiores vel rem.</Text>
</TextContent>
</GridItem>

</Grid>

      </Box>
    </Layout>
  )
}

export default contactUs