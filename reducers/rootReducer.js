import {combineReducers} from 'redux';

const initialState = {
    makeItVisible: false,
    numberOfTiffinsModal: false, 
    dateModal: false, 
    tiffinTypeModal: false,
}


let app = (state = initialState, action) => {
    switch(action.type){
        case "COMP_TOGGLE":
            return { ...state,  [action.payload.comp]: action.payload.val};
            
        default:
            return state;
    }
}
//ds stands for data structure
let ds = (state = [], action) => {
    switch(action.type){
        case "SET_TIFFINS":
            return { ...state, tiffins: action.payload };
            
        default:
            return state;
    }
}



export default combineReducers({
    app: app,
    ds: ds
});
