import types from '../actionTypes/app.actionTypes';

const apiEndPoint = 'http://13.232.99.42/';

export const fetchIncomeData = (data: string) => (dispatch: any) => {
    dispatch({type: types.GET_INCOME_DATA});
    fetch(`${apiEndPoint}${data}`).then((res) => res.json()).then((response) => {
        dispatch({type: types.GET_INCOME_DATA_SUCCESS, payload: response});
    }).catch(err => dispatch({ type: types.GET_INCOME_DATA_FAIL, payload: err })); 
}

export const fetchHighLightsData = (data: string) => (dispatch: any) => {
    dispatch({type: types.GET_HIGHLIGHTS_DATA});
    fetch(`${apiEndPoint}${data}`).then((res) => res.json()).then((response) => {
        dispatch({type: types.GET_HIGHLIGHTS_DATA_SUCCESS, payload: response});
    }).catch(err => dispatch({ type: types.GET_HIGHLIGHTS_DATA_FAIL, payload: err })); 
}

export const fetchCountriesData = (data: string) => (dispatch: any) => {
    dispatch({type: types.GET_COUNTRY_DATA});
    fetch(`${apiEndPoint}${data}`).then((res) => res.json()).then((response) => {
        dispatch({type: types.GET_COUNTRY_DATA_SUCCESS, payload: response});
    }).catch(err => dispatch({ type: types.GET_COUNTRY_DATA_FAIL, payload: err })); 
}

export const fetchBuyersData = (data: string) => (dispatch: any) => {
    dispatch({type: types.GET_BUYERS_DATA});
    fetch(`${apiEndPoint}${data}`).then((res) => res.json()).then((response) => {
        dispatch({type: types.GET_BUYERS_DATA_SUCCESS, payload: response});
    }).catch(err => dispatch({ type: types.GET_BUYERS_DATA_FAIL, payload: err })); 
}