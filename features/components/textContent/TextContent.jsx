import { Text,Box ,Divider} from "@chakra-ui/react"

const TextContent = ({children,title}) => {
  return (
    <Box marginTop={'2rem'} backgroundColor='white' padding='2rem'>
    <Text color='gray.500'>
       {title}
    </Text>
    <Divider marginY='1rem' />

    <Box color='gray.500'>{children}</Box>
 </Box>
  )
}

export default TextContent