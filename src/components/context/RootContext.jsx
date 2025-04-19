import React, { useEffect, useState } from "react";
import { BookSohpContext } from ".";
import axios from "axios";
function RootContext({children}){
    const [product,setPrioduct] = useState([])
    
    async function getpro() {
        let res = await axios(`https://api-crud.elcho.dev/api/v1/45012-27288-7bc68/books`)
        let {data} = res.data
        setPrioduct(data)
        
    }
    useEffect(() => {
        getpro()
    },[])
    return(
       <BookSohpContext.Provider value={{
        product,
        setPrioduct,

       }}>
{children}
       </BookSohpContext.Provider>
    )
}
export default RootContext;