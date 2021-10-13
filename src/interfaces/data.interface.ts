import { TableData } from './tableData.interface';

export interface DataInterface {
  dataSet: {
    header: Array<String>,
    data: [TableData, TableData, TableData, TableData, TableData, TableData, TableData],
  },
  stats: {
    ATTRIBUTE_1: {
      label: string,
      value: number
    },
    ATTRIBUTE_2: {
      label: string,
      value: number
    },
    ATTRIBUTE_3: {
      label: string,
      value: number
    }
  },
  filter: {
    label: string,
    value: number
  }
}