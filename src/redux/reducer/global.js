const initGlobalReducer = {
    isError : false,
    message : "Ini Adalah eror",
    isLoading: false
}

export const globalReducer = (state=initGlobalReducer,action) => {
    if(action.type === "SET_ERROR"){
        return {
         ...state,
            isError : action.value.isError,
            message : action.value.message
        }

    }

    if(action.type === "SET_LOADING"){
        return {
            ...state,
            isLoading : action.value
        }
    }
    return state;
}