import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const initialState = {
    results: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.STORE_RESULT:
            const results = state.results.concat({id: new Date(), value: action.result})
            return updateObject(state, {results});
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return updateObject(state, {results: updatedArray});
    }
    return state;
};

export default reducer;