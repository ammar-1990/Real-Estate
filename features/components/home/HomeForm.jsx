import { Box ,FormControl,Input,Text,Flex, Checkbox, Button} from '@chakra-ui/react'
import {useForm} from 'react-hook-form'

const HomeForm = () => {

const {register,handleSubmit,formState:{errors}}=useForm()

const onSubmit =(data)=>{
console.log(data)
}
  return (
    <Box
    width='100%'
    padding={'2rem'}
    backgroundColor='white'
    color='gray.900'
    borderRadius='md'
    >
    <Text 
    fontSize='2xl'
    fontWeight='bold'>
        Free PDF Guide
    </Text>
    <Text>Complete the form below top download your guide</Text>
    <form onSubmit={handleSubmit(onSubmit)}
    >
<FormControl marginTop={'1.5rem'}>
    <Input type={'text'} placeholder='name' id='name' autoComplete='off' {...register('name',{required:true})}/>
  { errors.name && <Text paddingX={'1rem'} fontSize={'xs'} color='red.500'>{errors.name.type}</Text>}
    <Flex flexDirection={{base:'column',lg:'row'}} gap='10px' marginTop='10px'>
        <Box width={{base:'100%',lg:"50%"}}> 
            <Input type='email' id='email' placeholder='your email' autoComplete='off' {...register('email',{required:true})}/>
        {errors.email && <Text paddingX={'1rem'} fontSize={'xs'} color='red.500'>{errors.email.type}</Text>}
        </Box>
       <Box width={{base:'100%',lg:"50%"}}> 
        <Input type='text' id='phone' placeholder='your phone' autoComplete='off'  {...register('phone',{required:true})}/>
       {errors.phone && <Text paddingX={'1rem'} fontSize={'xs'} color='red.500'>{errors.phone.type}</Text>}
        </Box>
       
    </Flex>

    <Checkbox
    marginTop={'10px'}
    type='checkbox'
    id='gdpr'
    placeholder='GDPR'
    {...register('gdpr',{required:true})}>
I Consent to having this website store my submitted info
    </Checkbox>
    {errors.gdpr && <Text paddingX={'1rem'} fontSize={'xs'} color='red.500'>{errors.gdpr.type}</Text>}
</FormControl>
<Button
type='submit'
colorScheme={'blue'}
fontSize='xl'
padding={'2rem'}
marginTop='10px'
width={'100%'}
>Download Now</Button>


    </form>
    </Box>
  )
}

export default HomeForm