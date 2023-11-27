import { Counter } from "../Counter";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';

export function Product({ product, id ,deleteButton,editButton}) {

  const [show, setShow] = useState(true);
  const styles = {
    color: product.rating >= 4.5 ? "green" : "red"
  };
  //block = > true => visible
  //none -> false => hide
  const summaryStyle = {
    display: show ? "block" : "none"
  };

  const navigate = useNavigate()

  return (
    <div className="product-container">
      <img className='product-poster' src={product.poster} alt={product.name} />
      <div className='product-spec'>
        <h2 className='product-name'>{product.name} - {id}</h2>
        <p style={styles} className='product-rating'>⭐{product.rating}</p>
      </div>
      <h3 className='product-price'>Price:  {product.price}</h3>
      {/* <button onClick={() => setShow(!show)}>Toggle description</button> */}

      <IconButton aria-label="toggle" color="primary" onClick={() => setShow(!show)}>
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>

      <IconButton aria-label="info" color="primary" onClick={() => navigate("/products/" + id)}>
        <InfoIcon />
      </IconButton>


      {/* <button onClick={() => navigate("/products/" + id)} >Info</button> */}
      {/* conditional rendering */}
      {/* show ? "block" : "none" */}
      {/* {show ? <p className='product-summary'>{product.summary}</p> : null} */}
      <p style={summaryStyle} className='product-summary'>{product.summary}</p>
    
      <div className="counter-style">
        {deleteButton}
        {editButton}
      {/* <IconButton aria-label="deletebtn" color="error" >
      <DeleteIcon />
      </IconButton> */}

      <Counter />
      </div>
    </div>
  );

}
