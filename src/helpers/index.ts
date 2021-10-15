import { DataInterface } from './../interfaces/data.interface';

export const sortData = (data: DataInterface, sort: String) => {
    let sortedData = [];
    let result = {};
    if (sort === 'value') {
        sortedData = data?.dataSet?.data.sort((a: any, b: any) => {
            return a.value - b.value;
        });
        result = { ...data, dataSet: { header: data?.dataSet.header, data: sortedData } };
    } else {
        sortedData = data?.dataSet?.data.sort((a: any, b: any) => {
            if (a.label.toLowerCase() < b.label.toLowerCase()) {
                return -1;
            } else if (a.label.toLowerCase() > b.label.toLowerCase()) {
                return 1;
            }
            return 0;
        });
        result = { ...data, dataSet: { header: data.dataSet.header, data: sortedData } };
    }
    return result;
}