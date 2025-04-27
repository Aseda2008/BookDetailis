import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BookShopContext } from '../context';

const BookDetails = () => {
  const {bookId} = useParams()
  const {product} = useContext(BookShopContext)
  const [dtl,setDtl] = useState({})
function getDetail(){
 let res = product.find((el) => el._id === bookId)
 setDtl(res)
 console.log(res);
 
}  

useEffect(() => {
getDetail()
},[])
  return (
    <div id="detail">
      <div class="container">
        <div class="detail">

        </div>
      </div>
    </div>
  );
};

export default BookDetails;