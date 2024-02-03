export const addToFav = (product) =>{
    return {
        type : "ADDTOFAV",
        payload: product
    }

}
export const removeToFav = (id) =>{
    console.log("inside remove fav");
    return {
        type : "REMOVETOFAV",
        payload: id
    }

}
export const addToCart = (id) =>{
    return {
        type : "ADDTOCART",
        payload: id
    }

}

export const remAtCart= (id) =>{
    return {
        type : "REMATCART",
        payload: id
    }

}

