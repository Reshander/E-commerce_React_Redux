import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useDispatch } from 'react-redux';
import { addToCart, addToFav, removeToFav } from '../redux/action';
// import { Button, CardActionArea, CardActions } from '@mui/material';


export default function Card(props) {
  const { title, price, image, desc, id, type } = props
  const dispatch = useDispatch()
  return (
    <div className="card" style={{ maxWidth: "22rem" }}>
      <div className="card__body">
        <img src={image} class="card__image" />
        <h4 className="card__title">{props.title}</h4>
        <p className="card__description">{desc}</p>
        {/* <p className="card-price">Price : {props.price}</p> */}
        {

          (type) ?
            <button className="card__btn" size="contained" color="error" onClick={() => dispatch(removeToFav(props.id))}>REMOVE FROM CART</button> :
            <button className="card__btn" size="small" color="error" onClick={() => dispatch(addToFav(props))}><FavoriteBorderIcon /></button>

        }
        <button className="card__btn" size="small" color="error" onClick={() => dispatch(addToCart(props))}><ShoppingCartCheckoutIcon /></button>

      </div>

      {/* <div>
            /* <CardActions>
        {
             (type)?
             <Button size="contained"  color="error" onClick={() =>dispatch(removeToFav(id))}>
             remove to Favourite
           </Button> : 
            <Button   size="small" color="error" onClick={() =>dispatch(addToFav(props))}>
           <FavoriteBorderIcon/> 
          </Button>
         }
           <Button variant="contained" size="small" color="warning" onClick={() =>dispatch(addToCart(props))}>
            <ShoppingCartCheckoutIcon/>
          </Button>
       
       
       </CardActions> 
          </div>  */}


    </div>
  );
}
