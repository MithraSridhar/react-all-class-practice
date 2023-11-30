import { useState } from "react"
import { Button, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom"
import { API } from '../global';
import axios from 'axios';
import {useFormik} from 'formik'
import * as yup from 'yup'

const formValidationsSchema = yup.object({
    //custom error message for password and email fields
    name:yup.string()
    .min(10,"Need a longer name")
    .required("Name is mandatory"),

    poster:yup.string()
    .min(8,"Need a longer poster")
    .max(15,"Too many characters")
    .required("poster is mandatory"),

    rating:yup.string()
    .max(1,"Invalid rating")
    .required("Rating is mandatory")
    .matches(/^[0-9]*$/),

    price:yup.string()
    .min(1,"Invalid price")
    .max(8,"Invalid price")
    .required("Price is mandatory")
    .matches( /^[-+]?(([0-9]+)(.,₹)?|(.,)?)$/),

    summary:yup.string()
    .min(10,"Need a longer summary")
    .required("Summary is mandatory")
})

export function AddProduct() {

    // const [name, setName] = useState("")
    // const [poster, setPoster] = useState("")
    // const [rating, setRating] = useState("")
    // const [price, setPrice] = useState("")
    // const [summary, setSummary] = useState("")
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues:{name:"", poster:"", rating:"",price:"",summary:""},
        validationSchema: formValidationsSchema,

        onSubmit:(values)=>{
            console.log("On Submit",values)
        }
    })

    return (
        <div className="add-product-form">
<form  onSubmit={formik.handleSubmit}>
            <TextField id="name" name ="name" label="Name" variant="standard" value={formik.values.name}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}/>
            {formik.touched.name&&formik.errors.name ? formik.errors.name:""}
            <br/>
            <br/>
            <TextField id="poster" name ="poster" label="Poster" variant="standard" value={formik.values.poster}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}/>
                {formik.touched.poster&&formik.errors.poster ? formik.errors.poster:""}
            <br/>
            <br/>
            <TextField  id="rating" name ="rating" label="Rating" variant="standard" value={formik.values.rating}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
                {formik.touched.rating&&formik.errors.rating ? formik.errors.rating:""}
            <br/>
            <br/>
            <TextField id="price" name ="price" label="Price" variant="standard" value={formik.values.price}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}/>
                 {formik.touched.price&&formik.errors.price ? formik.errors.price:""}
            <br/>
            <br/>
            <TextField  id="summary" name ="summary" label="Summary" variant="standard" value={formik.values.summary}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
                {formik.touched.summary&&formik.errors.summary ? formik.errors.summary:""}

</form>
            {/* copy the productList and add newProduct to it */}

            <Button type ="submit" variant="contained" onClick={() => {
                const newProduct = {
                    name: formik.values.name,
                    poster: formik.values.poster,
                    price: formik.values.price,
                    rating: formik.values.rating,
                    summary: formik.values.summary
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
                .then(()=>navigate("/"))
            }


            }>Add User</Button>


        </div>
    )
}

//Task =  15 mins
// Add Products
// 5  input fields
//(poster, name, price, rating, summary )
// Add product button
