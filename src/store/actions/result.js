import * as actionTypes from './actionTypes';

const getStoreResAction = res => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
};

export const storeResult = res => {
    return dispatch => {
        setTimeout(()=>{
            dispatch(getStoreResAction(res))
        },2000)
    }    
};

export const deleteResult = resultElId => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resultElId
    };
};