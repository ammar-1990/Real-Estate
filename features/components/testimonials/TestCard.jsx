import { Box ,Flex,Image,Text} from '@chakra-ui/react'
import {TbQuote} from 'react-icons/tb'

const TestCard = ({name,company,image,testimonial}) => {
  return (
    <Box
    padding='2rem'
    backgroundColor={'white'}
    display='flex'
    flexDirection={'column'}
    
    >

        <Box>
            <TbQuote color='#4299e1' size={'40'} />
        </Box>
        <Text color='gray.700' marginY='1.2rem'>{testimonial}</Text>
        <Flex alignItems={'center'} gap='1rem'>
            <Image  src={image}  width='6rem' height='6rem' objectFit={'cover'} borderRadius='full' />
            <Box>
                by <Text as='span' textTransform={'capitalize'}>{name}</Text>
                <Text fontWeight={'light'}
                fontStyle='italic'
                fontSize='lg'>Company -{company}</Text>
            </Box>
        </Flex>
    </Box>
  )
}

export default TestCard