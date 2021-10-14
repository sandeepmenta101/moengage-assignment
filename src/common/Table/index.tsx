import { TableData } from '../../interfaces/tableData.interface';
import styles from '../../styles/table.module.scss';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

type TableProps = {
  header: Array<String>;
  data: [TableData, TableData, TableData, TableData, TableData, TableData, TableData];
};

export default function Table(props: TableProps) {
  const { header, data } = props;
  const [toggleTableWidth, setToggleTableWidth] = useState(false);
  const { fullScreenMode } = useSelector((state: any) => state.appReducer)

  useEffect(() => {
    const isFullScreen = Object.values(fullScreenMode).some((screen) => screen === true);
    setToggleTableWidth(isFullScreen);
  }, [fullScreenMode])

  return (
    <table className={toggleTableWidth ? styles.fullHeightTable : styles.table}>
      <thead>
        <tr>
          {header?.map((head: String) => (
            <th>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((row) => (
          <tr>
            <td style={{color: row.color}}>{row.label}</td>
            <td style={{color: row.color}}>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
