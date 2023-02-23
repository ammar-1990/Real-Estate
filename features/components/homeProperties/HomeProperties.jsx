import { Box ,Text} from "@chakra-ui/react"
import {Swiper,SwiperSlide} from 'swiper/react'
import { Autoplay,Pagination } from "swiper"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import PropertyCard from "./PropertyCard"
import useIsDesktop from "./useIsDesktop"


const HomeProperties = ({properties}) => {
  const isDesktop=useIsDesktop()
  return (
    <Box 
    padding={{base:'0.5rem',md:'6rem'}}
    backgroundColor='blue.50'
    >
<Text marginTop={'4rem'} fontSize={{base:'lg',sm:'4xl'}}
color='gray.700'
textAlign={'center'}>
    Discover Our Featured Properties
</Text>

<Text textAlign='center'
color={'gray.700'}
marginTop='1rem' marginBottom={'2rem'}>A selection of our best properties</Text>

<Swiper 
slidesPerView={isDesktop }
spaceBetween={10}
loop={true}
centeredSlides={true}
autoplay={{delay:100,disableOnInteraction:true}}
pagination={{dynamicBullets:true}}
modules={[Autoplay,Pagination]}
className='mySwiper'

>
{properties.map((property)=>(<SwiperSlide key={property.id}><PropertyCard {...property} /></SwiperSlide>))}

</Swiper>

    </Box>

    



  )
}

export default HomeProperties