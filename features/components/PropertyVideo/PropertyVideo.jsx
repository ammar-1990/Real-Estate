import { Box, Text } from "@chakra-ui/react"


const PropertyVideo = ({coverVideo}) => {
   
  return (
    <Box 
    padding='0.8rem'
    backgroundColor={'white'}
    width={{base:'100%',lg:'50%'}}
    height={{base:'350px',sm:'375px',md:'375px'}}
   
    

    >
      <Text
    paddingY="1rem"
    color='gray.600'>Walkthrough Video</Text>
<iframe
width='100%'
height='85%'
allow="accelerometer;autoplay;clipboard-write ; encrypted-media;gyroscope;picture-in-picture"
src={`http://www.youtube.com/embed/${coverVideo}`}
>

</iframe>

    </Box>
  )
}

export default PropertyVideo