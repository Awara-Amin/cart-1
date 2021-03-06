import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart: cartItems,
  total:0,
  amount:0,
}



const AppProvider = ({ children }) => {
  // const [cart, setCart] = useState(cartItems)
  const [state, dispatch] = useReducer(reducer,initialState)


const clearCart = () => {
  dispatch({type: 'CLEAR-CART'})
}

// to remove items individually
const remove = (id) => {
  dispatch({type:'REMOVE',payload:id})
}
// to add items in the cart
const increase = (id) => {
  dispatch({type: 'INCREASE', payload:id})
}
// to decrease items in the cart
const decrease = (id) => {
  dispatch({type: 'DECREASE', payload:id})
}



  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
