import { INC_NUMBER, DEC_NUMBER } from '../actions';

// This is an anonymous function therefore in the main index.js you can name it as you please.
// it is named allReducers in index.js
// if you used a const instead of export you would need to call the name of the function within index.js performAction
export default function performAction(state = { num:0 }, action) {
    switch(action.type) {
        case INC_NUMBER:
          console.log('Action performed from reducer');
          console.log(state, action); 
          let num= state.num+1; 
          return { num }
          case DEC_NUMBER:
          num= state.num-1; 
          return { num }
        default:
        return state;  
    }
}