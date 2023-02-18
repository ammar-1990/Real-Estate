import { Box, Fade ,Text} from "@chakra-ui/react"
import HomeForm from "./HomeForm"


const HomeBanner = () => {
  return (

    <Fade in>
    <Box
    minHeight={'100vh'}
    backgroundImage={'url("/images/office.jpeg")'}
    backgroundPosition='center'
    backgroundAttachment={'fixed'}
    backgroundSize='cover'
    position={'relative'}

    
    
    >
<Box
position={'absolute'}
width='100%'
height={'100%'}
backgroundColor='blue.900'
opacity={'0.7'}
>

</Box>


<Box
display={'flex'}
flexDirection={{base:'column',md:'row'}}
alignItems='center'
justifyContent={{base:'flex-start',md:'space-between'}}
position='absolute'
inset='0'
padding='1.5rem'

>
<Box
width={{base:'100%',md:'50%'}}
marginBottom='2rem'>
  <Text
color='white'
fontSize={{base:'xl',sm:'2xl',md:'4xl'}}
lineHeight='shorter'
>
  Download Our New<strong>Property Buiyng Guide</strong>  Today...

</Text>

<Text color='white' marginTop={'2rem'} fontSize={{base:'lg',md:'xl'}}>a free PDF with out best secrets for evaluating a property purchase,calculatin profit and so much more.</Text>
</Box>


<Box
width={{base:'100%',md:'50%'}}>

  <HomeForm />
  </Box>

</Box>



    </Box>
    </Fade>
  )
}

export default HomeBanner