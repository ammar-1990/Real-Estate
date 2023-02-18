import { Box ,Text} from "@chakra-ui/react"
import {Swiper,SwiperSlide} from 'swiper/react'
import { Autoplay,Pagination } from "swiper"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import PropertyCard from "./PropertyCard"


const HomeProperties = ({properties}) => {
  return (
    <Box 
    padding={{base:'4rem',sm:'6rem'}}
    backgroundColor='blue.50'
    >
<Text fontSize={{base:'lg',sm:'4xl'}}
color='gray.700'
textAlign={'center'}>
    Discover Our Featured Properties
</Text>

<Text textAlign='center'
color={'gray.700'}
marginTop='1rem'>A selection of our best properties</Text>

<Swiper 
slidesPerView={3}
spaceBetween={10}
loop={true}
centeredSlides={true}
autoplay={{delay:2000,disableOnInteraction:true}}
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