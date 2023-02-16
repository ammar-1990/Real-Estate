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
flexDirection={{base:'column',sm:'row'}}
alignItems='center'
justifyContent={{base:'flex-start',sm:'space-between'}}
position='absolute'
inset='0'
padding='1.5rem'

>
<Box
width={{base:'100%',sm:'50%'}}
marginBottom='2rem'>
  <Text
color='white'
fontSize={{base:'xl',sm:'2xl',md:'4xl'}}
lineHeight='shorter'
>
  Download Our New<strong>Property Buiyng Guide</strong>  Today...

</Text>
</Box>


<Box
width={{base:'100%',sm:'50%'}}>

  <HomeForm />
  </Box>

</Box>



    </Box>
    </Fade>
  )
}

export default HomeBanner