import initialState from "./initialState";
import Types from '../actionTypes/app.actionTypes';
import { sortData } from '../../helpers';

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
            const income = action?.payload?.data?.dataSet?.data.sort((a: any, b: any) => {
                return a.value - b.value;
            });
            const incomeData = { ...action.payload.data, dataSet: { header: action.payload.data.dataSet.header, data: income } };
            return {
                ...state,
                isLoading: false,
                apiResponse: action?.payload?.message ?? 'Successfully fetched Income',
                income: incomeData ?? {}
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
            const country = action?.payload?.data?.dataSet?.data.sort((a: any, b: any) => {
                return a.value - b.value;
            });
            const countryData = { ...action.payload.data, dataSet: { header: action.payload.data.dataSet.header, data: country } };
            return {
                ...state,
                isLoading: false,
                apiResponse: action?.payload?.message ?? 'Successfully fetched Income',
                countries: countryData ?? {}
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
            const buyer = action?.payload?.data?.dataSet?.data.sort((a: any, b: any) => {
                return a.value - b.value;
            });
            const buyerData = { ...action.payload.data, dataSet: { header: action.payload.data.dataSet.header, data: buyer } };
            return {
                ...state,
                isLoading: false,
                apiResponse: action?.payload?.message ?? 'Successfully fetched Income',
                buyers: buyerData ?? {}
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
            const highlights = action?.payload?.data?.dataSet?.data.sort((a: any, b: any) => {
                return a.value - b.value;
            });
            const highlightsData = { ...action.payload.data, dataSet: { header: action.payload.data.dataSet.header, data: highlights } };
            return {
                ...state,
                isLoading: false,
                apiResponse: action?.payload?.message ?? 'Successfully fetched Income',
                highLights: highlightsData ?? {},
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
        case Types.SORT_THE_TABLE:
            const { type, sort } = action.payload;
            let data: any;
            if(type === 'countries'){
                data = state.countries;
                const result = sortData(data, sort);
                return {
                    ...state,
                    apiResponse: '',
                    countries: result
                }
            }else if(type === 'highlights'){
                data = state.highLights;
                const result = sortData(data, sort);
                console.log(result);
                return {
                    ...state,
                    apiResponse: '',
                    highLights: result
                }
            }else if(type === 'income'){
                data = state.income;
                const result = sortData(data, sort);
                return {
                    ...state,
                    apiResponse: '',
                    income: result
                }
            }else{
                data = state.buyers;
                const result = sortData(data, sort);
                return {
                    ...state,
                    apiResponse: '',
                    buyers: result
                }
            }

        default:
            return initialState;
    }
}