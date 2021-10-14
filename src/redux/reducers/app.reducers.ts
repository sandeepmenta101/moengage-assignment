import initialState from "./initialState";
import Types from '../actionTypes/app.actionTypes';

export default function appReducer (state = initialState, action: any) {
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
                apiResponse: action?.payload?.message ?? 'Failed to fetch Income Data',
            }
        case Types.GET_HIGHLIGHTS_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                apiResponse: action?.payload?.message ?? 'Successfully fetched Income',
                highLights: action?.payload?.data ?? {},
            }
        case Types.FULL_SCREEN:
            const screenName = action.payload;
            let prevScreenValue;
            if(screenName === 'highlights'){
                prevScreenValue = state.fullScreenMode.highlights;
            }else if(screenName === 'buyers'){
                prevScreenValue = state.fullScreenMode.buyers;
            }else if(screenName === 'income'){
                prevScreenValue = state.fullScreenMode.income;
            }else if(screenName === 'countries'){
                prevScreenValue = state.fullScreenMode.countries;
            }
            return {
                ...state,
                fullScreenMode: {
                    ...state.fullScreenMode,
                    [screenName]: !prevScreenValue
                },
                afterViewInitialized: !prevScreenValue
            }
        default:
            return initialState;
    }
}