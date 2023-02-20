import { Box, Image, Text } from "@chakra-ui/react"

const AgentCard = ({name,image,description,title}) => {
  return (
    <Box
    display={'flex'}
    flexDirection='column'
    justifyContent={'center'}
    alignItems='center'
    gap={'1rem'}
    padding={'2rem'}
    backgroundColor={'#f1f1f141'}
    width='300px'
    >
<Image src={image} height={'10rem'} width='10rem' objectFit={'cover'} borderRadius={'full'} shadow={'md'}/>

<Text fontSize={'xl'} fontWeight={'bold'} color={'blue.400'}>{name}</Text>
<Text textAlign={'center'} color='blue.600'>{title}</Text>
<Text textAlign={'center'} noOfLines={'4'} color={'gray.600'}>{description}</Text>

    </Box>
  )
}

export default AgentCard