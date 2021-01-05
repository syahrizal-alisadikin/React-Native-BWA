const initGlobalReducer = {
    isError : false,
    message : "Ini Adalah eror"
}

export const globalReducer = (state=initGlobalReducer,action) => {
    if(action.type === "SET_ERROR"){
        return {
         ...state,
            isError : action.value.isError,
            message : action.value.message
        }

    }
    return state;
}