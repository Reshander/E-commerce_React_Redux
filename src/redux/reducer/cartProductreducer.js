
let cartStore = []

export const cartProductreducer = (state = cartStore,action) =>{

    if(action.type === "ADDTOCART"){

        const filterArr = state.filter(val=>{
            return val.id !== action.payload.id    
        }) 
         filterArr.unshift(action.payload)
         state = [...filterArr]

    }
    else if(action.type === "REMATCART"){

        const filterArr = state.filter((val)=>{
            return val.id !== action.payload        
        })

            state = [...filterArr]

    }

   
    return state
}
