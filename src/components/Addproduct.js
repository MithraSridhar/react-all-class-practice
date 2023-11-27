import { useState } from "react"
import { Button, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom"
import { API } from '../global';
import axios from 'axios';

export function AddProduct() {

    const [name, setName] = useState("")
    const [poster, setPoster] = useState("")
    const [rating, setRating] = useState("")
    const [price, setPrice] = useState("")
    const [summary, setSummary] = useState("")

    const navigate = useNavigate()

    return (
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


            {/* copy the productList and add newProduct to it */}

            <Button variant="contained" onClick={() => {
                const newProduct = {
                    name: name,
                    poster: poster,
                    price: price,
                    rating: rating,
                    summary: summary
                }

                // fetch(`${API}`,
                // {
                //   method: "POST",
                //   headers:{"Content-Type":"application/json"},
                //   body: JSON.stringify(newProduct)
                // })
                // .then((res)=>res.json())
                // .then((data)=>console.log(data))
                // //added promise with empty call back function to wait for post to complete and then navigate back to produ. list page
                // .then(()=> navigate("/products"))    
                
                //replacing with axios

                axios.post(`${API}`,newProduct,{
                    headers:{
                        "Content-Type":"application/json",
                        Accept: "application/json"
                    }
                })
                .then((newProduct)=>console.log(newProduct))
                .then(()=>navigate("/products"))
            }


            }>Add Product</Button>


        </div>
    )
}

//Task =  15 mins
// Add Products
// 5  input fields
//(poster, name, price, rating, summary )
// Add product button
