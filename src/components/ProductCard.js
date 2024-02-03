import * as React from 'react';
import Card from '@mui/material/Card';
import Card from './Card'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart, addToFav,removeToFav } from '../redux/action';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
// import { Button, CardActionArea, CardActions } from '@mui/material';


export default function ProductCard(props) {
  const {title,price,image,desc,id,type} =props
  const dispatch=useDispatch()
  return (
    // <Card sx={{ maxWidth: 345, marginBottom:"20px" }}>
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       height="140"
    //       image={image}
    //       alt="green iguana"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">{title}</Typography>
    //       <Typography variant="body2" color="text.secondary">{desc}</Typography>
    //       <Typography variant="h6" color="text.secondary">Price :{price}</Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions>
    //     {
    //         (type)?
    //         <Button size="contained"  color="error" onClick={() =>dispatch(removeToFav(id))}>
    //         remove to Favourite
    //       </Button> : 
    //        <Button   size="small" color="error" onClick={() =>dispatch(addToFav(props))}>
    //       <FavoriteBorderIcon/> 
    //      </Button>
    //     }
    //       <Button variant="contained" size="small" color="warning" onClick={() =>dispatch(addToCart(props))}>
    //        <ShoppingCartCheckoutIcon/>
    //      </Button>
       
       
    //   </CardActions>
    // </Card>
    <Card
        img={image}
        title={title}
        description={desc}
        id={id}
        type={false}
        price={price}
      />
  
  );
}