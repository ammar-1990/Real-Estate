import { Box, Text } from "@chakra-ui/react"

const PropertyPort = ({panorama}) => {
  return (
    <Box 
    padding='0.8rem'
    backgroundColor={'white'}
    width={{base:'100%',lg:'50%'}}
    height={{base:'200px',sm:'275px',md:'350px'}}
   
    

    >
        <Text
        textAlign={'center'}>3D Walkthrought Video</Text>
<iframe
width='100%'
height='92%'

src={`${panorama}`}
>

</iframe>

    </Box>
  )
}

export default PropertyPort