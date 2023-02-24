import Axios from 'axios'

const headers ={
    'X-RapidAPI-Key':process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
}

export const axios =Axios.create({

    baseURL:'https://bayut.p.rapidapi.com',
    headers
})


export const getProperty=async (num)=> {

    const {data} = await axios.get('/properties/list',{
        params: {
            locationExternalIDs: '5002,6020',
            purpose: 'for-sale',
            hitsPerPage: num,
            page: '0',
            lang: 'en',
            sort: 'city-level-score',
            hasVideo:true,
            hasFloorPlan:true,
            hasPanorama:true,
      
          }
    })

    return data.hits
}


export const getSingle= async (id)=> {
const {data}= await axios.get('/properties/detail',{params: {externalID: id}})
}