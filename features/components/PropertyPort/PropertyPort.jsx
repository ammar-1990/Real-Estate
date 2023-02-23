import { Box, Text } from "@chakra-ui/react"

const PropertyPort = ({panorama}) => {
  return (
    <Box 
    padding='0.8rem'
    backgroundColor={'white'}
    width={{base:'100%',lg:'50%'}}
    height={{base:'350px',sm:'375px',md:'375px'}}
   
    

    >
        <Text
      
        paddingY='1rem'
        color='gray.600'>3D Walkthrought Video</Text>
<iframe
width='100%'
height='85%'

src={`${panorama}`}
>

</iframe>

    </Box>
  )
}

export default PropertyPort