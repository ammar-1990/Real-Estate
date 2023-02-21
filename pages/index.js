import Navigation from "@/features/components/navigation/Navigation";
import Footer from "@/features/components/footer/Footer";
import Layout from "@/features/components/layout/Layout";
import HomeBanner from "@/features/components/home/HomeBanner";
import HomeProperties from "@/features/components/homeProperties/HomeProperties";
import MeatTheTeam from "@/features/components/MeatTheTeam/MeatTheTeam";
import Partners from "@/features/components/partners/Partners";
import Testimonials from "@/features/components/testimonials/Testimonials";

export default function Home({properties}) {
  console.log(properties)
  return (
 <Layout >
<HomeBanner />
<HomeProperties properties={properties} />
<MeatTheTeam />
<Partners />
<Testimonials />
  </Layout>
  )
}



export async function getStaticProps(){
  const {hits}=require('@/features/data/properties')
  return {
    props: {properties:hits.slice(0,5)}
  }
}