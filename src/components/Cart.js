import {  useSelector } from 'react-redux/es/hooks/useSelector';
import CartItem from './CartItem';
import Button from '@mui/material/Button';
import {useDispatch} from "react-redux"
import { clearCart } from '../utils/CartSlice';

export function Cart(){
    const cartItems= useSelector(((state)=>state.cart.items))
    console.log("cartItems is ",cartItems)
    const dispatch = useDispatch();
    const handleClearItem =()=>{
        dispatch(clearCart())
    }
    return(
<>
<div className="cart-length">
{cartItems.length} Items Added Successfully
<Button onClick={()=>handleClearItem()}  variant ="contained" color="info" >Clear Cart</Button>
</div>
        <div className="cart">
          
            {cartItems.map((item)=>(
         <CartItem product={item}/>
            ))}
       
        </div>
        </>
    )
}