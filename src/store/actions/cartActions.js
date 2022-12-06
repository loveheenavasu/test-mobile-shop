export const addToCart = (product) => (dispatch, getState) => {
  
  dispatch({
    type: "ADD_TO_CART",
    payload: {product} ,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: "REMOVE",
    payload: id,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeCart = (data) => (dispatch, getState) => {
  dispatch({
    type: "REMOVECART",
    payload: data,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}