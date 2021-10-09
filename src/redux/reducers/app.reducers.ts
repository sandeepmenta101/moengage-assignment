import initialState from "./initialState";
import Types from '../actionTypes/app.actionTypes';

export default function (state = initialState, action: any) {
    switch (action.type) {
        case Types.GET_INCOME_DATA:
            return {
                ...state,
                isLoading: true,
                apiResponse: ''
            }
        case Types.GET_INCOME_DATA_FAIL:
            return {
                ...state,
                isLoading: false,
                apiResponse: action?.payload?.message ?? 'Failed to fetch Income Data'
            }
        case Types.GET_INCOME_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                apiResponse: action?.payload?.message ?? 'Successfully fetched Income',
                income: action?.payload?.data ?? {}
            }
        case Types.GET_COUNTRY_DATA:
            return {
                ...state,
                isLoading: true,
                apiResponse: ''
            }
        case Types.GET_COUNTRY_DATA_FAIL:
            return {
                ...state,
                isLoading: false,
                apiResponse: action?.payload?.message ?? 'Failed to fetch Income Data'
            }
        case Types.GET_COUNTRY_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                apiResponse: action?.payload?.message ?? 'Successfully fetched Income',
                countries: action?.payload?.data ?? {}
            }
        case Types.GET_BUYERS_DATA:
            return {
                ...state,
                isLoading: true,
                apiResponse: ''
            }
        case Types.GET_BUYERS_DATA_FAIL:
            return {
                ...state,
                isLoading: false,
                apiResponse: action?.payload?.message ?? 'Failed to fetch Income Data'
            }
        case Types.GET_BUYERS_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                apiResponse: action?.payload?.message ?? 'Successfully fetched Income',
                buyers: action?.payload?.data ?? {}
            }
        case Types.GET_HIGHLIGHTS_DATA:
            return {
                ...state,
                isLoading: true,
                apiResponse: ''
            }
        case Types.GET_HIGHLIGHTS_DATA_FAIL:
            return {
                ...state,
                isLoading: false,
                apiResponse: action?.payload?.message ?? 'Failed to fetch Income Data'
            }
        case Types.GET_HIGHLIGHTS_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                apiResponse: action?.payload?.message ?? 'Successfully fetched Income',
                income: action?.payload?.data ?? {}
            }
        default:
            return initialState;
    }
}