import { Image, SimpleGrid } from "@chakra-ui/react"
import { imgs } from "./partnersData"


const Partners = () => {
  return (
    <SimpleGrid
    padding='1rem'
    minChildWidth={'150px'}
    gap='1rem'
    columns={imgs.length}
    >{imgs.map((img)=><Image justifySelf={'center'} alignSelf={'center'} filter={'grayscale(1)'} opacity='0.4' src={img} key={img} />)}</SimpleGrid>
  )
}

export default Partners