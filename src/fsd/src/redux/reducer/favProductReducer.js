
let favstore = []

export const favProductReducer = (state = favstore,action) =>{

    
    if(action.type === "ADDTOFAV"){

        const filterArr = state.filter(val=>{
            return val.id != action.payload.id    
        }) 
         filterArr.unshift(action.payload)
         state = [...filterArr]

    }
    else if(action.type === "REMOVETOFAV"){

        const filterArr = state.filter((val)=>{
            return val.id != action.payload        
        })

            state = [...filterArr]

    }
    return state
}