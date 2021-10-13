import { TableData } from '../../interfaces/tableData.interface';
import styles from '../../styles/table.module.scss';

type TableProps = {
  header: Array<String>;
  data: [TableData, TableData, TableData, TableData, TableData, TableData, TableData];
};

export default function Table(props: TableProps) {
  const { header, data } = props;

  return (
    <table className={styles.table}>
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
