import { Box ,Text} from "@chakra-ui/react"


const MeatTheTeam = () => {
  return (
    <Box 
    maxWidth={'1200px'}
    margin=' 0 auto'
    paddingY={{base:'3rem',sm:'6rem'}}
    >
        <Text textAlign={'center'} fontSize={{base:'3xl',sm:'5xl'}}>Meat The Team</Text>
        <Text textAlign={'center'} marginTop='0.5rem'>The best in the industry ,at your service 24/7.</Text>
    </Box>
  )
}

export default MeatTheTeam