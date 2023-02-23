import { Box, Text } from "@chakra-ui/react"


const PropertyVideo = ({coverVideo}) => {
   
  return (
    <Box 
    padding='0.8rem'
    backgroundColor={'white'}
    width={{base:'100%',lg:'50%'}}
    height={{base:'200px',sm:'275px',md:'350px'}}
   
    

    >
      <Text
      textAlign={'center'}>Walkthrough Video</Text>
<iframe
width='100%'
height='92%'
allow="accelerometer;autoplay;clipboard-write ; encrypted-media;gyroscope;picture-in-picture"
src={`http://www.youtube.com/embed/${coverVideo}`}
>

</iframe>

    </Box>
  )
}

export default PropertyVideo