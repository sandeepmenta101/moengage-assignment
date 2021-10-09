export interface DataInterface {
    data: {
        dataSet: {
            header: Array<String>,
            data: Array<Object>,
            stats: Object,
            filter: {
                label: string,
                value: number
            }
        }
    }
}