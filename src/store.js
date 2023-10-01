// Import the createStore function from Redux
import { createStore } from 'redux';

// Define an initial state for your Redux store
const initialState = {
  balance: 0,
  fullName: '',
  mobile: null,
};

// Define a reducer function that specifies how the state should change based on actions
function accountReducer(state = initialState, action) {
  switch (action.type) {
    // When 'account/deposit' action is dispatched, update the balance by adding the payload
    case 'account/deposit':
      return { ...state, balance: state.balance + action.payload };

    // When 'withdraw' action is dispatched, update the balance by subtracting the payload
    case 'withdraw':
      return { ...state, balance: state.balance - action.payload };

    // When 'mobileUpdate' action is dispatched, update the mobile property with the payload
    case 'mobileUpdate':
      return { ...state, mobile: action.payload };

    // When 'nameUpdate' action is dispatched, update the fullName property with the payload
    case 'nameUpdate':
      return { ...state, fullName: action.payload };

    // Default case: return the current state unchanged if the action type is not recognized
    default:
      return state;
  }
}

// Create a Redux store using the accountReducer
const store = createStore(accountReducer);

// Log the initial state of the store
console.log(store.getState());

// Dispatch actions to update the store's state
store.dispatch({ type: 'account/deposit', payload: 1000 });
console.log(store.getState());

store.dispatch({ type: 'withdraw', payload: 10 });
console.log(store.getState());

store.dispatch({ type: 'mobileUpdate', payload: 8787979799 });
console.log(store.getState());

store.dispatch({ type: 'nameUpdate', payload: 'swathi' });
console.log(store.getState());
