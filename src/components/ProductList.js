import { useEffect,useState } from 'react';
import { INITIAL_PRODUCT_LIST } from '../App';
import { Product } from './Product';
import { Button, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { API } from '../global';
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import {useDispatch} from "react-redux"
import { addItem } from '../utils/CartSlice';

export function ProductList() {
  // const productList = INITIAL_PRODUCT_LIST;
  const [productList, setProductList] = useState([])

  const dispatch = useDispatch()

  const handleAddItem =(product) =>{
    dispatch(addItem(product))
  }

  const navigate = useNavigate();

  const getProduts = ()=>{
    fetch(`${API}`,
    {
      method: "GET"
    })
    .then((res)=>res.json())
    .then((data)=>setProductList(data))
  }
    //replacing fetch with axios with async wait
   // const getProduts = async()=>{
  //   try{
  //  const response=await axios.get(`${API}`)
  //  setProductList(response.data)
  //  //if we use async await we dont need to use promise(then)
  //  // .then((res)=>setProductList(res.data))
  //   }
  //   catch(error){
  //     console.log("Error is ",error)
  //   }
  //  }
  
  useEffect(()=> getProduts(),[]) //call only once due to empty dependency

  console.log(productList)

   const handleDelete =(id)=>{
    console.log("delete ID is ",id)
    fetch(`${API}/${id}`,
    {
      method: "DELETE"
    })
    .then(()=>getProduts())
   }

   //Edit product = AddProduct+ProductDetails
   //products/edit/id => PUT method
    const handleEdit =(id)=>{
    console.log("delete ID is ",id)
    fetch(`${API}/${id}`,
    {
      method: "DELETE"
    })
    .then(()=>getProduts())
   }

  return (
    <div>
      <div className='product-list'>
        {productList.map((pd, index) => (
          <Product key={index} product={pd} id={pd.id} 
          
          deleteButton={
             <IconButton color='error' onClick={()=>handleDelete(pd.id)}>
              <DeleteIcon/>
              </IconButton>
          } 
              
          editButton={
            <IconButton color='secondary' onClick={()=>navigate(`/products/edit/${pd.id}`)}>
             <EditIcon/>
             </IconButton>
         } 
         
         addCartItem={
          <Button  variant ="contained" color="success" 
          onClick={()=>handleAddItem(pd)}
          >Add To Cart</Button>
         }
         />
        ))}
        
      </div>

    </div>

  );
}

