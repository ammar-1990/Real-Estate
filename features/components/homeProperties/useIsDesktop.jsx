import { useEffect,useState } from "react"

const useIsDesktop = () => {
    const [isDesktop,setIsDesktop]=useState(3)
    useEffect(()=> {
const size=()=>{ 

    if(window.innerWidth > 1030){
    setIsDesktop(3)
   }
 
else {
    setIsDesktop(1)
}
}



window.addEventListener('resize',size)
size()

return ()=> removeEventListener('resize',size)


   },[])

  return (
    isDesktop
  )
}

export default useIsDesktop