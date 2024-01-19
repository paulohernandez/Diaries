import { useContext , createContext, useReducer } from "react";

const FeedContext = createContext(null)

const feedReducer = (state,action) =>{
    switch (action.type){
        case 'SET_FEEDS': 
        return {
            feeds: action.payload
        }
        case 'CREATE_FEED': 
        return {
            feeds: [action.payload , ...state.feeds]
        }
        default:
            return state
    }
}
export const FeedContextProvider = ({children}) => {

    const [ state , dispatch ] = useReducer( feedReducer , {
        feeds:null
    })

    return (
        <FeedContext.Provider value={{...state,dispatch}}>
            {children}
        </FeedContext.Provider>
    )
}

export const useFeed = () => useContext(FeedContext);