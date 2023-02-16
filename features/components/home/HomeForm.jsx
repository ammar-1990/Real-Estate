import { Box ,FormControl,Input,Text} from '@chakra-ui/react'
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
    <Input type={'text'} placeholder='name' id='name' {...register('name',{required:true})}/>
</FormControl>


    </form>
    </Box>
  )
}

export default HomeForm