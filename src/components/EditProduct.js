import Edit from "@mui/icons-material/Edit"
import { useState,useEffect } from "react"
import { Button, TextField } from '@mui/material';
import { useNavigate ,useParams} from "react-router-dom"
import { API } from '../global';


function EditProduct(){
   
    const { productid } = useParams(); //get parameters from URL
    console.log(productid);

    const [product, setProduct] = useState(null)
 

   //fetching product details from fetch before editing to set in input fields
    useEffect(()=>{
      fetch(`${API}/${productid}`,
      {
        method: "GET"
      })
      .then((res)=>res.json())
      .then((data)=>setProduct(data))
     },[]) //call only once due to empty dependency
  
     console.log(product)
    
     
    return (
        product?  <EditProductForm product={product}/> : "Loading..."
    )
}

function EditProductForm({product}){
    const navigate = useNavigate()

    const [name, setName] = useState(product.name)
     const [poster, setPoster] = useState(product.poster)
     const [rating, setRating] = useState(product.rating)
     const [price, setPrice] = useState(product.price)
     const [summary, setSummary] = useState(product.summary)
    return(
        <div className="add-product-form">

        <TextField label="Name" variant="standard" value={name}
            onChange={(event) => setName(event.target.value)} />

        <TextField label="Poster" variant="standard" value={poster}
            onChange={(event) => setPoster(event.target.value)} />

        <TextField label="Rating" variant="standard" value={rating}
            onChange={(event) => setRating(event.target.value)} />

        <TextField label="Price" variant="standard" value={price}
            onChange={(event) => setPrice(event.target.value)} />

        <TextField label="Summary" variant="standard" value={summary}
            onChange={(event) => setSummary(event.target.value)} />

        <Button variant="contained" color="success" onClick={() => {
                const updateProduct = {
                    name: name,
                    poster: poster,
                    price: price,
                    rating: rating,
                    summary: summary
                }

                fetch(`${API}/${product.id}`,
                {
                  method: "PUT",
                  headers:{"Content-Type":"application/json"},
                  body: JSON.stringify(updateProduct)
                })
                .then((res)=>res.json())
                .then((data)=>console.log(data))
                //added promise with empty call back function to wait for put to complete and then navigate back to product list page
                .then(()=> navigate("/products"))       
            }


            }>Save</Button>


    </div>
    )
}
export default EditProduct