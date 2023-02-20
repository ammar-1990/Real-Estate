import { Box ,Flex,Text} from "@chakra-ui/react"
import AgentCard from "./AgentCard"
import { agents } from "./meatTheTeamData"


const MeatTheTeam = () => {
  return (
    <Box 
   
    paddingY={{base:'3rem',sm:'6rem'}}
    >
        <Text textAlign={'center'} fontSize={{base:'3xl',sm:'5xl'}}>Meat The Team</Text>
        <Text textAlign={'center'} marginTop='0.5rem'>The best in the industry ,at your service 24/7.</Text>

<Flex marginTop={'2rem'} alignItems='center' gap='2rem' flexWrap='wrap' justifyContent={'center'}> {agents.map((agent)=><AgentCard key={agent.name} {...agent} />)}</Flex>
       
    </Box>

    
  )
}

export default MeatTheTeam