export const addToFav = (product) =>{
    return {
        type : "ADDTOFAV",
        payload: product
    }

}
export const removeToFav = (id) =>{
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

