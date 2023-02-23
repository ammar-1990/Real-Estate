import { Box, Button, Checkbox, FormControl, Input, Textarea ,Text} from '@chakra-ui/react'
import {useForm} from 'react-hook-form'

const ContactForm = () => {

    const {register,handleSubmit,formState:{errors}}=useForm()
  const onSubmit =(data)=>{
    console.log(data)
    }
  return (
    <Box width='100%'>
<form onSubmit={handleSubmit(onSubmit)}> 
<FormControl>

<Input marginTop={'1rem'} type='text' placeholder='Name' id='name' {...register('name',{required:true})}   />
{ errors.name && <Text paddingX={'1rem'} fontSize={'xs'} color='red.500'>{errors.name.type}</Text>}
<Input marginTop={'1rem'} type='text' placeholder='Phone' id='phone' {...register('phone',{required:true})}   />
{errors.phone && <Text paddingX={'1rem'} fontSize={'xs'} color='red.500'>{errors.phone.type}</Text>}
<Input marginTop={'1rem'} type='email' placeholder='E-mail' id='email' {...register('email',{required:true})}   />
{errors.email && <Text paddingX={'1rem'} fontSize={'xs'} color='red.500'>{errors.email.type}</Text>}
<Textarea marginTop={'1rem'} type='text' id='message' placeholder='Message' {...register('message',{required:true})} resize='none' />
{ errors.message && <Text paddingX={'1rem'} fontSize={'xs'} color='red.500'>{errors.message.type}</Text>}
<Checkbox marginTop='1rem' type='checkbox' id='gdpr' placeholder='GDPR' {...register('gdpr',{required:true})}>I Consent to having this website store my details for future communication</Checkbox>
{errors.gdpr && <Text paddingX={'1rem'} fontSize={'xs'} color='red.500'>{errors.gdpr.type}</Text>}
<Button type='submit' marginTop={'1rem'} fontSize='xl' colorScheme={'blue'} padding='2rem' >Send Message</Button>

</FormControl>

</form>

    </Box>
  )
}

export default ContactForm