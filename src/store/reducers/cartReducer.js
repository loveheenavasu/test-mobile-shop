const initState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]"),
  totalQuantities: 0
}

const cartReducer = (state = initState, action)=> {
  let findPro;
  let index;
  switch (action.type) {
    case "ADD_TO_CART":
      const {product} = action.payload;
      const check = state.cartItems.find(pr => pr.id === product.id);
      if(check){
          return state;
      } else {
        const Tquantities = state.totalQuantities + product.quantity;
        console.log("Product deatils = > ", state.cartItems, " and => ", product);
          return {
              ...state, 
              cartItems: [...state.cartItems, product],
              totalQuantities: Tquantities
          }

      }
      case 'INCREMENT':
        findPro = state.cartItems.find(product => product.id === action.payload);
        index = state.cartItems.findIndex(product => product.id === action.payload);
        findPro.quantity += 1;
        state.cartItems[index] = findPro;
        return {
            ...state,
            totalQuantities: state.totalQuantities+1
        }
      case "DECREMENT":
      findPro = state.cartItems.find(product => product.id === action.payload);
      index = state.cartItems.findIndex(product => product.id === action.payload);
      if(findPro.quantity > 1){
         findPro.quantity -= 1;
         state.cartItems[index] = findPro;
         return {
             ...state,
             totalQuantities: state.totalQuantities - 1
         }
      } else {
          return state;
      }
      case 'REMOVE':
      findPro = state.cartItems.find(product => product.id === action.payload);
      const filtered = state.cartItems.filter(product => product.id !== action.payload);
      return {
          ...state,
          cartItems: filtered
      }
      case 'REMOVECART':
      return {
          ...state,
          cartItems: [],
          totalQuantities: 0
      }
    default:
      return state;
  }
};

export default cartReducer;
