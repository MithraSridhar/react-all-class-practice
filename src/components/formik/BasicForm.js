import {useFormik} from 'formik'
import * as yup from 'yup'


const formValidationsSchema = yup.object({
    //custom error message for password and email fields
    email:yup.string()
    .min(10,"Need a longer email")
    .required("Email is mandatory")
    .matches(/^[A-Z0-9._%+-]+@[A-z0-9.-]+\.[A-Z]{2,}$/i,"Enter valid email"),

    password:yup.string()
    .min(8,"Need a longer password 😃")
    .max(15,"Too many digits")
    .required("Password is mandatory")
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Pattern not matching")
})

function BasicForm(){

    //using formik setting initial values for form fields
    const formik = useFormik({
        initialValues:{email:"mithugopal@gmail.com", password:"test"},
        validationSchema: formValidationsSchema,


        onSubmit:(values)=>{
            console.log("On Submit",values)
        }
    })
    return(
        <div>BasicForm             
             <form onSubmit={formik.handleSubmit}>
             <br/>
           Email <input id="email" name ="email" type="email" placeholder="Email" value={formik.values.email}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}/>
            {/* to throw error during validation */}
            {formik.touched.email&&formik.errors.email ? formik.errors.email:""}
            <br/>
            <br/>
           Password <input  id="password" name ="password" type="password" placeholder="Password" value={formik.values.password}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}/>
           {/* to throw error during validation */}
           {formik.touched.password && formik.errors.password ? formik.errors.password :""}
            <br/>
            <br/>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default BasicForm